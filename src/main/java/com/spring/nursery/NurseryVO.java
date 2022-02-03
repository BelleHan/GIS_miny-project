package com.spring.nursery;

public class NurseryVO {

	private double x;
	private double y;
	private String pre_count;
	private String full_count;
	private int child_rate;
	private String point;
	private String nur_type;
	private String nur_nm;
	private String detail_addr;
	private String phone_num;
	
	public String getNur_nm() {
		return nur_nm;
	}

	public void setNur_nm(String nur_nm) {
		this.nur_nm = nur_nm;
	}

	public String getDetail_addr() {
		return detail_addr;
	}

	public void setDetail_addr(String detail_addr) {
		this.detail_addr = detail_addr;
	}

	public String getPhone_num() {
		return phone_num;
	}

	public void setPhone_num(String phone_num) {
		this.phone_num = phone_num;
	}

	public int getTeacher_count() {
		return teacher_count;
	}

	public void setTeacher_count(int teacher_count) {
		this.teacher_count = teacher_count;
	}

	private int teacher_count;

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

	public int getChild_rate() {
		return child_rate;
	}

	public void setChild_rate(int child_rate) {
		this.child_rate = child_rate;
	}

	public String getPoint() {
		return point;
	}

	public void setPoint(String point) {
		this.point = point;
	}

	public String getPre_count() {
		return pre_count;
	}

	public void setPre_count(String pre_count) {
		this.pre_count = pre_count;
	}

	public String getFull_count() {
		return full_count;
	}

	public void setFull_count(String full_count) {
		this.full_count = full_count;
	}

	public String getNur_type() {
		return nur_type;
	}

	public void setNur_type(String nur_type) {
		this.nur_type = nur_type;
	}

}
