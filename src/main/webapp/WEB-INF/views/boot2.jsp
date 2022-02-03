<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
  	<title>Nursery Project</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/style.css">
  </head>
  <body onload="init()">
		
		<div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar" class="active">
				<h1><a href="index.html" class="logo">N.</a></h1>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="#"><span class="fa fa-home"></span> Home</a>
          </li>
          <li>
              <a href="#"><span class="fa fa-user"></span> About</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-sticky-note"></span> Blog</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-cogs"></span> Services</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-paper-plane"></span> Contacts</a>
          </li>
        </ul>

        <div class="footer">
        	<p>
			Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
			</p>
        </div>
    	</nav>

        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">

        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom: 0px;">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="map" class="map" style="width: 1360px; height: 610px;"></div>
        
      </div>
		</div>

    <script src="<%=request.getContextPath() %>/resources/js/jquery.min.js"></script>
    <script src="<%=request.getContextPath() %>/resources/js/popper.js"></script>
    <script src="<%=request.getContextPath() %>/resources/js/bootstrap.min.js"></script>
    <script src="<%=request.getContextPath() %>/resources/js/main.js"></script>
   <!-- OpenLayers 3 & Proj4js -->
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/resources/js/javascript/ol.css" />
      <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/javascript/ol.js"></script>
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/resources/js/javascript/ol3-layerswitcher.css" />
      <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/javascript/ol3-layerswitcher.js"></script>
      <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/javascript/proj4.js"></script>
      
      <script type="text/javascript">
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
				map1.getView().setZoom(7);
				
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
  </body>
 
</html>