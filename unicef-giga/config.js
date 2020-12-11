var config = {
    style: 'mapbox://styles/mikelmaron/ckiis912v087219qqo3hf2nuz',
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

      */
        {
            id: 'kazakhstan',
            alignment: 'left',
            title: 'Kazakhstan',
            description: 'Goal is map layers showing where people have access to schools at each connectivity level, with reference statistics (population)',
            location: {
                center: [65.12,48.39],
                zoom: 4,
                pitch: 40.00,
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
            description: 'Here are all the schools in Kazakhstan, XXXX schools in total',
            location: {
                center: [65.12,48.39],
                zoom: 4,
                pitch: 40.00,
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
            description: 'Of these, XXXX Schools have high connection (in yellow, rated 7-10), YYYY have medium connection (in orange, rated 4-6), ZZZ low connection (in purple, rated 0-3).',
            location: {
                center: [65.12,48.39],
                zoom: 4,
                pitch: 40.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: .75,
                duration: 1000
              }
            ],
            onChapterExit: []
        },
        {
            id: 'schools-accessibility',
            alignment: 'left',
            title: 'Schools Accessibility',
            image: '',
            description: 'For each school, calculated the area that can reach the school in 30 minutes drive, and merge the low, medium, and high connectivity catchment areas.',
            location: {
                center: [65.12,48.39],
                zoom: 4,
                pitch: 40.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: .75,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .75,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .75,
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
            id: 'schools-population',
            alignment: 'left',
            title: 'Population by Connectivity',
            image: '',
            description: 'Then compared catchment areas to various population data sets, to determine what part of the total population was served. For high, we found range of XXX to XXX; for medium, XXX to XXX; low XXX to XXX. More on choices for population data sets later.',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
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
              }
            ],
            onChapterExit: []
        },
        {
            id: 'methodology',
            alignment: 'left',
            title: 'Methodology',
            image: '',
            description: 'Summarize the methodology.  isochrones api, merge, clip. This is reusable! Show image of QGIS process and link to repo',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'pop-extrusion',
                opacity: 0,
                duration: 1000
              },
            ],
            onChapterExit: []
        },
        {
            id: 'limitations-generalizations',
            alignment: 'left',
            title: 'Limitation: isochrone generalization',
            image: '',
            description: 'Issues with generalization of shapes',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'limitations-road',
            alignment: 'left',
            title: 'Limitation: road network',
            image: '',
            description: 'Isochrones depend on road network completeness. Major roads and cities done. Many villages minimal. Could address by adding network (imagery refresh helps!) or adding a buffer around school location.',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'limitations-population',
            alignment: 'left',
            title: 'Limitation: population data sets',
            image: '',
            description: 'Differences among the population data sets, and additional ones to try. We\'d also like to add population visible layer in next iteration.',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'schools?',
            alignment: 'left',
            title: 'Limitation: data quality',
            image: '',
            description: 'Are these schools? Or our imagery old?',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
            },
            callback: 'disableFreetime',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'explore',
            alignment: 'left',
            title: 'Explore',
            image: '',
            description: 'Isn\'t this map great? Check out the 3d and imagery',
            location: {
                center: [71.732,43.5103],
                zoom: 11.66,
                pitch: 11,
                bearing: 0
            },
            callback: 'enableFreetime',
            onChapterEnter: [
            ],
            onChapterExit: []
        }
    ]
};
