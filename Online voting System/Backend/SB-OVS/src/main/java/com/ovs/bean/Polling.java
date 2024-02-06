package com.ovs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Table_Poll")
public class Polling {
	
	@Id
	@Column(name="voterId")
	private Long voterId;
	
	@Column(name="partyId")
	private int partyId;
	
	@Column(name="userId")
	private int userId;
	
	@Column(name="mobile")
	private String mobile;

	
	
	public Polling() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Polling(Long voterId, int partyId, int userId, String mobile) {
		super();
		this.voterId = voterId;
		this.partyId = partyId;
		this.userId = userId;
		this.mobile = mobile;
	}

	public Long getVoterId() {
		return voterId;
	}

	public void setVoterId(Long voterId) {
		this.voterId = voterId;
	}

	public int getPartyId() {
		return partyId;
	}

	public void setPartyId(int partyId) {
		this.partyId = partyId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	

}
