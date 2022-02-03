package com.spring.nursery;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.junit.Test;
import org.springframework.stereotype.Controller;

@Controller
public class TestController {
   
   private static final String DRIVER = "org.postgresql.Driver"; //Connection을 구현한 클래스의 이름
   private static final String URL = "jdbc:postgresql://localhost:5432/nursery"; //mysql 서버 주소
   private static final String USER = "postgres"; //계정
   private static final String PW = "postgres"; // 비밀번호
   
   @Test // jUnit이 테스트함
   public void testConnection() throws Exception {
      Class.forName(DRIVER); // DRIVER라는 이름을 가진 클래스를 찾음

      try (Connection con = DriverManager.getConnection(URL, USER, PW)) { 
         int gid = 1;
         String name = selectName(con,gid);
         System.out.println("gid가 "+gid+"인 행의 name 은 " + name);
      } catch (Exception e) {
         e.printStackTrace();
      }
   }

   // SELECT 문을 날리는 메서드

   private static final String SQL2 = "select sid_nm from admin_emd where gid = ?;"; // sql 쿼리

   public String selectName(Connection con, Integer gid) throws Exception {
      String result = null;
      try (PreparedStatement pstmt = con.prepareStatement(SQL2)) {
         pstmt.setInt(1,gid);
         ResultSet rs = pstmt.executeQuery(); // 쿼리 실행
         if (rs.next()) // 다음행이 있는지 확인
            result = rs.getString("sid_nm"); // name column을 가져옴
      } catch (Exception e) {
         throw e;
      }
      return result;
   }
}