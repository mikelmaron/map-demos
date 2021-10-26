var config = {
    style: 'mapbox://styles/mikelmaron/ckuq957g81f8315mlu59mwso1',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The pandemic, housing, and services',
    subtitle: 'Insights from fused data',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'start',
            alignment: 'right',
            hidden: false,
            title: 'The Bay Area',
            image: '',
            description: '',
            location: {
                center: [-122.16608, 37.66928],
                zoom: 8.5,
                pitch: 25,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'vacancies',
            alignment: 'left',
            hidden: false,
            title: 'Vacancies',
            image: '',
            description: 'Vacancy rates from ApartmentList',
            location: {
                center: [-122.42672, 37.75912],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'grey circles',
                    opacity: 1,
                    duration: 5000
              },
              {
                   layer: 'data-driven-circles',
                    opacity: 0,
                    duration: 1000
              }
            ],
            onChapterExit: [
              {
                   layer: 'grey circles',
                    opacity: 0,
                    duration: 1000
              }
            ]
        },
        {
            id: 'pharmacies',
            alignment: 'left',
            hidden: false,
            title: 'Proximity to pharmacies',
            image: '',
            description: 'Fused by Precisely',
            location: {
                center: [-122.42672, 37.75912],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
              }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'neighborhood',
            alignment: 'left',
            hidden: false,
            title: 'Close up of a neighborhood',
            image: '',
            description: 'Interesting stuff hapenning here',
            location: {
                center: [-122.41186, 37.78315],
                zoom: 13.9,
                pitch: 31,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};
