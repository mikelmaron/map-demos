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
  title: 'FEWSNET 2021',
  /**
   * This sets the description in the sidebar
   */
  description:
    'Acute Food Insecurity 2021',
  /**
   * Data field to chart from the source data
   */
  field: 'CS',
  /**
   * Label for the graph line
   */
  dataSeriesLabel: 'IPC Phase',
  /**
   * Basic implementation of zooming to a clicked feature
   */
  zoomToFeature: true,
  /**
   * Color to highlight features on map on click
   * TODO: add parameter for fill color too?
   */
  highlightColor: '#fff',
  /**
   * (_Optional_) Set this to 'bar' for a bar chart, default is line
   */
  chartType: 'line',
  /**
   * The name of the vector source, leave as composite if using a studio style,
   * change if loading a tileset programmatically
   */
  sourceId: 'composite',

  /**
   * Legend colors and values, ignored if autoLegend is used. Delete both if no legend is needed.
   */
  legendColors: ['#c200c2', '#a200a3', '#810184', '#600165', '#400246'],
  legendValues: [13.779, 33.44, 40.88, 46.99, 53.86],
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
    json.features.forEach((feature, idx) => {
      let layer = feature.properties.tilequery.layer;
      config.sourceLayers.forEach((sourceLayer, idx) => {
        if (layer == sourceLayer) {
          data[idx] = feature.properties.CS;
        }
      });
    });
    updateChartFromClick(data);
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

/**
 * Builds out a legend from the viz layer
 */
function buildLegend() {
  const legend = document.getElementById('legend');
  const legendColors = document.getElementById('legend-colors');
  const legendValues = document.getElementById('legend-values');

  if (config.autoLegend) {
    legend.classList.add('block-ml');
    const style = map.getStyle();
    const layer = style.layers.find((i) => i.id === config.studioLayerName);
    const fill = layer.paint['fill-color'];
    // Remove the interpolate expression to get the stops
    const stops = fill.slice(3);
    stops.forEach((stop, index) => {
      // Every other value is a value, and then a color. Only iterate over the values
      if (index % 2 === 0) {
        // Default to 1 decimal unless specified in config
        const valueEl = `<div class='col align-center'>${stop.toFixed(
          typeof config.autoLegendDecimals !== 'undefined'
            ? config.autoLegendDecimals
            : 1,
        )}</div>`;
        const colorEl = `<div class='col h12' style='background-color:${
          stops[index + 1]
        }'></div>`;
        legendColors.innerHTML += colorEl;
        legendValues.innerHTML += valueEl;
      }
    });
  } else if (config.legendValues) {
    legend.classList.add('block-ml');
    config.legendValues.forEach((stop, idx) => {
      const key = `<div class='col h12' style='background-color:${config.legendColors[idx]}'></div>`;
      const value = `<div class='col align-center'>${stop}</div>`;
      legendColors.innerHTML += key;
      legendValues.innerHTML += value;
    });
  }
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