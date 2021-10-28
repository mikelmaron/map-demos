var config = {
    style: 'mapbox://styles/mikelmaron/ckuq957g81f8315mlu59mwso1',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The pandemic, housing, and services',
    subtitle: 'Insights Fused from HUD Data Fabric',
    byline: 'by TOP team of AWS, Precisely, ApartmentList, Abt, Mapbox',
    footer: 'Sources: ApartmentList, Precisely, Mapbox',
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
            title: 'Apartment vacancy rates from ApartmentList',
            image: '',
            description: 'The apartment locations are scaled according to the number of vacancies at that location.',
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
            id: 'mobility',
            alignment: 'left',
            hidden: false,
            title: 'Mobility and the pandemic',
            image: '',
            description: 'Mapbox Movement shows significant decrease in movement in urban cores and arterial roads, corresponding to some of the higher vacancy rates. (grey indicates decreased activity, black increased activity)',
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
                   layer: 'california-3bvyyw',
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
                   layer: 'california-3bvyyw',
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
            description: 'Fused by Precisely. This view shows the proximity of those vacancies to “services” (we chose to present pharmacies) in the same area. The darker the point, the more nearby pharmacies.',
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
            description: 'Next steps will be to visualize the effect that the COVID pandemic has had on the quality of public schools within neighborhood areas and what impact that had on the cost of housing.',
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
        /*,
        {
            id: 'schools',
            alignment: 'left',
            hidden: false,
            title: 'COVID pandemic has had on the quality of public schools and housing prices',
            image: '',
            description: 'Precisely’s ‘Great Schools’ offering provides aggregated school performance data from counties and state departments of education; that data is then used to tag every property within every school attendance zone with this ‘Great Schools’ rating.',
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
        }*/
    ]
};
