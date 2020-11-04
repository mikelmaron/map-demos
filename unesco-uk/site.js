// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken = 'pk.eyJ1IjoibXJhYmFnbGlhdGkiLCJhIjoiY2p6MzI0OHl5MDJ3ZjNoczR5eGlnb3JuNyJ9.PLgYsmJA9SQGKdi6uyBkZQ';
/**
 * Add the map to the page
*/
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mrabagliati/ckesnacqe269f19uigmog120e/',
  center: [-3.4,54.39],
  zoom: 4.5
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

var unesco_layers = {
  'world-heritage-sites-uk': {'designation': 'World Heritage Sites', 'polygon_layers': ['world-heritage-sites-uk-geojs-8sr5zo','wales-world-heritage-d2cf86']},
  'creative-cities-uk' : {'designation': 'Creative City', 'polygon_layers': ['unesco-creative-cities-uk-azclfz']},
  'biosphere-reserves-uk': {'designation': 'Biosphere Reserve', 'polygon_layers': ['biosphere-reserves-uk-bpwvec']},
  'uk-global-geoparks': {'designation':'Global Geoparks', 'polygon_layers': ['nwhg-boundary','unesco-global-geoparks-4tkvxa'] }
};

/**
 * Wait until the map loads to make changes to the map.
*/
map.on('load', function (e) {
  makeMarkersClickable();
  d3.csv('./UNESCO sites.csv', buildLocationList);
  addToggles();
});

/**
 * Add a marker to the map for every store listing.
**/
function makeMarkersClickable() {
  map.on('click', function (e) {
    var clicked = map.queryRenderedFeatures(e.point, {'layers': Object.keys(unesco_layers)});
    if (clicked.length == 0) return;

    flyToSite(clicked[0].geometry.coordinates);
    createPopUp(clicked[0].properties, clicked[0].geometry.coordinates);
    activateListing(clicked[0].properties);
  });

  Object.keys(unesco_layers).forEach(function(layer,i) {
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', layer, function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', layer, function () {
      map.getCanvas().style.cursor = '';
    });
  });

}

/* Add a new listing section to the sidebar. */
function buildLocationList(data) {
  data.forEach(function(site, i){
    if (! site.Latitude) return;

    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + slugify(getName(site));
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item ' + slugify(site['Designation type']);

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = "link-" + slugify(getName(site));
    link.innerHTML = getName(site) +  " " + designation_icon(site['Designation type']);

    var description = listing.appendChild(document.createElement('div'));
    description.classList.add('description');
    description.innerHTML = site.Description + "<p/>" + "<a target='_blank' href='" + site['Website'] + "'>Website 🌐</a>";

    link.addEventListener('click', function(e){
      for (var i=0; i < data.length; i++) {
        if (! data[i].Latitude) continue;
        if (this.id === "link-" + slugify(getName(data[i]))) {
          var clickedListing = data[i];
          flyToSite([clickedListing['Longtitude '], clickedListing['Latitude']]);
          createPopUp(clickedListing, [clickedListing['Longtitude '], clickedListing['Latitude']]);
        }
      }
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  });
}

function addToggles() {
  var toggles = document.getElementById('toggles');
  var columns = [toggles.appendChild(document.createElement('div')), toggles.appendChild(document.createElement('div'))];
  columns[0].classList.add('column');
  columns[1].classList.add('column');

  var toggle = addToggle(columns[0], '', 'All');
  toggle.classList.add('on');

  Object.keys(unesco_layers).forEach(function(layer,i) {
    addToggle(columns[ (i+1) % 2 ], layer, unesco_layers[layer].designation);
  });
}

function addToggle(div, id, label) {
  var toggle = div.appendChild(document.createElement('div'));
  toggle.classList.add('toggle');
  var link = toggle.appendChild(document.createElement('a'));
  link.href = '#';
  link.id = id;
  link.innerHTML = label;
  link.addEventListener('click', function(e) {
    document.getElementsByClassName('on')[0].classList.remove('on');
    this.parentElement.classList.add('on');
    toggleLayer(this.id);
    map.flyTo({
      center:  [-3.4,54.39],
      zoom: 4.5
    });
  });
  return toggle;
}

function toggleLayer (layer) {
  closePopUp();

  var items = document.getElementsByClassName('item');
  Array.prototype.forEach.call(items,function(listing) {
    listing.classList.add('hidden');
  });

  Object.keys(unesco_layers).forEach(function(unesco_layer, i) {
    if (layer == '' || layer == unesco_layer) {
      map.setLayoutProperty(unesco_layer, 'visibility', 'visible');
      unesco_layers[ unesco_layer ].polygon_layers.forEach(function(polygon_layer) {
        map.setLayoutProperty(polygon_layer, 'visibility', 'visible');
      });

      var items = document.getElementsByClassName(slugify(unesco_layers[ unesco_layer ].designation));
      Array.prototype.forEach.call(items, function(listing){
        listing.classList.remove('hidden');
      });

    } else {
      map.setLayoutProperty(unesco_layer, 'visibility', 'none');
      unesco_layers[ unesco_layer ].polygon_layers.forEach(function(polygon_layer) {
        map.setLayoutProperty(polygon_layer, 'visibility', 'none');
      });
    }
  });
}

function flyToSite(coordinate) {
  map.flyTo({
    center: coordinate,
    zoom: 9
  });
}

function createPopUp(properties, coordinate) {
  return;
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({closeOnClick: true})
    .setLngLat(coordinate)
    .setHTML('<h3>' + getName(properties)  + '</h3>' + '<h4>test</h4>')
    .addTo(map);
}

function closePopUp() {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  }
}

function activateListing(properties) {
  var activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  }
  var listing = document.getElementById('listing-' + slugify(getName(properties)));
  listing.classList.add('active');
  document.getElementById('listings').scrollTop = listing.offsetTop - document.getElementById('heading').offsetHeight;
}

/* Utils */

function getName(properties) {
  return properties['Account Name'] || properties['Name'];
}

function slugify(string) {
  return string.replace(/[^A-Za-z0-9]/g, '');
}

function designation_icon(designation) {
  if (designation == "World Heritage Sites") {
    return "🏛️";
  } else if (designation == "Creative City") {
    return "🏙";
  } else if (designation == "Biosphere Reserve") {
    return "🍎";
  } else if (designation == "Global Geoparks") {
    return "🌋";
  }
}
