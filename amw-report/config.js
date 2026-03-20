var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZWFydGhyaXNlIiwiYSI6ImNsbWExM2oxajBnaXAza21iN3hnMno0Y2UifQ.uN6YxTYSSs2XTucpB7LUoQ',
    showMarkers: true,
    markerColor: '#c9a227',
    inset: false,
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Amazon Mining Watch Panorama',
    subtitle: 'Quarterly report / October – December 2025',
    byline: 'Amazon Conservation, Earth Genome, Pulitzer Center, and partners',
    footer:
        'Photo credits as noted in each section (Fundación EcoCiencia, Planet). Source: Amazon Mining Watch Panorama Q4 2025 PDF. ' +
        '<a href="https://amazonminingwatch.org/en" target="_blank" rel="noopener">Amazon Mining Watch</a>. ' +
        'Built with <a href="https://github.com/mapbox/storytelling" target="_blank" rel="noopener">Mapbox Storytelling</a>.',
    chapters: [
        {
            id: 'intro',
            alignment: 'full',
            hidden: false,
            title: 'Dispatch of the latest on gold mining impacts across the Amazon',
            image: './assets/images/img-000.jpg',
            description:
                '<p><em>Reserva Ecológica Cofán Bermejo, Provincia de Sucumbíos, Ecuador. Photo: Fundación EcoCiencia.</em></p>' +
                '<p>Amazon Mining Watch Panorama provides critical quarterly insights into the escalating threat of illegal gold mining across the Amazon. Based on AI-powered detection of mining scars anywhere in the region from Amazon Mining Watch (AMW), a multi-partner initiative led by Amazon Conservation, Earth Genome, and the Pulitzer Center, it offers a data-driven perspective on the environmental challenges facing the world’s largest rainforest.</p>' +
                '<p><a href="https://amazonminingwatch.org/en" target="_blank" rel="noopener">Explore the Amazon Mining Watch geovisor</a></p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'regional-trends',
            alignment: 'left',
            hidden: false,
            title: 'Regional trends of gold mining–driven deforestation',
            image: './assets/images/img-004.jpg',
            description:
                '<p><em>Impact of mining activities on riparian forests in Napo province. Photo: Fundación EcoCiencia.</em></p>' +
                '<p>Quarterly Panorama reports include information on the previous three months for:</p>' +
                '<ul>' +
                '<li>Regional trends of gold-mining driven deforestation</li>' +
                '<li>New incursions into protected areas and Indigenous territories previously untouched by mining</li>' +
                '<li>Cases of resurgence of mining in protected areas and Indigenous territories</li>' +
                '<li>Protected areas and Indigenous territories with persistent and accelerating mining deforestation</li>' +
                '</ul>' +
                '<p><strong>Key findings from October to December 2025:</strong></p>' +
                '<ul>' +
                '<li>Gold mining expanded in all 9 Amazonian countries, impacting 6,000 hectares.</li>' +
                '<li>Brazil registered the largest recent (fourth quarter) mining expansion area (2,000 ha), followed closely by Peru (1,700 ha) and then Guyana (900 ha).</li>' +
                '<li>In the middle tier are Venezuela (600 ha), Suriname (500 ha), Bolivia (300 ha), Ecuador (240 ha), and French Guiana (80 ha).</li>' +
                '<li>Colombia had the least new gold mining deforestation (10 ha), but does have an emerging issue related to illegal gold mining along the Pure River (see MAAP #228). ' +
                '<a href="https://www.maapprogram.org/mining-colombia-amazon/" target="_blank" rel="noopener">MAAP: mining in the Colombia Amazon</a>.</li>' +
                '</ul>' +
                '<p>In this report: one (1) case of new incursion, five (5) cases of resurgence, and four (4) cases of areas with persistent and accelerating mining-related deforestation.</p>' +
                '<p>As gold prices continue to rise, timely detection of new expansion of mining areas through a consistent, wall-to-wall methodology can support a swift and coordinated enforcement response from authorities across borders.</p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'section-new-incursions',
            alignment: 'right',
            hidden: false,
            title: 'New incursions on protected areas or Indigenous territories',
            image: '',
            description:
                '<p>This section lists areas with no mining detected since 2018 but where mining scars have been detected in the last quarter, highlighting totally new—and highly likely to be illegal—incursions in areas designated for conservation or Indigenous territories.</p>' +
                '<p>Detection polygons for each of these cases are visible on the Amazon Mining Watch geovisor, where the full time series of mining expansion since 2018 can be consulted. Where available, high-resolution Planet imagery is also provided, confirming the nature of the activity causing deforestation.</p>' +
                '<p>Under this category, only one new mining incursion was detected in the last quarter, across formally recognized Indigenous territories and protected areas.</p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'territorio-charip',
            alignment: 'left',
            hidden: false,
            title: 'Territorio Charip (Ecuador)',
            image: './assets/images/img-010.jpg',
            description:
                '<p>The Territorio Charip was officially recognized by the Government of Ecuador in 2025. It is designated as an Indigenous territory titled under the stewardship of the Shuar people. Located in Sucumbíos Province, the territory safeguards vital lowland tropical rainforest within the Tropical Andes–Amazon transition zone, as well as critical headwaters that feed into the Aguarico and Putumayo River basins.</p>' +
                '<p><strong>Mining update:</strong> The territory appears to have suffered from a small mining incursion in the last quarter, which would mark the first time that mining has occurred in the area, even prior to its designation.</p>' +
                '<p><em>Planet panel: high-resolution PlanetScope images (3 m) show before (left) and after (right) of the new mining incursion.</em></p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&yearStart=202504&yearEnd=202504&zoom=12.60&lng=-77.13&lat=0.26&areaId=EC30005_0&areaName=territorio-charip" target="_blank" rel="noopener">Open Territorio Charip in Amazon Mining Watch</a></p>',
            location: { center: [-77.13, 0.26], zoom: 12.6, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'section-resurgence',
            alignment: 'right',
            hidden: false,
            title: 'Resurgence of mining deforestation in protected areas and Indigenous territories',
            image: '',
            description:
                '<p>This section lists protected areas and Indigenous territories where new mining scars have been detected in the last quarter, and where no new mining scars had been detected in the past three quarters—sites where activity had previously abated, possibly following enforcement operations, but has recently resurged.</p>' +
                '<p>Five (5) areas were detected in the last quarter: one in Brazil, two in Ecuador, and two in Guyana.</p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'igarapes-do-juruena',
            alignment: 'left',
            hidden: false,
            title: 'Parque Estadual Igarapés do Juruena (Brazil)',
            image: './assets/images/img-012.jpg',
            description:
                '<p>The Igarapés do Juruena State Park was established in 2022. The land is designated as an Integral Protection unit dedicated to ecosystem preservation and scientific research with permitted public visitation and environmental education. Located in the state of Mato Grosso, the park lies within the Juruena River basin and protects a critical transition zone between the Amazon rainforest and the Cerrado (savanna) biomes.</p>' +
                '<p><strong>Mining update:</strong> A small mining footprint started appearing in 2018, reaching 3 hectares in 2021. No further mining expansion had been recorded until the last quarter, when a further 2.83 hectares of mining scars were detected.</p>' +
                '<p><img src="./assets/images/img-013.jpg" alt="Planet before and after, Igarapés do Juruena" style="max-width:100%;height:auto;margin-top:0.5rem;" /></p>' +
                '<p><em>PlanetScope before/after panels (3 m).</em></p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=protected-area&yearStart=201800&yearEnd=202504&zoom=9.85&lng=-58.96&lat=-8.90&areaId=BR1346_0&areaName=parque-estadual-igarapes-do-juruena" target="_blank" rel="noopener">Open Parque Estadual Igarapés do Juruena in Amazon Mining Watch</a></p>',
            location: { center: [-58.96, -8.9], zoom: 9.85, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tunants',
            alignment: 'right',
            hidden: false,
            title: 'Tunants Indigenous Territory (Ecuador)',
            image: './assets/images/img-014.jpg',
            description:
                '<p>The Tunants Indigenous territory was formally established with the issuance of its legal land title in 2025. Designated as a Protected Forest (<em>Bosque y Vegetación Protectora</em>), it lies within the Kutukú Shaimi Protected Forest. The territory is stewarded by the Shuar people, who use traditional knowledge and contemporary conservation practices to manage their territory.</p>' +
                '<p><strong>Mining update:</strong> The territory registered a new mining scar in the last quarter, over an area of 1.3 hectares. Less than one hectare had previously been cleared for mining in the territory, in 2024.</p>' +
                '<p><img src="./assets/images/img-016.jpg" alt="Planet before and after, Tunants" style="max-width:100%;height:auto;margin-top:0.5rem;" /></p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&yearStart=202504&yearEnd=202504&zoom=11.48&lng=-78.60&lat=-4.18&areaId=EC30704_0&areaName=tunants" target="_blank" rel="noopener">Open Tunants in Amazon Mining Watch</a></p>',
            location: { center: [-78.6, -4.18], zoom: 11.48, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kamarang-keng',
            alignment: 'left',
            hidden: false,
            title: 'Kamarang Keng Indigenous Territory (Guyana)',
            image: './assets/images/img-016.jpg',
            description:
                '<p>The Kamarang Keng Indigenous territory was formally established in 1991 and is primarily inhabited by the Akawaio people, located in the Upper Mazaruni region. Classified as Titled Amerindian Village Land, the territory is legally recognized under Guyanese law.</p>' +
                '<p><strong>Mining update:</strong> The area of mining scars in Kamarang Keng territory grew between 2018 and 2024, but had shown signs of abatement since, potentially indicating abandonment of the area after an enforcement operation. Yet, despite no mining expansion in the first three quarters of 2025, almost 10 hectares of new mining scars were detected in Oct–Dec.</p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&yearStart=202504&yearEnd=202504&zoom=9.50&lng=-60.62&lat=5.93&areaId=GY13127_0&areaName=kamarang-keng" target="_blank" rel="noopener">Open Kamarang Keng in Amazon Mining Watch</a></p>',
            location: { center: [-60.62, 5.93], zoom: 9.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'arajuno-chichico-rumi',
            alignment: 'right',
            hidden: false,
            title: 'Arajuno Chichico Rumi Indigenous Territory (Ecuador)',
            image: './assets/images/img-018.jpg',
            description:
                '<p>The Arajuno Chichico Rumi Indigenous territory received formal titulation as an Indigenous territory in 2025. The area is an ancestral Kichwa territory associated with the Puka Rumi and Chichico Rumi communities in the Napo and Pastaza provinces. The territory’s legal status is defined by the collective land rights of the Kichwa people, which are at various stages of formal recognition.</p>' +
                '<p><strong>Mining update:</strong> Prior to its formal recognition, the Arajuno Chichico Rumi territory had registered only minimal signs of mining activity (3.36 ha), yet the area of mining scars more than tripled in the last quarter of 2025.</p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&yearStart=202504&yearEnd=202504&zoom=12.34&lng=-77.62&lat=-1.09&areaId=EC30518_0&areaName=arajuno-chichico-rumi" target="_blank" rel="noopener">Open Arajuno Chichico Rumi in Amazon Mining Watch</a></p>',
            location: { center: [-77.62, -1.09], zoom: 12.34, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'arau',
            alignment: 'left',
            hidden: false,
            title: 'Arau Indigenous Territory (Guyana)',
            image: './assets/images/img-020.jpg',
            description:
                '<p>The Arau Indigenous territory was formally recognized as Titled Amerindian Village Land under national law in 1991. The territory is primarily inhabited by the Akawaio people and is located in the Cuyuni-Mazaruni region near the border with Venezuela.</p>' +
                '<p><strong>Mining update:</strong> Mining activity in the Arau territory had been relatively stable since 2021, with no expansion of the alluvial pools detected along the border with Venezuela. The last quarter of 2025 saw the opening of over 4 hectares of mining scars, likely indicating a new incursion from Venezuelan miners into the territory.</p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&yearStart=202504&yearEnd=202504&zoom=11.20&lng=-61.10&lat=6.40&areaId=GY13036_0&areaName=arau" target="_blank" rel="noopener">Open Arau in Amazon Mining Watch</a></p>',
            location: { center: [-61.1, 6.4], zoom: 11.2, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'section-persistent',
            alignment: 'right',
            hidden: false,
            title: 'Persistent and accelerating mining deforestation',
            image: '',
            description:
                '<p>This section lists protected areas and Indigenous territories with persistent mining-driven deforestation that saw notable expansion in the past quarter. Many areas across the Amazon continue to experience gold mining–related deforestation; the following four (4)—two in Peru, one in Venezuela, and one in Brazil—were selected for the persistent and accelerating character of this driver.</p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'yapacana',
            alignment: 'left',
            hidden: false,
            title: 'Yapacana Protected Area (Venezuela)',
            image: './assets/images/img-022.jpg',
            description:
                '<p>Yapacana National Park was established in 1978 under Presidential Decree No. 2,980. Situated in Venezuela’s Amazonas department, the park is centered on Cerro Yapacana, a sandstone tepui. As an IUCN Category II protected area, it enjoys protected status while remaining open to the public for spiritual, scientific, educational, and recreational activities.</p>' +
                '<p><strong>Mining update:</strong> Mining expansion in Yapacana NP seemed to have stabilized since 2024, following enforcement operations from the Venezuelan authorities. Although new mining on top of the tepui was reported in MAAP #234, mining expansion through most of 2025 appeared stable. However, this trend ended in the last quarter of 2025, which registered almost 100 hectares of new mining expansion.</p>' +
                '<p><a href="https://www.maapprogram.org/gold-yapacana-venezuela/" target="_blank" rel="noopener">MAAP: Gold mining in Yapacana, Venezuela</a></p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=protected-area&yearStart=202504&yearEnd=202504&zoom=8.83&lng=-66.79&lat=3.84&areaId=VE55042_0&areaName=yapacana" target="_blank" rel="noopener">Open Yapacana in Amazon Mining Watch</a></p>',
            location: { center: [-66.79, 3.84], zoom: 8.83, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aripuana',
            alignment: 'right',
            hidden: false,
            title: 'Aripuanã Indigenous Territory (Brazil)',
            image: './assets/images/img-024.jpg',
            description:
                '<p>The Aripuanã Indigenous territory gained official recognition in 1991 under Federal Decree No. 375. Located in the state of Mato Grosso, the territory is primarily home to the Cinta Larga community. The territory continues to experience increased deforestation pressure due to illegal logging and mining, owing to extensive diamond and gold reserves.</p>' +
                '<p><strong>Mining update:</strong> The territory registered an increase of almost 60 hectares of new mining in the last quarter of 2025, confirming the persistent expansion and intensification of the activity throughout the past year.</p>' +
                '<p><img src="./assets/images/img-026.jpg" alt="Planet before and after, Aripuanã" style="max-width:100%;height:auto;margin-top:0.5rem;" /></p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&yearStart=202504&yearEnd=202504&zoom=8.03&lng=-59.96&lat=-10.57&areaId=BR4201_0&areaName=aripuan" target="_blank" rel="noopener">Open Aripuanã in Amazon Mining Watch</a></p>',
            location: { center: [-59.96, -10.57], zoom: 8.03, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tambopata',
            alignment: 'left',
            hidden: false,
            title: 'Tambopata Protected Area (Peru)',
            image: './assets/images/img-028.jpg',
            description:
                '<p>The Tambopata National Reserve was officially established in 2000 by Supreme Decree No. 048-2000-AG. The territory is classified as an IUCN Category VI protected area, allowing for the sustainable use of natural resources by local communities. The reserve safeguards critical lowland Amazonian rainforest and is renowned for its exceptional biodiversity, including some of the highest recorded numbers of bird and butterfly species in the world.</p>' +
                '<p><strong>Mining update:</strong> Located on the edge of the mining corridor that concentrates most gold mining activity in the Madre de Dios region, the Tambopata National Reserve continues to see expansion of mining operations within its limits, with over 200 hectares of new mining added in the last quarter.</p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=protected-area&yearStart=202504&yearEnd=202504&zoom=8.67&lng=-69.51&lat=-12.81&areaId=PE46_0&areaName=tambopata" target="_blank" rel="noopener">Open Tambopata in Amazon Mining Watch</a></p>',
            location: { center: [-69.51, -12.81], zoom: 8.67, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tres-islas',
            alignment: 'right',
            hidden: false,
            title: 'Tres Islas Indigenous Territory (Peru)',
            image: './assets/images/img-035.jpg',
            description:
                '<p>The Tres Islas Indigenous territory was formally recognized in 1992 through Resolution R.D. 027-92-RI-DSRA-MD, and received its official land title in 1994. The territory is designated as a Native Community (<em>Comunidad Nativa</em>), granting collective ownership and territorial rights to the Ese Eja and Shipibo-Konibo peoples who have historically inhabited the land.</p>' +
                '<p><strong>Mining update:</strong> The territory registered an increase of 50 hectares of new mining in the last quarter of 2025, confirming the persistent expansion of the activity.</p>' +
                '<p><a href="https://amazonminingwatch.org/en?areaType=indigenous-territory&zoom=10.48&lng=-69.45&lat=-12.55&areaId=PE795_0&activeYear=202504&cumulative=true" target="_blank" rel="noopener">Open Tres Islas (PE795) in Amazon Mining Watch</a></p>',
            location: { center: [-69.45, -12.55], zoom: 10.48, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description:
                '<p>The findings of this report reveal the continuous expansion of mining-related deforestation, encroaching upon protected areas and Indigenous territories. The persistent and pervasive nature of this threat underscores the escalating crisis of illegal gold mining in the Amazon. Consistent, data-driven monitoring provided by Amazon Mining Watch Panorama is crucial for understanding the scope of the problem and to promote accountability. Amazon Mining Watch and its partners will continue to provide quarterly and yearly updates about trends in gold mining expansion in the Amazon, information about the presumed illegality of these activities, and their estimated socioenvironmental impact.</p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'methodology',
            alignment: 'right',
            hidden: false,
            title: 'Methodology of monitoring systems',
            image: '',
            description:
                '<p>For Amazon Mining Watch, the mine detector is an artificial neural network trained to discriminate mines from other terrain using hand-labeled examples of mines and other key features as they appear in Sentinel-2 satellite imagery. The network operates on square patches extracted from the Sentinel-2 L1C product. Each pixel captures reflected light in twelve bands of visible and infrared light. Sentinel data are averaged (median composite) across many months to reduce clouds, cloud shadow, and other transitory effects. At run time, the network assesses each patch for signs of recent mining activity; the region of interest is then shifted by half a patch width for the next assessment, proceeding across the entire region of interest.</p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'acknowledgments',
            alignment: 'center',
            hidden: false,
            title: 'Acknowledgments',
            image: './assets/images/img-037.jpg',
            description:
                '<p>This report was made possible by the generous support of the <strong>Gordon and Betty Moore Foundation</strong>.</p>' +
                '<p>We are grateful to the partners and organizations who provided support for this publication. Amazon Mining Watch is made possible thanks to the generous support of funders and collaborators (see partner marks in the PDF).</p>' +
                '<p><a href="https://amazonminingwatch.org/" target="_blank" rel="noopener">amazonminingwatch.org</a></p>',
            location: { center: [-60, -5], zoom: 3.5, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
