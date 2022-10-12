'use strict';

const config = {

  accessToken:
    'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',

  mapStyle: 'mapbox://styles/mikelmaron/cl8w1swct001614odwboi3an1',

  sourceLayers: {
    'mikelmaron.3vfoxwtv': ['200907','200910'],
    'mikelmaron.49oiddh4': ['201001','201004','201007','201010'],
    'mikelmaron.79bhg27n': ['201101','201104','201107','201110'],
    'mikelmaron.69z9bmkx': ['201201','201204','201207','201210'],
    'mikelmaron.4fduo916': ['201301','201304','201307','201310'],
    'mikelmaron.bwyf33un': ['201401','201404','201407','201410'],
    'mikelmaron.8ckbs4x3': ['201501','201504','201507','201510'],
    'mikelmaron.4h3axuyp': ['201602','201606','201610'],
    'mikelmaron.1vjd12vq': ['201702','201706','201710'],
    'mikelmaron.6xeqjeox': ['201802','201806','201810','201812'],
    'mikelmaron.1sjenia3': ['201902','201906','201910'],
    'mikelmaron.3sn6k2bp': ['202002','202006','202010'],
    'mikelmaron.1d7ai9xs': ['202102','202106','202110']
  },
  /**
   * This sets the title in the sidebar and the <title> tag of the app
   */
  title: 'FEWSNET IPC Phases 2021',
  /**
   * This sets the description in the sidebar
   */
  description:
    '',
  /**
   * Data field to chart from the source data
   */
  field: 'CS',
  /**
   * Label for the graph line
   */
  dataSeriesLabel: 'IPC Phase',
  labelLayer: '202110',
  labelField: 'unit_name',
  /**
   * (_Optional_) Set this to 'bar' for a bar chart, default is line
   */
  chartType: 'line',
  /**
   * The name of the vector source, leave as composite if using a studio style,
   * change if loading a tileset programmatically
   */
  sourceId: 'composite',
};

config.allLayers = Object.keys(config.sourceLayers).map((key) => {
  return config.sourceLayers[key];
}).flat(1);

/**
 * Disable this function if you edit index.html directly
 */
(() => {
  document.title = config.title;
  document.getElementById('sidebar-title').textContent = config.title;
  document.getElementById('sidebar-description').innerHTML = config.description;
})();

/**
 * We use C3 for charts, a layer on top of D3. For docs and examples: https://c3js.org/
 */
const chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [['data'].concat(new Array(config.allLayers.length).fill(0))],
    names: { data: config.dataSeriesLabel },
    type: config.chartType ? config.chartType : 'line',
  },
  axis: {
    x: {
      type: 'category',
      categories: config.allLayers,
      tick: { count: 5, rotate: 45, culling: false }
    },
    y: { max: 5, min: 0, tick: {count: 6, values: [0,1,2,3,4,5] }}
  },
  size: {
    height: 150,
  },
});

// For tracking usage of our templates
const transformRequest = (url) => {
  const isMapboxRequest =
    url.slice(8, 22) === 'api.mapbox.com' ||
    url.slice(10, 26) === 'tiles.mapbox.com';
  return {
    url: isMapboxRequest ? url.replace('?', '?pluginName=charts&') : url,
  };
};
mapboxgl.accessToken = config.accessToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: config.mapStyle,
  // Change this if you want to zoom out further
  minZoom: 2,
  transformRequest,
  zoom: 5,
  center: [42.184,6.805]
});

const marker = new mapboxgl.Marker();

function addLayers() {
  Object.keys(config.sourceLayers).forEach((source) => {
    map.addSource(source, {
      type: 'vector',
      url: 'mapbox://' + source
    });
    config.sourceLayers[source].forEach((layer) => {
      map.addLayer({
        'id': layer,
        'type': 'fill',
        'source': source,
        'source-layer': layer,
        'layout': {'visibility': 'none'},
        'paint': {
          'fill-color': [
            "match",
            ["get", "CS"],
            [1],
            "#d8f3da",
            [2],
            "#fee500",
            [3],
            "#f77000",
            [4],
            "#cd0000",
            [5],
            "#6d0000",
            "hsl(0, 2%, 74%)"
          ]
        }
      }, "admin-1-boundary-bg");
    });
  });
}

function addLivelihoodLayer() {
  map.addLayer({
    'id': "livelihood-zone",
    'type': 'line',
    'source': Object.keys(config.sourceLayers)[ Object.keys(config.sourceLayers).length -1 ],
    'source-layer': config.allLayers[ config.allLayers.length -1 ],
    'paint': {
      'line-color': "hsla(0, 0%, 0%, 0.15)"
    }
  }, "settlement-subdivision-label");
}

map.on('load', () => {
  addLayers();
  addLivelihoodLayer();
});

map.once('idle', () => {
  map.on('click', onMapClick);
  addSlider();
});

function onMapClick(e) {
  const coordinates = e.lngLat;
  let data = new Array(config.allLayers.length).fill(0);
  let promises = [];
  let allData;
  let name = '';

  Object.keys(config.sourceLayers).forEach((source, idx) => {
    const tilequery_url = "https://api.mapbox.com/v4/" + source + "/tilequery/" + coordinates.lng + "," + coordinates.lat + ".json?access_token=" + config.accessToken;
    promises.push(
      fetch(tilequery_url)
      .then(response => response.json())
      .then(json => {
        json.features.forEach((feature, idx) => {
          const layer = feature.properties.tilequery.layer;
          config.allLayers.forEach((sourceLayer, idx) => {
            if (layer == sourceLayer) {
              data[idx] = feature.properties.CS;
            }
            if (layer == config.labelLayer) {
              name = feature.properties[config.labelField];
            }
          });
        });
      })
    );
    allData = Promise.all(promises);
  });
  allData.then(() => {
    updateChartFromClick(data);
    document.getElementById('sidebar-description').innerHTML = name;
  });
  marker.setLngLat(coordinates).addTo(map);
}

function updateChartFromClick(data) {
  chart.load({
    columns: [['data'].concat(data)]
  });
}

function addSlider() {
  let layerSlider = document.getElementById("layerSlider");
  layerSlider.max = config.allLayers.length - 1;

  layerSlider.oninput = function() {
    let sliderPosition = this.value;
    document.getElementById("sliderLabel").textContent = config.allLayers[sliderPosition];
    let layerIndex = 0;

    Object.keys(config.sourceLayers).forEach((source) => {
      config.sourceLayers[source].forEach((layer) => {
        if (layerIndex == sliderPosition) {
          map.setLayoutProperty(layer, 'visibility', 'visible');
        } else {
          map.setLayoutProperty(layer, 'visibility', 'none');
        }
        layerIndex++;
      });
    });

  };
  layerSlider.value = layerSlider.max;
  layerSlider.oninput();
}