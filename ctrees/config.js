var config = {
    style: 'mapbox://styles/mapbox/satellite-v8',
    projection: 'globe',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: '1',
            description: '',
            location: {
                center: [78.3,-5.142],
                zoom: 0.64,
                pitch: 59,
                bearing: -31.2
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
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: '2',
            description: '',
            location: {
                center: [35.88,-19.3],
                zoom: 5,
                pitch: 52,
                bearing: -36.8,
                speed: 0.2
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
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: '3',
            description: '',
            location: {
                center: [16.73,3.22],
                zoom: 6,
                pitch: 52,
                bearing: -36.8,
                speed: 0.05
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
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: '4',
            description: '',
            location: {
                center: [-46.82,-3.65],
                zoom: 5.5,
                pitch: 49,
                bearing: -116.8,
                speed: 0.1
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