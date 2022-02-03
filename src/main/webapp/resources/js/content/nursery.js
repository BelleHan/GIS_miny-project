	var childFlag = true;
	var rateFlag = true;
	var childRateFlag = true;
    
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
//				new ol.control.Attribution({
//					collapsible: true
//				}), 
				new ol.control.Zoom(), 
//				new ol.control.FullScreen(),
				new ol.control.MousePosition({
					projection: 'EPSG:5181',
					coordinateFormat: ol.coordinate.createStringXY(2)
				}),
//				new ol.control.ZoomToExtent({
//					extent: extent
//				}),
//				new ol.control.ScaleLine(),
//				new ol.control.LayerSwitcher()
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
		

		var test1 = false;
		
		map1.on('click', function(event) {
		    map1.forEachFeatureAtPixel(event.pixel, function(feature,layer) {
		    	const body = document.querySelector('body');
			    const modal = document.querySelector('.modal');
//			    debugger; console.log(feature);
			    
		    	if(feature.get('a') == 'nursery') {
		    			console.log(modal);
				        modal.classList.toggle('show');
				        $("table[id='tableTag']").html("<tr><th></th><th></th></tr><tr><td>이름</td><td>" + feature.get('nur_nm') + "</td></tr>"
				        								+"<tr><td>구분</td><td>" + feature.get('type') + "</td></tr>"
				        								+"<tr><td>주소</td><td>" + feature.get('detail_addr') + "</td></tr>"
				        								+"<tr><td>전화번호</td><td>" + feature.get('phone_num') + "</td></tr>"
				        								+"<tr><td>보육교사수</td><td>" + feature.get('teacher_count') + "</td></tr>"
				        								+"<tr><td>현원</td><td>" + feature.get('pre_count') + "</td></tr>"
				        								+"<tr><td>정원</td><td>" + feature.get('full_count') + "</td></tr>"
				        								);
		    	}
		    	
//		    	debugger;
		    	if(feature.get('a') == 'final') {
		    		modal.classList.toggle('show');
		    		
		    		$("table[id='tableTag']").html("<tr><th></th><th></th></tr><tr><td>격자번호</td><td>" + feature.get('gid') + "</td></tr>"
		    				+"<tr><td title='최근린 3개소 어린이집의 보육 교사 1인당 유아 수를 환산하여 담당 유아수가 많을 수록 높은 점수 환산'>보육 환경 취약 점수</td><td>" + feature.get('per_cnt_score') + "</td></tr>"
		    				+"<tr><td title='최근린 3개소 어린이집의 정원 대비 현원 비율이 높을수록 높은 점수 환산'>교육 환경 취약 점수</td><td>" + feature.get('child_rate') + "</td></tr>"
		    				+"<tr><td title='최근린 3개소 어린이집의 평균 거리를 점수로 환산'>접근성 취약 점수</td><td>" + feature.get('distance_rate') + "</td></tr>"
		    				+"<tr><td title='해당 격자의 전체 인구 중 유아가 차지 하는 비율'>동작구 유아 비율</td><td>" + feature.get('djg_child_rate') + "%</td></tr>"
		    				+"<tr><td title='해당 읍면동의 전체 어린이집 이용자 수 대비 국공립 어린이집 이용자 수 비율'>국공립 어린이집 이용률</td><td>" + (feature.get('national_rate') * 100).toFixed(0) + "%</td></tr>"
		    				+"<tr style='font-weight:bold; background:#eceff1'><td>총 사각지대 점수</td><td>" + feature.get('score') + "</td></tr>"
		    		);
		    		
		    		$('[data-toggle="tooltip"]').tooltip();
		    	}
		    	if(!test1) {
		    		modal.addEventListener('click', (event) => {
		    			if (event.target === modal) {
		    				modal.classList.toggle('show');
		    			}
		    		});
		    		test1 = true;
		    	}
		    });
		});
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
	
	
		
		var rate = new ol.layer.Image({
			source: new ol.source.ImageWMS({
			projection: projection,
			  ratio: 1,
			  url: 'http://localhost:9090/geoserver/seoul/wms',
			  params: {
			  'FORMAT': 'image/png',
					'VERSION': '1.1.1',  
					"LAYERS": 'seoul:rate',
					"exceptions": 'application/vnd.ogc.se_inimage',
				}
			})
		});
		
		$('#natRate').on('click',function(){
			
			if(rateFlag) {
				$("#rate").css({ "color" :"#BBDEFB" });
				$("#rateA").css({ "background-color" :"#283593" });
				  
				map1.addLayer(rate);
				rateFlag = false;
				analsFlag.rateFlag = false;
				
			}else {
				map1.removeLayer(rate);
				
				$("#rate").css({ "color" :"#FFFFFF" });
				$("#rateA").css({ "background-color" :"#3E64FF" });
				analsFlag.rateFlag = true;
				rateFlag = true;
			}
		});
		 
	
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
	
//	$('#childLi').on('click',function(){
//		
//		if(childFlag) {
//			$("#child").css({ "color" :"#BBDEFB" });
//			$("#childA").css({ "background-color" :"#283593" });
//			  
//			map1.addLayer(child);
//			childFlag = false;
//			
//		}else {
//			map1.removeLayer(child);
//			
//			$("#child").css({ "color" :"#FFFFFF" });
//			$("#childA").css({ "background-color" :"#3E64FF" });
//			
//			childFlag = true;
//		}
//	});