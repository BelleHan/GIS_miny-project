package com.spring.nursery;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class NurseryController {
	
	@Autowired
	private NurseryService service;
	
	@RequestMapping(value="/childRate", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> childRate() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> childRate = service.getChildRate();
			entity = new ResponseEntity<List<NurseryVO>>(childRate, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/childRate60", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> childRate60() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> childRate = service.getChildRate60();
			entity = new ResponseEntity<List<NurseryVO>>(childRate, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/childRate80", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> childRate80() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> childRate = service.getChildRate80();
			entity = new ResponseEntity<List<NurseryVO>>(childRate, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/childRate90", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> childRate90() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> childRate = service.getChildRate90();
			entity = new ResponseEntity<List<NurseryVO>>(childRate, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/childRate100", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> childRate100() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> childRate = service.getChildRate100();
			entity = new ResponseEntity<List<NurseryVO>>(childRate, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType1", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType1() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType1();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType2", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType2() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType2();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType3", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType3() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType3();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType4", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType4() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType4();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType5", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType5() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType5();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType6", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType6() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType6();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/nurType7", method = RequestMethod.GET)
	public ResponseEntity<List<NurseryVO>> nurType7() throws Exception{
		
		ResponseEntity<List<NurseryVO>> entity = null;
		
		
		try {
			List<NurseryVO> nurType = service.getNurType7();
			entity = new ResponseEntity<List<NurseryVO>>(nurType, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<NurseryVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}
	
	@RequestMapping(value="/childCell", method = RequestMethod.GET)
	public ResponseEntity<List<ChildCellVO>> childCell() throws Exception{
		
		ResponseEntity<List<ChildCellVO>> entity = null;
		
		try {
			List<ChildCellVO> childCell = service.getChildCell();
			entity = new ResponseEntity<List<ChildCellVO>>(childCell, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<ChildCellVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
	}
	
	@RequestMapping(value="/finalCell", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<FinalVO>> finalCell(@RequestParam(value="nurTypeArr[]") List<String> nurTypeArr, 
													@RequestParam(value="childRateArr[]") List<String> childRateArr) throws Exception{
		
		
		ResponseEntity<List<FinalVO>> entity = null;
		
		Map<String, Object> dataMap = new HashMap<String, Object>();
		
		if ("all".equals(nurTypeArr.get(0))) {
			dataMap.put("nurTypeKey","all");
		} else {
			dataMap.put("nurTypeKey","not");
		}
		
		if ("all".equals(childRateArr.get(0))) {
			dataMap.put("childRateKey","all");
		} else {
			dataMap.put("childRateKey","not");
		}
		
		
		String[] nurTypeArrs = nurTypeArr.toArray(new String[nurTypeArr.size()]);
		String[] childRateArrs = childRateArr.toArray(new String[childRateArr.size()]);
		
		dataMap.put("nurTypeArr", nurTypeArrs);
		dataMap.put("childRateArr", childRateArrs);
		
		try {
			List<FinalVO> finalCell = service.getFinalCell(dataMap);
			entity = new ResponseEntity<List<FinalVO>>(finalCell, HttpStatus.OK);
			
		} catch (SQLException e) {
			e.printStackTrace();
			entity = new ResponseEntity<List<FinalVO>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return entity;
		
	}


}
