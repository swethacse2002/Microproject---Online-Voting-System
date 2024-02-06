package com.ovs.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Table_Election")
public class Election {
	
	@Id
	@Column(name="electionID")
	private long electionID;
	
	@Column(name="electionName")
	private String electionName;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="partyId")
	private Party partyId;
	
	@Column(name="partyName")
	private String partyName;
	
	
	public Election() {
		super();

	}
	
	public Election(long electionID, String electionName, Party partyId, String partyName) {
		super();
		this.electionID = electionID;
		this.electionName = electionName;
		this.partyId = partyId;
		this.partyName = partyName;
	}
	
	
	public long getElectionID() {
		return electionID;
	}
	public void setElectionID(long electionID) {
		this.electionID = electionID;
	}
	public String getElectionName() {
		return electionName;
	}
	public void setElectionName(String electionName) {
		this.electionName = electionName;
	}
	public Party getPartyId() {
		return partyId;
	}
	public void setPartyId(Party partyId) {
		this.partyId = partyId;
	}
	public String getPartyName() {
		return partyName;
	}
	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	@Override
	public String toString() {
		return "Election [electionID=" + electionID + ", electionName=" + electionName + ", partyId=" + partyId
				+ ", partyName=" + partyName + "]";
	}
	
	
	
	

}
