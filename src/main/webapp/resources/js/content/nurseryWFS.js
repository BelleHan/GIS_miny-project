	$('#nurWfs').on('click',function(){

		var vectorSource = new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: function (extent) {
                var strUrl = 'http://localhost:9090/geoserver/wfs?service=WFS&' +
                    'version=1.1.0&request=GetFeature&typename=nursery:nursery_geom&' +
                    'outputFormat=application/json&srsname=EPSG:5174&' +
                    'bbox=' + extent.join(',') + ',EPSG:5174';
                

                return strUrl;
            },
            strategy: ol.loadingstrategy.bbox
        });

        var vector = new ol.layer.Vector({
            source: vectorSource,
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 255, 0, 1.0)',
                    width: 4
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255,0,0,0.4)'
                })
            })
        });	
		
		map1.addLayer(vector);
		 	
	});