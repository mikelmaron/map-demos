var config = {
    style: 'mapbox://styles/earthrise/clm9zm6gb031901qx5yj8gjww',
    accessToken: 'pk.eyJ1IjoiZWFydGhyaXNlIiwiYSI6ImNsbWExM2oxajBnaXAza21iN3hnMno0Y2UifQ.uN6YxTYSSs2XTucpB7LUoQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The future of Maize in a warming Africa',
    subtitle: 'A demonstration of storytelling',
    byline: 'By Mikel Maron',
    footer: 'Source: MapSPAM, Probable Futures <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Maize is grown across Africa',
            location: {
                center: [0, 0],
                zoom: 1.5,
                pitch: 30,
                bearing: 0
            },
            rotateAnimation: true,
            onChapterEnter: [
                 {
                     layer: 'corn',
                     opacity: 1,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                {
                     layer: 'corn',
                     opacity: 0
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'And the days are getting hotter',
            location: {
                center: [20, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
                {
                    layer: 'region-eu-af-7',
                    opacity: 1
                },
                {
                    layer: 'region-eu-af-8',
                    opacity: 1
                },
                {
                    layer: 'region-eu-af-5',
                    opacity: 1
                },
                {
                    layer: 'region-eu-af-6',
                    opacity: 1
                },
                {
                    layer: 'region-eu-af-9',
                    opacity: 1
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            title: 'Including in Nigeria',
            location: {
                center: [9.8, 9.8],
                zoom: 5,
                pitch: 45,
                bearing: 0.00,
                duration: 4000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'region-eu-af-7',
                    opacity: 0
                },
                {
                    layer: 'region-eu-af-8',
                    opacity: 0
                },
                {
                    layer: 'region-eu-af-5',
                    opacity: 0
                },
                {
                    layer: 'region-eu-af-6',
                    opacity: 0
                },
                {
                    layer: 'region-eu-af-9',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'And Maize Yield...',
            location: {
                center: [9.8, 9.8],
                zoom: 5,
                pitch: 45,
                bearing: 0.00,
                duration: 4000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'corn',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'corn',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'will decrease',
            location: {
                center: [9.8, 9.8],
                zoom: 5,
                pitch: 45,
                bearing: 0.00,
                duration: 4000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'corn result',
                    opacity: 1
                },
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'fully',
            hidden: false,
            title: 'across all of Africa',
            location: {
                center: [20, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0,
                duration: 4000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'corn-result',
                    opacity: 1
                },
            ],
            onChapterExit: []
        }
    ]
};