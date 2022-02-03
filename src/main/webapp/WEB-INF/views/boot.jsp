<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
  	<title>Nursery Project</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<%-- <script src="<%=request.getContextPath() %>/resources/js/jquery.min.js"></script> --%>
   
   <!-- OpenLayers 3 & Proj4js -->
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/resources/js/javascript/ol.css" />
      <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/javascript/ol.js"></script>
      <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/resources/js/javascript/ol3-layerswitcher.css" />
      <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/javascript/ol3-layerswitcher.js"></script>
      <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/javascript/proj4.js"></script>
      

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
		
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/style.css">
	
	<style>
	a:hover{
		background-color : #283593;
	}
	.my-legend .legend-title {
    text-align: left;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-left: 5px;
    font-weight: bold;
    font-size: 90%;
    
    }
  .my-legend .legend-scale ul {
    margin: 0;
    margin-bottom: 5px;
    padding-left: 5px;
    float: left;
    list-style: none;
    }
  .my-legend .legend-scale ul li {
    font-size: 85%;
    font-weight: bold;
    list-style: none;
    margin-left: 0;
    line-height: 18px;
    margin-bottom: 2px;
    margin-top: 2px;
    width : 100px;
    height : 25px;
    }
  .my-legend ul.legend-labels li span {
    display: block;
    float: left;
    height: 12px;
    width: 12px;
    margin-right: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 0;
    border: 1px solid #999;
    border-radius: 50%;
    }
	.modal {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        display: none;

        background-color: rgba(0, 0, 0, 0.4);
      }

      .modal.show {
        display: block;
      }

      .modal_body {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 650px;
        height: 590px;

        padding: 40px;

        text-align: center;

        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

        transform: translateX(-50%) translateY(-50%);
      }
      
</style>
  </head>
  <body onload="init()">
		
		<div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar" class="active">
				<h1><a href="index.html" class="logo">Nursery</a></h1>
        <ul class="list-unstyled components mb-5">
<!--           <li class="active"> -->
<!--             <a href="#"> Home</a> -->
<!--           </li> -->
		<li class="active">
		<a href="#homeSubmenu1" id="nurType" data-toggle="collapse" aria-expanded="false" class="" data-toggle="dropdown" onclick="showNurTypeDiv()"><span class="fa fa-home"></span>
			<span style="font-size:14px; font-weight:bold;">어린이집 위치 정보</span></a>
		<ul class="collapse list-unstyled" id="homeSubmenu1">
		<li>
		<a href="#" id="nurTypeA" onclick="getNurType()">전체</a>
		</li>
		<li id="nurWfs">
		<a href="#" id="nurTypeA1" onclick="getNurType1()">국공립</a>
		</li>
		<li>
		<a href="#" id="nurTypeA2" onclick="getNurType2()">민간</a>
		</li>
		<li>
		<a href="#" id="nurTypeA3" onclick="getNurType3()">가정</a>
		</li>
		<li>
		<a href="#" id="nurTypeA4" onclick="getNurType4()">법인단체등</a>
		</li>
		<li>
		<a href="#" id="nurTypeA5" onclick="getNurType5()">협동</a>
		</li>
		<li>
		<a href="#" id="nurTypeA6" onclick="getNurType6()">사회복지법인</a>
		</li>
		<li>
		<a href="#" id="nurTypeA7" onclick="getNurType7()">직장</a>
		</li>
		</ul>
		</li>

		<li class="active">
		<a href="#homeSubmenu2" id="childRate" data-toggle="collapse" aria-expanded="false" class="" data-toggle="dropdown" onclick="showChildDiv()"><span class="fa fa-user"></span>
		<span style="font-size:14px; font-weight:bold;">어린이집 현원 비율</span></a>
		<ul class="collapse list-unstyled" id="homeSubmenu2">
		<li >
		<a href="#" id="childRateA" onclick="getChildRate()" style="font-size:14px;">전체</a>
		</li>
		<li>
		<a href="#" id="childRateA60" onclick="getChildRate60()" >0 - 60</a>
		</li>
		<li>
		<a href="#" id="childRateA80" onclick="getChildRate80()">60 - 80</a>
		</li>
		<li>
		<a href="#" id="childRateA90" onclick="getChildRate90()">80 - 90</a>
		</li>
		<li>
		<a href="#" id="childRateA100" onclick="getChildRate100()">90 - 100</a>
		</li>
		</ul>
		</li>
<!--           <li> -->
<!--               <a href="#"><span class="fa fa-user"></span> 어린이집 현원 비율</a> -->
<!--           </li> -->
          <li id="childLi" >
            <a href="#" id="childA" onclick="getChildCell()" ><span class="fa fa-sticky-note"></span>
            	<span id="child" style="font-size:14px; font-weight:bold;">동작구 영유아 인구</span> </a>
          </li>
          <li id="natRate">
            <a href="#" id="rateA"><span class="fa fa-paper-plane"></span> 
            <span id="rate" style="font-size:14px; font-weight:bold;">국공립 어린이집 이용률</span></a>
          </li>
          <li>
            <a href="#" onclick="getFinalCell()"><span class="fa fa-cogs"></span>
            <span style="font-size:14px; font-weight:bold;">사각지대 분석</span></a>
          </li>

        </ul>

<!--         <div class="footer"> -->
<!--         	<p> -->
<!-- 			Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a> -->
<!-- 			</p> -->
<!--         </div> -->
    	</nav>

        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5">

        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin: 0px; width:1386px;">
          <div class="container-fluid">

<!--             <button type="button" id="sidebarCollapse" class="btn btn-primary"> -->
<!--               <i class="fa fa-bars"></i> -->
<!--               <span class="sr-only">Toggle Menu</span> -->
<!--             </button> -->
            <button type="button" id="" class="btn btn-primary" style="font-weight:bold;" onclick="removeLayer()">
				초기화
            </button>
            <div id="selectedDiv">
<!--             <a href="#" role="button" class="filter_pic__6ysvs">주얼리&nbsp;</a> -->
<!--             <a href="#" role="button" class="filter_pic__6ysvs">주얼리</a> -->
<!--             <a href="#" role="button" class="filter_pic__6ysvs">주얼리</a> -->
            </div>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

<!--             <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
<!--               <ul class="nav navbar-nav ml-auto"> -->
<!--                 <li class="nav-item active"> -->
<!--                     <a class="nav-link" href="#">Home</a> -->
<!--                 </li> -->
<!--                 <li class="nav-item"> -->
<!--                     <a class="nav-link" href="#">About</a> -->
<!--                 </li> -->
<!--                 <li class="nav-item"> -->
<!--                     <a class="nav-link" href="#">Portfolio</a> -->
<!--                 </li> -->
<!--                 <li class="nav-item"> -->
<!--                     <a class="nav-link" href="#">Contact</a> -->
<!--                 </li> -->
<!--               </ul> -->
<!--             </div> -->
          </div>
        </nav>

        <div id="map" class="map" style="width:1386px; height: 681px; position:absolute; z-index:1; "></div>
        
<!--         범례 영역 -->
	<div >
        <div class='my-legend' id="nurTypeDiv" style="display:none; position:relative; z-index:2; background:#ffffff; float:left; width:100px; height:220px;">
		<div class='legend-title'>어린이집 구분</div>
		<div class='legend-scale'>
		  <ul class='legend-labels'>
		    <li><span style='background:#f60057;'></span>국공립</li>
		    <li><span style='background:#6a1b9a;'></span>민간</li>
		    <li><span style='background:#d500f9;'></span>가정</li>
		    <li><span style='background:#3d5afe;'></span>법인단체등</li>
		    <li><span style='background:#00b0ff;'></span>협동</li>
		    <li><span style='background:#1de9b6;'></span>사회복지법인</li>
		    <li><span style='background:#006064;'></span>직장</li>
		  </ul>
		</div>
		</div>
        
        <div class='my-legend' id="childDiv" style="display:none; position:relative; z-index:3; background:#ffffff; float:left; width:130px; height:150px;">
		<div class='legend-title'>어린이집 현원/정원</div>
		<div class='legend-scale'>
		  <ul class='legend-labels'>
		    <li><span style='background:#ffe082;'></span>0-60</li>
		    <li><span style='background:#ffca28; width:14px; height:14px;'></span>60-80</li>
		    <li><span style='background:#ffb300; width:18px; height:18px;'></span>80-90</li>
		    <li><span style='background:#ff8f00; width:22px; height:22px;'></span>90-100</li>
		  </ul>
		</div>
		</div>
	</div>	
		
		<div class='my-legend' id="finalDiv" style="display:none; position:relative; z-index:2; background:#ffffff; float:left; width:100px; height:180px;">
		<div class='legend-title'>사각지대 점수</div>
		<div class='legend-scale'>
		  <ul class='legend-labels'>
		    <li><span style='background: rgba(255, 235, 238, 0.6); border-radius:0%;'></span>0 - 50</li>
		    <li><span style='background:rgba(255, 205, 210, 0.6); border-radius:0%;'></span>50 - 60</li>
		    <li><span style='background:rgba(229, 115, 115, 0.6); border-radius:0%;'></span>60 - 70</li>
		    <li><span style='background:rgba(244, 67, 54, 0.6); border-radius:0%;'></span>70 - 80</li>
		    <li><span style='background:rgba(229, 57, 53, 0.6); border-radius:0%;'></span>80 - 100</li>
		  </ul>
		</div>
		</div>
		
		<!-- Modal -->
		<div class="modal"> 
			<div class="modal_body">
				<div class="card">
              <div class="card-header" style="background:#3e64ff;">
                <h5 class="card-title-primary" style="margin-top:6px; margin-bottom:6px; background:#3e64ff; color:#ffffff; font-weight:bold;">상세 정보</h5>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered" id="tableTag" >
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
   
                  </tbody>
                </table>
              </div>

            </div>
			</div> 
		</div> 
		

      </div>
</div>

<form name="submitFinal" action="" method="post">

</form>
    
      

        
<%--   <%@ include file="./nursery_js.jsp" %> --%>
  
   <script src="<%=request.getContextPath() %>/resources/js/popper.js"></script>
    <script src="<%=request.getContextPath() %>/resources/js/bootstrap.min.js"></script>
    <script src="<%=request.getContextPath() %>/resources/js/main.js"></script>
  </body>
  
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/content/nursery.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/content/child.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/content/nurseryWFS.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/content/childCell.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath() %>/resources/js/content/finalCell.js"></script>
  
<style>  
        .tooltip {
  position: relative;
  display: block;
}

.tooltip .tooltiptext {
  visibility: hidden;       /* 이벤트가 없으면 툴팁 영역을 숨김 */
  width: 120px;             /* 툴팁 영역의 넓이를 설정 */
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;       /* 절대 위치를 사용 */
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;      /* hover 이벤트 발생시 영역을 보여줌 */
}
.tooltip .tooltip-right {
  top: -5px;
  left: 105%;
}

.tooltip .tooltip-right::after {
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-color: transparent black transparent transparent;
}
</style>
  
</html>