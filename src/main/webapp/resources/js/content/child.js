
// 어린이집 현원 / 정원

var div2 = null;

function showChildDiv(){
	
	div2 = document.getElementById('childDiv');
	
	if(div2.style.display == 'none') {
		div2.style.display = 'block';
		
	} else {
		div2.style.display = 'none';
	}
	
}

function checkChildRate() {
	
	if (childRateFlag == false || childRateFlag60 == false || childRateFlag80 == false || childRateFlag90 == false || childRateFlag100 == false) {
		$("#childRate").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
	} else if (childRateFlag == true && childRateFlag60 == true && childRateFlag80 == true && childRateFlag90 == true && childRateFlag100 == true) {
		$("#childRate").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
	}
}

var vector = null;

function getChildRate(){
	
	if(childRateFlag) {
		
		map1.removeLayer(vector60);
		map1.removeLayer(vector80);
		map1.removeLayer(vector90);
		map1.removeLayer(vector100);
		
		$("#childRateA60").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#childRateA80").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#childRateA90").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#childRateA100").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag60 = true;
		childRateFlag80 = true;
		childRateFlag90 = true;
		childRateFlag100 = true;
		
		$("#childRateA").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		 	$.ajax({
			url : "/nursery/childRate", 
	 		type : "get",
	 		contentType : "application/json",
	 		success: function(result){
	 			
	 			var features = new Array(result.length);
	             for (var i = 0; i < result.length; ++i) {
	               features[i] = new ol.Feature({
	                 'geometry': new ol.format.WKT().readGeometry(result[i].point),
	                 'i': i,
	                 'size':  result[i].child_rate
	               });
	             }
	 		

	 			var vectorSource = new ol.source.Vector({
	 			  features: features
	 			});
	 			
	 			vector = new ol.layer.Vector({
	                source: vectorSource,
	                style: function (features) {
	                   var radius = 5;
	                   if (Number(features.get('size')) <= 60) {
	                	   radius = 6;
	                	   fill = '#ffe082';
	                   } else if (Number(features.get('size')) <= 80) {
	                       radius = 8;
	                       fill = '#ffca28';
	                   } else if (Number(features.get('size')) <= 90) {
	                	   radius = 10;
	                	   fill = '#ffb300';
	                   } else if (Number(features.get('siz')) <= 100) {
	                	   radius = 12;
	                	   fill = '#ff8f00';
	                   } else {
	                      radius = 12;
	                      fill = '#ff8f00';
	                   }
	                   var styles = new ol.style.Style({
	                      image: new ol.style.Circle({
	                         radius: radius,
	                         fill: new ol.style.Fill({color: fill}),
	                         stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
	                      })
	                   });
	                   return styles;
	                }
	             });
	 				
	 			map1.addLayer(vector);
	 			
	 		},
	 		error: function(error){
	 			alert(error);
	 		}
			
		 });	
		 	
		 childRateFlag = false;
		 
		 checkChildRate();
		 	
	}else {
		
		map1.removeLayer(vector);
		
		$("#childRateA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag = true;
		
		checkChildRate();
	}
		 	
}

var vector60 = null;
var childRateFlag60 = true;

function getChildRate60(){
	
	if(childRateFlag60) {
		
		map1.removeLayer(vector);
		
		$("#childRateA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag = true;
		
		$("#childRateA60").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/childRate60", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				vector60 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						var radius = 6;
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: radius,
								fill: new ol.style.Fill({color: '#ffe082'}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(vector60);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		childRateFlag60 = false;
		
		checkChildRate();
		
	}else {
		
		map1.removeLayer(vector60);
		
		$("#childRateA60").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag60 = true;
		
		checkChildRate();
	}
	
}

var vector80 = null;
var childRateFlag80 = true;

function getChildRate80(){
	
	if(childRateFlag80) {
		
		map1.removeLayer(vector);
		
		$("#childRateA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag = true;
		
		$("#childRateA80").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/childRate80", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				vector80 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						var radius = 8;
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: radius,
								fill: new ol.style.Fill({color: '#ffca28'}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(vector80);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		childRateFlag80 = false;
		
		checkChildRate();
		
	}else {
		
		map1.removeLayer(vector80);
		
		$("#childRateA80").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag80 = true;
		
		checkChildRate();
	}
	
}

var vector90 = null;
var childRateFlag90 = true;

function getChildRate90(){
	
	if(childRateFlag90) {
		
		map1.removeLayer(vector);
		
		$("#childRateA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag = true;
		
		$("#childRateA90").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/childRate90", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				vector90 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						var radius = 10;
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: radius,
								fill: new ol.style.Fill({color: '#ffb300'}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(vector90);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		childRateFlag90 = false;
		
		checkChildRate();
		
	}else {
		
		map1.removeLayer(vector90);
		
		$("#childRateA90").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag90 = true;
		
		checkChildRate();
	}
	
}

var vector100 = null;
var childRateFlag100 = true;

function getChildRate100(){
	
	if(childRateFlag100) {
		
		map1.removeLayer(vector);
		
		$("#childRateA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag = true;
		
		$("#childRateA100").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/childRate100", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				vector100 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						var radius = 12;
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: radius,
								fill: new ol.style.Fill({color: '#ff8f00'}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(vector100);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		childRateFlag100 = false;
		
		checkChildRate();
		
	}else {
		
		map1.removeLayer(vector100);
		
		$("#childRateA100").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag100 = true;
		
		checkChildRate();
	}
	
}


// 어린이집 위치 

var nurType = null;
var nurTypeFlag = true;

function getNurType(){
	
	if(nurTypeFlag) {
		
		map1.removeLayer(nurType1);
		map1.removeLayer(nurType2);
		map1.removeLayer(nurType3);
		map1.removeLayer(nurType4);
		map1.removeLayer(nurType5);
		map1.removeLayer(nurType6);
		map1.removeLayer(nurType7);
		
		$("#nurTypeA1").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#nurTypeA2").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#nurTypeA3").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#nurTypeA4").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#nurTypeA5").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#nurTypeA6").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		$("#nurTypeA7").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag1 = true;
		nurTypeFlag2 = true;
		nurTypeFlag3 = true;
		nurTypeFlag4 = true;
		nurTypeFlag5 = true;
		nurTypeFlag6 = true;
		nurTypeFlag7 = true;
		
		$("#nurTypeA").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		 	$.ajax({
			url : "/nursery/nurType", 
	 		type : "get",
	 		contentType : "application/json",
	 		success: function(result){
	 			
	 			var features = new Array(result.length);
	             for (var i = 0; i < result.length; ++i) {
	               features[i] = new ol.Feature({
	                 'geometry': new ol.format.WKT().readGeometry(result[i].point),
	                 'i': i,
	                 'type' : result[i].nur_type,
	                 'a' : 'nursery',
	                 'nur_nm' : result[i].nur_nm,
	                 'detail_addr' : result[i].detail_addr,
	                 'phone_num' : result[i].phone_num,
	                 'teacher_count' : result[i].teacher_count,
	                 'pre_count' : result[i].pre_count,
	                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
	               });
	             }
	 		

	 			var vectorSource = new ol.source.Vector({
	 			  features: features
	 			});
	 			
	 			nurType = new ol.layer.Vector({
	                source: vectorSource,
	                style: function (features) {
	                	
	                   var fill = null;
	                   
	                   if (features.get('type') == '국공립') {
	                	   fill = '#f60057';
	                   } else if (features.get('type') == '민간') {
	                	   fill = '#6a1b9a';
	                   } else if (features.get('type') == '가정') {
	                	   fill = '#d500f9';
	                   } else if (features.get('type') == '법인?단체등') {
	                	   fill = '#3d5afe';
	                   } else if (features.get('type') == '협동') {
	                	   fill = '#00b0ff';
	                   } else if (features.get('type') == '사회복지법인') {
	                	   fill = '#1de9b6';
	                   } else {
	                	   fill = '#006064';
	                   }
	                   var styles = new ol.style.Style({
	                      image: new ol.style.Circle({
	                         radius: 6,
	                         fill: new ol.style.Fill({color: fill}),
	                         stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
	                      })
	                   });
	                   return styles;
	                }
	             });
	 				
	 			map1.addLayer(nurType);
	 			
	 			
	 			
	 		},
	 		error: function(error){
	 			alert(error);
	 		}
			
		 });	
		 	
		 nurTypeFlag = false;
		 
		 checkNurType();
		 
		 
		 	
	}else {
		
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		checkNurType();
		
	}
		 	
}

var nurType1 = null;
var nurTypeFlag1 = true;

function getNurType1(){
	
	if(nurTypeFlag1) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA1").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType1", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType1 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#f60057';

						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType1);
				
			},
			error: function(error){
				alert(error);
			}
			
			
		});	
		
		nurTypeFlag1 = false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType1);
		
		$("#nurTypeA1").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag1 = true;
		
		checkNurType();
	}
	
}

var nurType2 = null;
var nurTypeFlag2 = true;

function getNurType2(){
	
	if(nurTypeFlag2) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA2").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType2", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType2 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#6a1b9a';
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType2);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		nurTypeFlag2 = false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType2);
		
		$("#nurTypeA2").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag2 = true;
		
		checkNurType();
	}
	
}

var nurType3 = null;
var nurTypeFlag3 = true;

function getNurType3(){
	
	if(nurTypeFlag3) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA3").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType3", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType3 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#d500f9';
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType3);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		nurTypeFlag3 = false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType3);
		
		$("#nurTypeA3").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag3 = true;
		
		checkNurType();
	}
	
}

var nurType4 = null;
var nurTypeFlag4 = true;

function getNurType4(){
	
	if(nurTypeFlag4) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA4").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType4", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType4 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#3d5afe';
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType4);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		nurTypeFlag4 = false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType4);
		
		$("#nurTypeA4").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag4 = true;
		
		checkNurType();
	}
	
}

var nurType5 = null;
var nurTypeFlag5 = true;

function getNurType5(){
	
	if(nurTypeFlag5) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA5").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType5", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType5 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#00b0ff';
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType5);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		nurTypeFlag5 = false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType5);
		
		$("#nurTypeA5").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag5 = true;
		
		checkNurType();
	}
	
}

var nurType6 = null;
var nurTypeFlag6 = true;

function getNurType6(){
	
	if(nurTypeFlag6) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA6").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType6", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType6 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#1de9b6';
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType6);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		nurTypeFlag6= false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType6);
		
		$("#nurTypeA6").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag6 = true;
		
		checkNurType();
	}
	
}

var nurType7 = null;
var nurTypeFlag7 = true;

function getNurType7(){
	
	if(nurTypeFlag7) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag = true;
		
		$("#nurTypeA7").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
		
		$.ajax({
			url : "/nursery/nurType7", 
			type : "get",
			contentType : "application/json",
			success: function(result){
				
				var features = new Array(result.length);
				for (var i = 0; i < result.length; ++i) {
					features[i] = new ol.Feature({
						'geometry': new ol.format.WKT().readGeometry(result[i].point),
						'i': i,
						'type' : result[i].nur_type,
						'a' : 'nursery',
		                 'nur_nm' : result[i].nur_nm,
		                 'detail_addr' : result[i].detail_addr,
		                 'phone_num' : result[i].phone_num,
		                 'teacher_count' : result[i].teacher_count,
		                 'pre_count' : result[i].pre_count,
		                 'full_count' : result[i].full_count
//	                 'size':  result[i].child_rate
					});
				}
				
				
				var vectorSource = new ol.source.Vector({
					features: features
				});
				
				nurType7 = new ol.layer.Vector({
					source: vectorSource,
					style: function (features) {
						
						var fill = '#006064';
						
						var styles = new ol.style.Style({
							image: new ol.style.Circle({
								radius: 6,
								fill: new ol.style.Fill({color: fill}),
								stroke: new ol.style.Stroke({color: '#eceff1', width: 1})
							})
						});
						return styles;
					}
				});
				
				map1.addLayer(nurType7);
				
			},
			error: function(error){
				alert(error);
			}
			
		});	
		
		nurTypeFlag7 = false;
		
		checkNurType();
		
	}else {
		
		map1.removeLayer(nurType7);
		
		$("#nurTypeA7").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag7 = true;
		
		checkNurType();
	}
	
}

var div1 = null;

function showNurTypeDiv(){
	
	div1 = document.getElementById('nurTypeDiv');
	
	if(div1.style.display == 'none') {
		div1.style.display = 'block';
	}else {
		div1.style.display = 'none';
	}
	
	
	
}


function checkNurType() {
	
	if (nurTypeFlag == false || nurTypeFlag1 == false || nurTypeFlag2 == false || nurTypeFlag3 == false || nurTypeFlag4 == false || nurTypeFlag5 == false || nurTypeFlag6 == false || nurTypeFlag7 == false) {
		$("#nurType").css({ "background-color" :"#283593" , "color" :"#BBDEFB" });
	} else if (nurTypeFlag == true && nurTypeFlag1 == true && nurTypeFlag2 == true && nurTypeFlag3 == true && nurTypeFlag4 == true && nurTypeFlag5 == true && nurTypeFlag6 == true && nurTypeFlag7 == true) {
		$("#nurType").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF"});
	}
	
}