<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
<script>

	var childFlag = true;
    
    // define epsg:5181 projection
    proj4.defs("EPSG:5181","+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

    ol.proj.setProj4 = proj4;
    
    var resolutions = [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25];
    var extent      = [-30000, -60000, 494288, 988576];
    
    var projection = new ol.proj.Projection({
        code: 'EPSG:5181',
        extent: extent,
        units: 'm'
    });
    
    // define tile layer
    var tileLayer = new ol.layer.Tile({
        title : 'Daum Street Map',
        visible : true,
        type : 'base',
        source : new ol.source.XYZ({
            projection: projection,
            tileSize: 256,
            minZoom: 0,
            maxZoom: resolutions.length - 1,
            tileGrid: new ol.tilegrid.TileGrid({
                origin: [extent[0], extent[1]],
                resolutions: resolutions
            }),
            tileUrlFunction: function (tileCoord, pixelRatio, projection) {
                if (tileCoord == null) return undefined;

                var s = Math.floor(Math.random() * 4);  // 0 ~ 3
                var z = resolutions.length - tileCoord[0];
                var x = tileCoord[1];
                var y = tileCoord[2];
				return 'http://map' + s + '.daumcdn.net/map_2d/1912uow/L' + z + '/' + y + '/' + x + '.png';
				<!-- return 'http://map' + s + '.daumcdn.net/map_skyview/L' + z + '/' + y + '/' + x + '.jpg'; -->
            },
            attributions: [
                new ol.Attribution({ 
                    html: ['<a href="http://map.daum.net"><img src="http://i1.daumcdn.net/localimg/localimages/07/mapjsapi/m_bi.png"></a>']
                })
            ]
        })
    });
    
	function init() {
		// set map
		map1 = new ol.Map({
			controls : [
				new ol.control.Attribution({
					collapsible: true
				}), 
				new ol.control.Zoom(), 
				new ol.control.FullScreen(),
				new ol.control.MousePosition({
					projection: 'EPSG:5181',
					coordinateFormat: ol.coordinate.createStringXY(2)
				}),
				new ol.control.ZoomToExtent({
					extent: extent
				}),
				new ol.control.ScaleLine(),
				new ol.control.LayerSwitcher()
			],
			layers : [
				new ol.layer.Group({
					title : 'Base Maps',
					layers : [
						tileLayer
					]
				  }),
				new ol.layer.Group({
					title: 'Tiled WMS',
					layers: [
					]
				})
			],
			target : 'map',
			renderer: 'canvas',
			interactions : ol.interaction.defaults({
				shiftDragZoom : true
			}),
			view : new ol.View({
				projection: projection,
				extent: extent,
				resolutions: resolutions,
				maxResolution: resolutions[0],
				zoomFactor: 1,
				center : [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2],
				zoom : 0
			})
		});
		
		
		map1.getView().setCenter([195372.80078125, 444332.7998046875]);
		map1.getView().setZoom(8);
		
		var untiled = new ol.layer.Image({
			source: new ol.source.ImageWMS({
			projection: projection,
			  ratio: 1,
			  url: 'http://localhost:9090/geoserver/seoul/wms',
			  params: {
			  'FORMAT': 'image/png',
					'VERSION': '1.1.1',  
					"LAYERS": 'seoul:admin_emd',
					"exceptions": 'application/vnd.ogc.se_inimage',
				}
			})
		});
		  
		map1.addLayer(untiled);
		
		
					
		// add gwc layer to map
		<!-- var layer = 'foss:korea_sgg'; -->
		<!-- map.addLayer(createGWCLayer(layer, layer, '', false, false)); -->
	};
	
	function nursery() {
		
		var nursery = new ol.layer.Image({
			source: new ol.source.ImageWMS({
			projection: projection,
			  ratio: 1,
			  url: 'http://localhost:9090/geoserver/seoul/wms',
			  params: {
			  'FORMAT': 'image/png',
					'VERSION': '1.1.1',  
					"LAYERS": 'seoul:nursery',
					"exceptions": 'application/vnd.ogc.se_inimage',
				}
			})
		});
		  
		map1.addLayer(nursery);
		
	}
	
		var child= new ol.layer.Image({
			source: new ol.source.ImageWMS({
			projection: projection,
			  ratio: 1,
			  url: 'http://localhost:9090/geoserver/seoul/wms',
			  params: {
			  		'FORMAT': 'image/png',
					'VERSION': '1.1.0',  
					"LAYERS": 'seoul:nlsp_021001013',
					"exceptions": 'application/vnd.ogc.se_inimage',
				}
			})
		});
	
	$('#childLi').on('click',function(){
		
		if(childFlag) {
			$("#child").css({ "color" :"#BBDEFB" });
			$("#childA").css({ "background-color" :"#283593" });
			  
			map1.addLayer(child);
			childFlag = false;
			
		}else {
			map1.removeLayer(child);
			
			$("#child").css({ "color" :"#FFFFFF" });
			$("#childA").css({ "background-color" :"#3E64FF" });
			
			childFlag = true;
		}
	});
		
	
	/**
	* Helper method for gwc layer.
	*/
	<!-- var createGWCLayer = function(layer, title, styles, isBaseLayer, isVisible) { -->
		<!-- var gwcLayer = new ol.layer.Tile({ -->
			<!-- title : title, -->
			<!-- type: isBaseLayer ? 'base' : '', -->
			<!-- visible : isVisible, -->
			<!-- source: new ol.source.TileWMS({ -->
				<!-- url: 'http://localhost:8080/geoserver/gwc/service/wms', -->
				<!-- serverType: 'geoserver', -->
				<!-- params: { -->
					<!-- 'TILED': true, -->
					<!-- 'VERSION': '1.1.0',  // must be 1.1.0, not 1.3.0 -->
					<!-- 'STYLES': styles, -->
					<!-- 'LAYERS': layer, -->
					<!-- 'FORMAT': 'image/png', -->
					<!-- 'TRANSPARENT': 'true' -->
				<!-- } -->
			<!-- }) -->
		<!-- }); -->
		<!-- return gwcLayer; -->
	<!-- }; -->	



</script>