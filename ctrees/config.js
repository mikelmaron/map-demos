var config = {
    style: 'mapbox://styles/mapbox/satellite-v8',
    projection: 'globe',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: true,
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: true,
            title: 'amazon',
            description: '',
            location: {
                center: [-46.82,-3.65],
                zoom: 1,
                pitch: 49,
                bearing: -90,
                duration: 2000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2',
            alignment: 'left',
            hidden: true,
            title: 'amazon-zoom',
            description: '',
            location: {
                center: [-46.82,-3.65],
                zoom: 5,
                pitch: 40,
                bearing: -90,
                duration: 2000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '3',
            alignment: 'left',
            hidden: true,
            title: 'galapagos',
            description: '',
            location: {
                center: [-89.774,0.505],
                zoom: 5,
                pitch: 40,
                bearing: -90,
                duration: 8000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '4',
            alignment: 'left',
            hidden: true,
            title: 'dateline',
            description: '',
            location: {
                center: [-181,0.505],
                zoom: 1,
                pitch: 0,
                bearing: 0,
                duration: 2000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '5',
            alignment: 'left',
            hidden: true,
            title: 'papau',
            description: '',
            location: {
                center: [152.2,-3.55],
                zoom: 5,
                pitch: 40,
                bearing: -39.4,
                duration: 2000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '6',
            alignment: 'left',
            hidden: true,
            title: 'burma',
            description: '',
            location: {
                center: [92.26,22.19],
                zoom: 5,
                pitch: 40,
                bearing: -39.4,
                duration: 8000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '7',
            alignment: 'left',
            hidden: true,
            title: 'cairo',
            description: '',
            location: {
                center: [30.513,29.944],
                zoom: 6,
                pitch: 50,
                bearing: -160,
                duration: 3000
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};
