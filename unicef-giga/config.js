var config = {
    style: 'mapbox://styles/mikelmaron/ckiis912v087219qqo3hf2nuz/',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    showMarkers: false,
    theme: 'dark',
    title: 'Unicef Giga: Kazakhstan',
    subtitle: 'Accessibility analysis of connected schools',
    byline: '',
    footer: 'Source: ',
    use3dTerrain: true,
    chapters: [
      /*
1) show all Kazakhstan
2) show schools and count
3) show connectivity levels and counts
4) show accessibility (zoom in)
5) show another location and give summary of population comparisons

7) methodology: isochrones api, merge, clip
8) display qgis process -- reusable
9) limitations: isochrone generalization
10) limitations: road network incomplete. options: buffer or improve road network
6) show another location that shows off 3d and satellite (point out new features)
11) limitation / question: population data sets

Alex feedback:

Ok one issue — i see the whole map style load initially then it disappears


Could be worth exploring a few areas in detail — one with high connectivity, one with low
12:05
feels like there is a lot of time spent on build up, and limitations
12:06
So after schools -accessibility, show a few areas of interest
12:06
“here is one place, here is another”
12:06
then talk about summary stats, methods, limitation

nd then maybe add in one more positive before the explore part
12:08
so it doesn’t end on limitations
12:08
like zoom back out and have some conclusion: In this analysis we found xyz
12:09
Maybe Limitaions, Next Steps, Conclusions
12:10
What would we do next: Add in buffering, optimize the slicing of the layers, try other population layers with age cohorts

      */
        {
            id: 'kazakhstan',
            alignment: 'left',
            title: 'Kazakhstan',
            description: 'This analytic exploration looks at what portion of the population of Kazakhstan has access to schools at each connectivity level.',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-dots',
                opacity: 0
              },
              {
                layer: 'schools-glow',
                opacity: 0
              },
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: 0
              },
            ],
            onChapterExit: []
        },
        {
            id: 'schools',
            alignment: 'left',
            title: 'Schools',
            image: '',
            description: 'There are 7410 schools in Kazakhstan.',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-dots',
                opacity: 1
              },
              {
                layer: 'schools-glow',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'schools-connectivity',
            alignment: 'left',
            title: 'Schools Connectivity',
            image: '',
            description: '4195 Schools have high connection (in yellow, rated 7-10), 2797 have medium connection (in orange, rated 4-6), 351 low connection (in purple, rated 0-3) (and 67 with no speed data).',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: .75,
                duration: 1000
              },
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: 0
              },
            ],
            onChapterExit: []
        },
        {
            id: 'schools-accessibility',
            alignment: 'left',
            title: 'Schools Accessibility',
            image: '',
            description: 'For each school, calculated the area that can reach the school in 30 minutes drive, and merged the low, medium, and high connectivity catchment areas.',
            location: {
                center: [69.007,43.112],
                zoom: 8,
                pitch: 28,
                bearing: 20
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              }
            ],
            onChapterExit: []
        },
        {
            id: 'city-mixed',
            alignment: 'left',
            title: 'City with mixed connectivity',
            image: '',
            description: '',
            location: {
                center: [51.394,51.2218],
                zoom: 11.65,
                pitch: 25,
                bearing: 50
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: 0
              },
              {
                layer: 'schools-glow',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'isolated',
            alignment: 'left',
            title: 'An isolated village',
            image: '',
            description: '',
            location: {
                center: [66.6611,49.21422],
                zoom: 15.62,
                pitch: 26,
                bearing: -66.3
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: .40
              },
              {
                layer: 'kz30-low',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'spur',
            alignment: 'left',
            title: 'A low connectivity spur',
            image: '',
            description: '',
            location: {
                center: [68.209,44.1433],
                zoom: 12,
                pitch: 70,
                bearing: -77.2
            },
            onChapterEnter: [
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: .40
              }
            ],
            onChapterExit: []
        },
        {
            id: 'schools-population',
            alignment: 'left',
            title: 'Population by Connectivity',
            image: '',
            description: 'Then compared catchment areas to various population data sets, to determine what part of the total population was served. Using Facebook Population Density Data, for high, we found 14.78 million; for medium, 13.72 milion (932K medium only) low 7.8 million (40.5K low only).',
            location: {
                center: [67.999,52.453],
                zoom: 6.13,
                pitch: -27.2,
                bearing: 31
            },
            onChapterEnter: [
              {
                layer: 'pop-extrusion',
                opacity: .75,
                duration: 1000
              },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'kz30-high',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .8,
                duration: 1000
              },
            ],
            onChapterExit: [
              {
                layer: 'pop-extrusion',
                opacity: 0
              },
            ]
        },
        {
            id: 'methodology',
            alignment: 'left',
            title: 'Methodology',
            image: 'images/qgis-model.png',
            description: 'Create isochrones from school points using Mapbox Isochrone API (https://github.com/mapbox/unicef-school-accessibility/blob/main/isochrones.py). Create layers for each connectivity band by unioning isochrones with connectivity_speed. Calculate pop reached by each band by joining population raster to isochrone bands and calculating zonal statistics. This is reusable!',
            location: {
                center: [75.0802,43.0227],
                zoom: 11.37,
                pitch: 75,
                bearing: 60
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .8,
                duration: 1000
              },
            ],
            onChapterExit: []
        },
        {
            id: 'issues-population',
            alignment: 'left',
            title: 'Issues: population data sets',
            image: '',
            description: 'Tried World Pop Constrained, World Pop Unconstrained, and Facebook Population, giving wide variety of results (from 9.8 to 16.5 million for high connectivity region). Want to also look at SEDAC for age demographics. And add population as a proper visual layer.',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'pop-extrusion',
                opacity: 1
              },
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: 0
              },
            ],
            onChapterExit: [
              {
                layer: 'pop-extrusion',
                opacity: 0
              },
            ]
        },
        {
            id: 'schools?',
            alignment: 'left',
            title: 'Issues: data quality',
            image: '',
            description: 'Are these schools? Or is our imagery old?',
            location: {
                center: [71.732,43.5103],
                zoom: 14.66,
                pitch: 11,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: 1,
                duration: 1000
              },
            ],
            onChapterExit: []
        },
        {
            id: 'limitations-road',
            alignment: 'left',
            title: 'Limitation: road network',
            image: '',
            description: 'Isochrones depend on road network completeness. In OSM, major roads and cities are complete. Many villages are more minimal. Could address this by either editing the road network (the imagery refresh helps!) or unioning in a buffer around school location.',
            location: {
                center: [69.424121,44.809783],
                zoom: 15.41,
                pitch: 0,
                bearing: -22.5
            },
            onChapterEnter: [
              {
                layer: 'kz30-low',
                opacity: .50
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-high',
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'kz30-low',
                opacity: 0
              }
            ]
        },
        {
                    id: 'limitations-generalizations',
                    alignment: 'left',
                    title: 'Issues: isochrone geometry',
                    image: '',
                    description: 'Generalized shapes returned by Isochone API can have invalid geometry, so using large non-generalized shape',
                    location: {
                        center: [79.8827,45.4022],
                        zoom: 10.35,
                        pitch: 70,
                        bearing: -176.8
                    },
                    onChapterEnter: [
                      {
                        layer: 'kz30-low',
                        opacity: .50
                      },
                      {
                        layer: 'kz30-med',
                        opacity: .50
                      },
                      {
                        layer: 'kz30-high',
                        opacity: .75
                      }
                    ],
                    onChapterExit: []
        },
        {
            id: 'next-steps',
            alignment: 'left',
            title: 'Next Steps',
            image: '',
            description: 'What\'s next? Feedback on the analysis and visualization. Refinement of methods. Sharing and Training. Development of Story. Other locations.',
            location: {
                center: [70.8426,42.2146],
                zoom: 12.66,
                pitch: 75,
                bearing: -12.8
            },
            callback: 'disableFreetime',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        //conclusion
        {
            id: 'explore',
            alignment: 'left',
            title: 'Explore',
            image: '',
            description: '',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00
          },
            callback: 'enableFreetime',
            onChapterEnter: [
            ],
            onChapterExit: []
        }
    ]
};
