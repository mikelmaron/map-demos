function easing(t) {
    return t * (2 - t);
}
var config = {
    style: 'mapbox://styles/earthrise/cl9rssq8x001914quorbmzyqk',
    projection: 'globe',
    accessToken: 'pk.eyJ1IjoiZWFydGhyaXNlIiwiYSI6ImNqeDExNmtrZzAwM2E0OW16eHZ1dzg1eWEifQ.8LTFXyY-n7OsZOoWN9ONPQ',
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
                zoom:2.5,
                pitch: 20,
                bearing: 0,
                duration: 2000,
                easing: easing
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
                center: [-49.756,-3],
                zoom: 7.5,
                pitch: 40,
                bearing: 0,
                duration: 2000,
                easing: easing
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
            title: 'pacific',
            description: '',
            location: {
                center: [-79.572,-3],
                zoom: 7.5,
                pitch: 40,
                bearing: 0,
                duration: 50000,
                easing: easing
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
                zoom: 4,
                pitch: 40,
                bearing: -90,
                duration: 5000,
                easing: easing
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
                center: [147.869,-9.093],
                zoom: 6.5,
                pitch: 40,
                bearing: -39.4,
                duration: 5000,
                easing: easing
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
                zoom: 6.5,
                pitch: 40,
                bearing: -39.4,
                duration: 50000,
                easing: easing
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
                duration: 6000,
                easing: easing
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
            id: '8',
            alignment: 'left',
            hidden: true,
            title: 'sahel',
            description: '',
            location: {
                center: [12.947,10.642],
                zoom: 6,
                pitch: 30,
                bearing: -141,
                duration: 8000,
                easing: easing
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
            id: '9',
            alignment: 'left',
            hidden: true,
            title: 'gabon',
            description: '',
            location: {
                center: [9.288,0.347],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                duration: 5000,
                easing: easing
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
            id: '10',
            alignment: 'left',
            hidden: true,
            title: 'equator',
            description: '',
            location: {
                center: [10.96,0],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                duration: 8000,
                easing: easing
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
            id: '11',
            alignment: 'left',
            hidden: true,
            title: 'congo-river',
            description: '',
            location: {
                center: [17.84,0],
                zoom: 9,
                pitch: 0,
                bearing: 0,
                duration: 30000,
                easing: easing
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
            id: '12',
            alignment: 'left',
            hidden: true,
            title: 'congo-deforestation',
            description: '',
            location: {
                center: [24.2,0],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                duration: 30000,
                easing: easing
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
            id: '13',
            alignment: 'left',
            hidden: true,
            title: 'congo-lake',
            description: '',
            location: {
                center: [29.42,0],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                duration: 30000,
                easing: easing
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
            id: '14',
            alignment: 'left',
            hidden: true,
            title: 'east-drc-turn',
            description: '14',
            location: {
                center: [29.42,0],
                zoom: 10,
                pitch: 35,
                bearing: -135,
                duration: 2000,
                easing: easing
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
            id: '15',
            alignment: 'left',
            hidden: true,
            title: 'savannah-edge',
            description: '',
            location: {
                center: [26.22, -4.022],
                zoom: 10,
                pitch: 35,
                bearing: -135,
                duration: 30000,
                easing: easing
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
            id: '16',
            alignment: 'left',
            hidden: true,
            title: 'savannah-turn',
            description: '',
            location: {
                center: [26.22, -4.022],
                zoom: 9,
                pitch: 20,
                bearing: 160,
                duration: 2000,
                easing: easing
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
            id: '17',
            alignment: 'left',
            hidden: true,
            title: 'south-africa',
            description: '',
            location: {
                center: [31.365,-24.599],
                zoom: 9,
                pitch: 20,
                bearing: 160,
                duration: 30000,
                easing: easing
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
            id: '18',
            alignment: 'left',
            hidden: true,
            title: 'africa',
            description: '',
            location: {
                center: [21.8,-8.19],
                zoom: 3,
                pitch: 20,
                bearing: 0,
                duration: 4000,
                easing: easing
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
