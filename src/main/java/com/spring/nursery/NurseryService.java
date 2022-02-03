package com.spring.nursery;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface NurseryService {
	
	List<NurseryVO> getChildRate() throws SQLException;
	
	List<NurseryVO> getChildRate60() throws SQLException;
	
	List<NurseryVO> getChildRate80() throws SQLException;
	
	List<NurseryVO> getChildRate90() throws SQLException;
	
	List<NurseryVO> getChildRate100() throws SQLException;
	
	List<NurseryVO> getNurType() throws SQLException;
	
	List<NurseryVO> getNurType1() throws SQLException;
	
	List<NurseryVO> getNurType2() throws SQLException;
	
	List<NurseryVO> getNurType3() throws SQLException;
	
	List<NurseryVO> getNurType4() throws SQLException;
	
	List<NurseryVO> getNurType5() throws SQLException;
	
	List<NurseryVO> getNurType6() throws SQLException;
	
	List<NurseryVO> getNurType7() throws SQLException;
	
	List<ChildCellVO> getChildCell() throws SQLException;
	
	List<FinalVO> getFinalCell(Map<String, Object> dataMap) throws SQLException;

}
