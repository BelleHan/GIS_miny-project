package com.spring.nursery;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

public class NurseryDAOImpl implements NurseryDAO {
	
	private SqlSession session;
	public void setSqlSession(SqlSession session) {
		this.session=session;
	}

	@Override
	public List<NurseryVO> selectChildRate() throws SQLException {
		
		List<NurseryVO> childRate = 
				session.selectList("mybatis.Nursery-Mapper.selectChildRate");
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> selectChildRate60() throws SQLException {
		
		List<NurseryVO> childRate = 
				session.selectList("mybatis.Nursery-Mapper.selectChildRate60");
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> selectChildRate80() throws SQLException {
		
		List<NurseryVO> childRate = 
				session.selectList("mybatis.Nursery-Mapper.selectChildRate80");
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> selectChildRate90() throws SQLException {
		
		List<NurseryVO> childRate = 
				session.selectList("mybatis.Nursery-Mapper.selectChildRate90");
		
		return childRate;
	}
	
	@Override
	public List<NurseryVO> selectChildRate100() throws SQLException {
		
		List<NurseryVO> childRate = 
				session.selectList("mybatis.Nursery-Mapper.selectChildRate100");
		
		return childRate;
	}

	@Override
	public List<NurseryVO> selectNurType() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType1() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType1");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType2() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType2");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType3() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType3");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType4() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType4");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType5() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType5");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType6() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType6");
		
		return nurType;
	}
	
	@Override
	public List<NurseryVO> selectNurType7() throws SQLException {
		
		List<NurseryVO> nurType =
				session.selectList("mybatis.Nursery-Mapper.selectNurType7");
		
		return nurType;
	}

	@Override
	public List<ChildCellVO> selectChildCell() throws SQLException {
		
		List<ChildCellVO> childCell =
				session.selectList("mybatis.Nursery-Mapper.selectChildCell");
		
		return childCell;
	}

	@Override
	public List<FinalVO> selectFinalCell(Map<String, Object> dataMap) throws SQLException {
		
		List<FinalVO> finalCell =
				session.selectList("mybatis.Nursery-Mapper.selectFinalCell", dataMap);
		return finalCell;
	}

}
