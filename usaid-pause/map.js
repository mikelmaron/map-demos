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
                    if (!acc[row[countryColumn]]) {
                        acc[row[countryColumn]] = [];
                    }
                    acc[row[countryColumn]].push(row);
                    return acc;
                }, {});

                // Add a fill layer for country boundaries
                map.addLayer({
                    id: 'country-boundaries-layer',
                    type: 'fill',
                    source: 'country-boundaries',
                    'source-layer': 'country_boundaries',
                    filter: ['any',
                        ['==',['get','worldview'], "all"],
                        ['in', "US", ["get", "worldview"]]
                    ],
                    paint: {
                       'fill-color': [
                            'match',
                            ['get', 'name_en'],
                            ...Object.keys(aggregatedData).flatMap(country => [country, 'rgba(0, 128, 0, 0.6)']),  // Green for matching countries
                            'rgba(0, 0, 0, 0)'  // Red for countries without data
                        ],
                        'fill-outline-color': 'rgba(0, 0, 0, 0.5)'                         
                    }
                });
                // When a country is clicked, show details in the side panel
                map.on('click', 'country-boundaries-layer', function(e) {
                    var countryName = e.features[0].properties['name_en'];

                    // Find the corresponding country details (can be multiple rows)
                    var countryDetails = aggregatedData[countryName] || [];

                    if (countryDetails.length > 0) {
                        // Create HTML content for each row of data for the clicked country
                        let detailsHtml = countryDetails.map(detailRow => `
                            <p><strong>Program Name:</strong> ${detailRow['What is the name of the affected project or program?']}</p>
                            <p><strong>Impact:</strong> ${detailRow['In what specific ways does the stop work order impact this project?']}</p>
                            <hr />
                        `).join('');

                        // Populate the side panel with the country details
                        document.getElementById('countryName').textContent = countryName;
                        document.getElementById('countryDetails').innerHTML = detailsHtml;
                        document.getElementById('infoPanel').style.display = 'block';
                    }
                });

                // Change the cursor to a pointer when hovering over a country
                map.on('mouseenter', 'country-boundaries-layer', function() {
                    map.getCanvas().style.cursor = 'pointer';
                });

                // Change the cursor back when not hovering over a country
                map.on('mouseleave', 'country-boundaries-layer', function() {
                    map.getCanvas().style.cursor = '';
                });
            });
    });
