package com.ovs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ovs.bean.Party;

import com.ovs.service.PartyService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class PartyController {

	@Autowired
	PartyService service;
	
	@PostMapping("/InsertParty")
	public String performRegister(@RequestBody Party party) {
		service.Insert(party);
		return "Parties Inserted successfully";
	}
	
	@PutMapping("/UpdateParty")
	public String performUpdate(@RequestBody Party party) {
		service.updateParty(party);
		return "Party updated successfully";
	}
	
	@DeleteMapping("/DeleteParty/{partyId}")
	public String performDelete(@PathVariable("partyId") long partyId) {
		service.deleteParty(partyId);
		return "Record deleted";
	}

	
	@GetMapping("/ViewAllParty")
	public List<Party> getAll() {
		Iterator<Party> it =  service.getAll().iterator();
		List<Party> list = new ArrayList<Party>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}


	
	
}
