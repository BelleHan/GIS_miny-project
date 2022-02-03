
// nurTypeFlag 어린이집 위치 전체
// nurTypeFlag1 어린이집 위치 국공립
// nurTypeFlag2 어린이집 위치 민간
// nurTypeFlag3 어린이집 위치 가정
// nurTypeFlag4 어린이집 위치 법인단체등
// nurTypeFlag5 어린이집 위치 협동
// nurTypeFlag6 어린이집 위치 사회복지법인
// nurTypeFlag7 어린이집 위치 직장

// childRateFlag 어린이집 현원 비율 전체
// childRateFlag60 어린이집 현원 비율 60
// childRateFlag80 어린이집 현원 비율 80
// childRateFlag90 어린이집 현원 비율 90
// childRateFlag100 어린이집 현원 비율 100

// childFlag 동작구 영유아 인구

// rateFlag 국공립 어린이집 이용률

var analsFlag = {
		'childFlag': false,
		'rateFlag' : false
}
var finalCell = null;

var analsLayers = {
		'layer' :null
}
function getFinalCell() {
	
	var nurTypeArr = [];
	
	
	if (nurTypeFlag1 == false) {
		nurTypeArr.push('국공립');
	} 
	
	if (nurTypeFlag2 == false) {
		nurTypeArr.push('민간');
	} 
	
	if (nurTypeFlag3 == false) {
		nurTypeArr.push('가정');
	} 
	
	if (nurTypeFlag4 == false) {
		nurTypeArr.push('법인?단체등');
	} 
	
	if (nurTypeFlag5 == false) {
		nurTypeArr.push('협동');
	} 
	
	if (nurTypeFlag6 == false) {
		nurTypeArr.push('사회복지법인');
	} 
	
	if (nurTypeFlag7 == false) {
		nurTypeArr.push('직장');
	} 
	
	if (nurTypeArr.length === 0) {
		nurTypeArr.push('all');
	}
	
	
	var childRateArr = [];
	
	if (childRateFlag60 == false) {
		childRateArr.push(60);
	} 
	
	if (childRateFlag80 == false) {
		childRateArr.push(80);
	} 
	
	if (childRateFlag90 == false) {
		childRateArr.push(90);
	} 
	
	if (childRateFlag100 == false) {
		childRateArr.push(100);
	} 
	
	if (childRateArr.length === 0) {
		childRateArr.push('all');
	}
	
	console.log(nurTypeArr);
	console.log(childRateArr);
	

	var data = {
			'nurTypeArr' : nurTypeArr,
			'childRateArr' : childRateArr
	}	
    
	$.ajax({
		url : "/nursery/finalCell",
		type : "POST",
		data : data,
		dataType : "json",
		success : function(result) {
			
			selectedDiv();
			
			removeLayer();
			
			var score1;
			var arr = [];
			for(let j=0; j<result.length; j++){
//				debugger;
				score1 = Number(((result[j].child_rate+result[j].distance_rate+result[j].per_cnt_score)/3));
//				score1 = Number(((result[j].distance_rate+result[j].per_cnt_score)/2));
//				result[j].child_rate+
//				20+20+100/3
				if(!analsFlag.childFlag){
					score1 = score1 +(result[j].djg_child_rate*0.01);
				}
				if(!analsFlag.rateFlag){
					score1 = score1  - ((1 - result[j].national_rate) * 10);
				}
				score1 = Number(score1.toFixed(2));
				arr.push(score1);
				score1 = 0;
			}
			debugger;
			var features = new Array(result.length);
			for (var i=0; i<result.length; i++) {
				features[i] = new ol.Feature({
					'geometry' : new ol.format.WKT().readGeometry(result[i].geom),
					'type' : 'MultiPolygon',
					'i' : i,
					'a' : 'final',
					'gid' : result[i].gid,
					'per_cnt_score' : result[i].per_cnt_score,
					'child_rate' : result[i].child_rate,
					'distance_rate' : result[i].distance_rate,
					'djg_child_rate' : result[i].djg_child_rate,
					'national_rate' : result[i].national_rate,
					'score' : arr[i]
				});
				if(arr[i] > 80 ){
//					debugger;
				}
			}
			
			var vectorSource = new ol.source.Vector({
				features : features
			});
			
			debugger;
			
			finalCell = new ol.layer.Vector({
				source : vectorSource,
				style: (features) => {
					
					var fill = null;
					
					if (Number(features.get('score')) <= 50) {
						fill = [255, 235, 238, 0.6]; 
					} else if (Number(features.get('score')) <= 60) {
						fill = [255, 205, 210, 0.6];
					} else if (Number(features.get('score')) <= 70) {
						fill = [229, 115, 115, 0.6];
					} else if (Number(features.get('score')) <= 80) {
						fill = [244, 67, 54, 0.6];
					} else {
	                	fill = [229, 57, 53, 0.6];
	                }
					
					var style = new ol.style.Style({
						stroke: new ol.style.Stroke({
							color : [53, 55, 56, 0.5],
							width : 1
						}),
						fill: new ol.style.Fill({
							color : fill
						})
					});
					return style;
				}
			});
			
			map1.addLayer(finalCell);
			document.getElementById('finalDiv').style.display = 'block';
			
			
			
			
		},
		error : function(error) {
			alert(error);
		}
		
	});
	
	
}

function selectedDiv() {
	
	debugger;
	
	if (!nurTypeFlag) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">어린이집전체&nbsp/&nbsp;</a>');
	}

	if (!nurTypeFlag1) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">국공립&nbsp/&nbsp;</a>');
	}
	
	if (!nurTypeFlag2) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">민간&nbsp/&nbsp;</a>');
	}
	
	if (!nurTypeFlag3) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">가정&nbsp/&nbsp;</a>');
	}
	
	if (!nurTypeFlag4) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">법인단체등&nbsp/&nbsp;</a>');
	}
	
	if (!nurTypeFlag5) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">협동&nbsp/&nbsp;</a>');
	}
	
	if (!nurTypeFlag6) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">사회복지법인&nbsp/&nbsp;</a>');
	}
	
	if (!nurTypeFlag7) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">직장&nbsp/&nbsp;</a>');
	}
	
	
	
	if (!childRateFlag) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">현원비율전체&nbsp/&nbsp;</a>');
	}
	
	
	if (!childRateFlag60) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">0-60&nbsp/&nbsp;</a>');
	}
	
	
	if (!childRateFlag80) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">60-80&nbsp/&nbsp;</a>');
	}
	
	
	if (!childRateFlag90) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">80-90&nbsp/&nbsp;</a>');
	}
	
	
	if (!childRateFlag100) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">90-100&nbsp/&nbsp;</a>');
	}
	
	
	if (!childFlag) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">동작구영유아인구&nbsp/&nbsp;</a>');
	}
	
	
	if (!rateFlag) {
		$("#selectedDiv").append('<a href="#" role="button" style="font-weight:bold;" class="filter_pic__6ysvs">국공립이용률&nbsp/&nbsp;</a>');
	}
	
	
	
}

function removeLayer(){
	
	if(finalCell != null){
		map1.removeLayer(finalCell);
		finalCell = null;
		$("#selectedDiv *").remove();
	}
	
	document.getElementById('finalDiv').style.display = 'none';
	
	
	// 어린이집 위치
	if (nurTypeFlag == false) {
		
		map1.removeLayer(nurType);
		
		$("#nurTypeA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		
		nurTypeFlag = true;
		
	} 
	
	if (nurTypeFlag1 == false) {
		
		map1.removeLayer(nurType1);

		$("#nurTypeA1").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		
		nurTypeFlag1 = true;
		
	} 
	
	if (nurTypeFlag2 == false) {
		
		map1.removeLayer(nurType2);
		
		$("#nurTypeA2").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag2 = true;
		
	} 
	
	if (nurTypeFlag3 == false) {
		
		map1.removeLayer(nurType3);
		
		$("#nurTypeA3").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag3 = true;
		
	} 
	
	if (nurTypeFlag4 == false) {
		
		map1.removeLayer(nurType4);
		
		$("#nurTypeA4").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag4 = true;
		
	} 
	
	if (nurTypeFlag5 == false) {
		
		map1.removeLayer(nurType5);
		
		$("#nurTypeA5").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag5 = true;
		
	} 
	
	if (nurTypeFlag6 == false) {
		
		map1.removeLayer(nurType6);
		
		$("#nurTypeA6").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag6 = true;
		
	} 
	
	if (nurTypeFlag7 == false) {
		
		map1.removeLayer(nurType7);
		
		$("#nurTypeA7").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		nurTypeFlag7 = true;
		
	} 
	
	
	// 어린이집 현원 비율
	
	if (childRateFlag == false) {
		
		map1.removeLayer(vector);
		
		$("#childRateA").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag = true;
	}
	
	if (childRateFlag60 == false) {
		
		map1.removeLayer(vector60);
		
		$("#childRateA60").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag60 = true;
	}
	
	if (childRateFlag80 == false) {
		
		map1.removeLayer(vector80);
		
		$("#childRateA80").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag80 = true;
	}
	
	if (childRateFlag90 == false) {
		
		map1.removeLayer(vector90);
		
		$("#childRateA90").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag90 = true;
	}
	
	if (childRateFlag100 == false) {
		
		map1.removeLayer(vector100);
		
		$("#childRateA100").css({ "background-color" :"#3E64FF" , "color" :"#FFFFFF" });
		
		childRateFlag100 = true;
	}
	
	
	checkChildRate();
	
	checkNurType();
	
	// 동작구 유아 인구
	
	if(childFlag == false) {
		
		map1.removeLayer(childCell);
		
		$("#child").css({ "color" :"#FFFFFF" });
		$("#childA").css({ "background-color" :"#3E64FF" });
		analsFlag.childFlag = false;
		childFlag = true;
	}
	
	// 국공립 어린이집 이용률
	
	if(rateFlag == false) {
		
		map1.removeLayer(rate);
		
		$("#rate").css({ "color" :"#FFFFFF" });
		$("#rateA").css({ "background-color" :"#3E64FF" });
		analsFlag.rateFlag = false;
		rateFlag = true;
	}
	
}