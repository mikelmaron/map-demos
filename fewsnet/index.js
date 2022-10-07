/* global turf c3  */

'use strict';
/**
 * Customize this impact tool by filling in the following values to match your data
 */
const config = {
  /**
   * Replace this with your Mapbox Access Token (**Do this first!**)
   */
  accessToken:
    'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
  /**
   * Replace with the url of your map style
   */
  mapStyle: 'mapbox://styles/mikelmaron/cl8w1swct001614odwboi3an1',
  tileSource: 'mikelmaron.1d7ai9xs',
  /**
   * The layers within the vector tileset to use for querying
   */
  sourceLayers: ['202102', '202106', '202110'],
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
  chartType: 'line'

};

/** ******************************************************************************
 * Don't edit below here unless you want to customize things further
 */
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
    // TODO make the initial chart have as many points as the number of fields
    columns: [['data', 0, 0,0]],
    names: { data: config.dataSeriesLabel },
    // To make a bar chart uncomment this line
    type: config.chartType ? config.chartType : 'line',
  },
  axis: {
    x: {
      type: 'category',
      categories: config.sourceLayers,
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

map.once('idle', () => {
  map.on('click', onMapClick);
  addToggleButtons();
});

function onMapClick(e) {
  let coordinates = e.lngLat;
  let tilequery_url = "https://api.mapbox.com/v4/" + config.tileSource + "/tilequery/" + coordinates.lng + "," + coordinates.lat + ".json?access_token=" + config.accessToken;
  fetch(tilequery_url)
  .then(response => response.json())
  .then(json => {
    let data = [0,0,0];
    let name = '';
    json.features.forEach((feature, idx) => {
      let layer = feature.properties.tilequery.layer;
      config.sourceLayers.forEach((sourceLayer, idx) => {
        if (layer == sourceLayer) {
          data[idx] = feature.properties[config.field];
        }
        if (layer == config.labelLayer) {
          name = feature.properties[config.labelField];
        }
      });
    });
    updateChartFromClick(data);
    document.getElementById('sidebar-description').innerHTML = name;
  });
  marker.setLngLat(coordinates).addTo(map);
}

/**
 * This function takes in the clicked feature and builds a data object for the chart using fields
 * specified in the config object.
 * @param {Object} feature
 */
function updateChartFromClick(data) {
  chart.load({
    columns: [['data'].concat(data)]
  });
}

function addToggleButtons() {
  for (const id of config.sourceLayers) {
    // Skip layers that already have a button set up.
    if (document.getElementById(id)) {
      continue;
    }
   
    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = id;
   
    // Show or hide layer when the toggle is clicked.
    link.onclick = function (e) {
      const clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();
      config.sourceLayers.forEach((sourceLayer, idx) => {
        if (sourceLayer == clickedLayer) {
          map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
          this.className = 'active';
        } else {
          map.setLayoutProperty(sourceLayer, 'visibility', 'none');
          document.getElementById(sourceLayer).className = '';
        }
      });
    };
   
    const layers = document.getElementById('menu');
    layers.appendChild(link);
  }
  document.getElementById(config.sourceLayers[ config.sourceLayers.length - 1]).click();
}