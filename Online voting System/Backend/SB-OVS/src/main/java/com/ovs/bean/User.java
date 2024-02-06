package com.ovs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Table_User")

public class User {
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name="userId")
	private Long userId;
	
	@Column(name="userName")
	private String userName;
	
	@Column(name="emailId")
	private String emailId;
	
	@Column(name="voterId")
	private String voterId;
	
	@Column(name="age")
	private int age;
	
	@Column(name="mobile")
	private String mobile;
	
	@Column(name="userType")
	private String userType;
	
	@Column(name="password")
	private String password;
	
	
	
	public User() {
		super();

	}



	public User(Long userId, String userName, String emailId, String voterId, int age, String mobile, String userType,
			String password) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.emailId = emailId;
		this.voterId = voterId;
		this.age = age;
		this.mobile = mobile;
		this.userType = userType;
		this.password = password;
	}




	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getVoterId() {
		return voterId;
	}

	public void setVoterId(String voterId) {
		this.voterId = voterId;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
	

	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}




	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", emailId=" + emailId + ", voterId=" + voterId
				+ ", age=" + age + ", mobile=" + mobile + ", userType=" + userType + ", password=" + password + "]";
	}


	
	
}
