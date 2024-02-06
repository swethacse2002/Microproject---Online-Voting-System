package com.ovs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.ovs.bean.Party;

import com.ovs.dao.PartyRepo;

@Service
public class PartyService {
	@Autowired
	PartyRepo repo;
	
	public  String Insert(Party party) {
		repo.save(party);
		return "Inserted";
	}
	
	public String updateParty(Party party) {
	       repo.save(party);
	       return "Updated";
	   }
	
	public String deleteParty(@PathVariable("partyId") long partyId) {
		repo.deleteById(partyId);
		return "Party Deleted";
	}

	
	public List<Party> getAll() {
		Iterator<Party> it =  repo.findAll().iterator();
		List<Party> list = new ArrayList<Party>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	



}
