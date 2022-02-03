package com.spring.nursery;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface NurseryDAO {
	
	List<NurseryVO> selectChildRate() throws SQLException;
	
	List<NurseryVO> selectChildRate60() throws SQLException;
	
	List<NurseryVO> selectChildRate80() throws SQLException;
	
	List<NurseryVO> selectChildRate90() throws SQLException;
	
	List<NurseryVO> selectChildRate100() throws SQLException;
	
	List<NurseryVO> selectNurType() throws SQLException;
	
	List<NurseryVO> selectNurType1() throws SQLException;
	
	List<NurseryVO> selectNurType2() throws SQLException;
	
	List<NurseryVO> selectNurType3() throws SQLException;
	
	List<NurseryVO> selectNurType4() throws SQLException;
	
	List<NurseryVO> selectNurType5() throws SQLException;
	
	List<NurseryVO> selectNurType6() throws SQLException;
	
	List<NurseryVO> selectNurType7() throws SQLException;
	
	List<ChildCellVO> selectChildCell() throws SQLException;
	
	List<FinalVO> selectFinalCell(Map<String, Object> dataMap) throws SQLException;
	

}
