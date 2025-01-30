    // Mapbox tileset for country boundaries
    const countryBoundariesTileset = 'mapbox://mapbox.country-boundaries-v1';

    map.on('load', function() {
        // Add the country boundaries source from Mapbox's built-in tileset
        map.addSource('country-boundaries', {
            type: 'vector',
            url: countryBoundariesTileset
        });


        // Load your CSV data (or JSON data)
        fetch('data.csv')
            .then(response => response.text()) // For CSV data
            .then(csvData => {
                // Parse CSV data into an array of objects (or use JSON parsing if needed)
                const countryData = Papa.parse(csvData, { header: true }).data;

                // Aggregate the data by country
                var countryColumn = "In which country, region, or territory is the affected project or program located?";
                const aggregatedData = countryData.reduce((acc, row) => {
                    let country = row[countryColumn];
                    if (country == "Côte d'Ivoire [Ivory Coast]") {
                        country = "Ivory Coast";
                    } else if (country == "Myanmar [Burma]") {
                        country = "Myanmar (Burma)";
                    } else if (country == "Russian Federation") {
                        country = "Russia";
                    } else if (country == "State of Palestine") {
                        country = "Palestinian Territories";
                    } else if (country == "Syrian Arab Republic") {
                        country = "Syria";
                    } else if (country == "United States of America") {
                        country = "United States";
                    }
                    if (!acc[country]) {
                        acc[country] = [];
                    }
                    acc[country].push(row);
                    return acc;
                }, {});

                // Add a fill layer for country boundaries
                map.addLayer({
                    id: 'country-boundaries-layer',
                    type: 'fill',
                    source: 'country-boundaries',
                    'source-layer': 'country_boundaries',
                    filter: ['any',
                        ['==', ['get', 'worldview'], "all"],
                        ['in', "US", ["get", "worldview"]]
                    ],
                    paint: {
                        'fill-color': [
                            'match',
                            ['get', 'name_en'],
                            ...Object.keys(aggregatedData).flatMap(country => [country, 'rgba(241, 131, 32, 0.6)']),  // Green for matching countries
                            'rgba(255, 255, 255, 0.2)'  // Red for countries without data
                        ]
                    }
                });
                // When a country is clicked, show details in the side panel
                map.on('click', 'country-boundaries-layer', function (e) {
                    loadCountry( e.features[0].properties['name_en']);
                });


                function loadCountry(countryName) {

                    // Find the corresponding country details (can be multiple rows)
                    var countryDetails = aggregatedData[countryName] || [];

                    if (countryDetails.length > 0) {
                        // Create HTML content for each row of data for the clicked country
                        let detailsHtml = countryDetails.map(detailRow => `
                <h2>${detailRow['What is the name of the affected project or program?']}</h2>
                <p><strong>Impact:</strong> ${detailRow['In what specific ways does the stop work order impact this project?']}</p>
                <p><strong>US Security Risk:</strong> ${detailRow['What risks, if any, does the halting of your program pose to US national security?']}</p>
                <p><strong>US Economic Impact:</strong> ${detailRow['What impacts, if any, does the halting of your program pose to the US economy?']}</p>
                <hr />
            `).join('');

                        // Populate the side panel with the country details
                        document.getElementById('countryName').textContent = countryName;
                        document.getElementById('countryDetails').innerHTML = detailsHtml;
                        document.getElementById('infoPanel').style.display = 'block';
                    } else {
                        document.getElementById('countryName').textContent = '';
                        document.getElementById('countryDetails').innerHTML = '';
                    }
                }  
                // Change the cursor to a pointer when hovering over a country
                map.on('mouseenter', 'country-boundaries-layer', function () {
                    map.getCanvas().style.cursor = 'pointer';
                });

                // Change the cursor back when not hovering over a country
                map.on('mouseleave', 'country-boundaries-layer', function () {
                    map.getCanvas().style.cursor = '';
                });

                document.getElementById('global-button').addEventListener('click', function() {
                    loadCountry('Global');
                });
            });
   


        // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 120;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                // Slow spinning at higher zooms
                const zoomDif =
                    (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
            const center = map.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls a 'moveend' event.
            map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }

        // Pause spinning on interaction
        map.on('mousedown', () => {
            userInteracting = true;
        });

        // Restart spinning the globe when interaction is complete
        map.on('mouseup', () => {
            userInteracting = false;
            spinGlobe();
        });

        // These events account for cases where the mouse has moved
        // off the map, so 'mouseup' will not be fired.
        map.on('dragend', () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on('pitchend', () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on('rotateend', () => {
            userInteracting = false;
            spinGlobe();
        });

        // When animation is complete, start spinning if there is no ongoing interaction
        map.on('moveend', () => {
            spinGlobe();
        });
        spinGlobe();    
    });
