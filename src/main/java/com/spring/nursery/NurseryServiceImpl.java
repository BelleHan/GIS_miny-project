package com.spring.nursery;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class NurseryServiceImpl implements NurseryService {
	
	private NurseryDAO nurseryDAO;
	public void setNurseryDAO(NurseryDAO nurseryDAO) {
		this.nurseryDAO = nurseryDAO;
	}

	@Override
	public List<NurseryVO> getChildRate() throws SQLException {
		
		List<NurseryVO> childRate = nurseryDAO.selectChildRate();
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> getChildRate60() throws SQLException {
		
		List<NurseryVO> childRate = nurseryDAO.selectChildRate60();
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> getChildRate80() throws SQLException {
		
		List<NurseryVO> childRate = nurseryDAO.selectChildRate80();
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> getChildRate90() throws SQLException {
		
		List<NurseryVO> childRate = nurseryDAO.selectChildRate90();
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> getChildRate100() throws SQLException {
		
		List<NurseryVO> childRate = nurseryDAO.selectChildRate100();
		
		return childRate;
	}

	@Override
	public List<NurseryVO> getNurType() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType1() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType1();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType2() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType2();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType3() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType3();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType4() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType4();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType5() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType5();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType6() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType6();
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> getNurType7() throws SQLException {
		
		List<NurseryVO> nurType = nurseryDAO.selectNurType7();
		
		return nurType;
	}

	@Override
	public List<ChildCellVO> getChildCell() throws SQLException {

		List<ChildCellVO> childCell = nurseryDAO.selectChildCell();
		
		return childCell;
	}

	@Override
	public List<FinalVO> getFinalCell(Map<String, Object> dataMap) throws SQLException {

		List<FinalVO> finalCell = nurseryDAO.selectFinalCell(dataMap);
		
		return finalCell;
	}

}
