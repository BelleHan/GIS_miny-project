
var childCell = null;

function getChildCell() {
	
	if(childFlag) {
		$("#child").css({ "color" :"#BBDEFB" });
		$("#childA").css({ "background-color" :"#283593" });
		
		$.ajax({
			url : "/nursery/childCell",
			type : "get",
			contentType : "application/json",
			success : function(result){
				
				
				var features = new Array(result.length);
					for (var i=0; i<result.length; i++) {
						features[i] = new ol.Feature({
							'geometry' : new ol.format.WKT().readGeometry(result[i].geom),
							'type' : 'MultiPolygon',
							'i' : i,
							'val' : result[i].val,
							'gid' : result[i].gid
						});
					}
					
					var vectorSource = new ol.source.Vector({
						features : features
					});
					
					childCell = new ol.layer.Vector({
						source : vectorSource,
						style: (features) => {
							
							var fill = null;
							
							if (Number(features.get('val')) <= 3) {
								fill = [237, 231, 246, 0.5];
							} else if (Number(features.get('val')) <= 10) {
								fill = [209, 196, 233, 0.5];
							} else if (Number(features.get('val')) <= 30) {
								fill = [179, 157, 219, 0.5];
							} else if (Number(features.get('val')) <= 70) {
								fill = [149, 117, 205, 0.5];
							} else {
			                	fill = [108, 58, 194, 0.5];
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
					
					map1.addLayer(childCell);
				
			},
			error : function(error){
				alert(error);
			}
		});

		
		childFlag = false;
		analsFlag.childFlag = false;
	}else {
		
		map1.removeLayer(childCell);
		
		$("#child").css({ "color" :"#FFFFFF" });
		$("#childA").css({ "background-color" :"#3E64FF" });
		analsFlag.childFlag = true;
		childFlag = true;
	}
	
}