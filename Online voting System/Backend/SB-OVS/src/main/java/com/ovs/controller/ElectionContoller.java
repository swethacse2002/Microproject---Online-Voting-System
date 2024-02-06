package com.ovs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ovs.bean.Election;
import com.ovs.bean.Party;
import com.ovs.service.ElectionService;

@RestController
@RequestMapping("/Election")
public class ElectionContoller {
	
	@Autowired
	   private ElectionService service;
	   @GetMapping
	   public List<Election> getAllElections() {
	       return service.getAllElection();
	   }
	   @GetMapping("/{id}")
	   public ResponseEntity<Election> getElectionById(@PathVariable("id") Long electionId) {
	       return service.getElectionById(electionId)
	               .map(partyId -> new ResponseEntity<>(partyId, HttpStatus.OK))
	               .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	   }
	   @PostMapping
	   public ResponseEntity<Election> createElection(@RequestBody Election election) {
	       return new ResponseEntity<>(service.createElection(election), HttpStatus.CREATED);
	   }
//	   @PutMapping("/{id}")
//	   public ResponseEntity<Election> updateElection(@PathVariable("id") Long electionId, @RequestBody Election election) {
//	       election.setPartyId(partyId);
//	       return new ResponseEntity<>(service.updateElection(partyId), HttpStatus.OK);
//	   }
	   @DeleteMapping("/{id}")
	   public ResponseEntity<Void> deleteElection(@PathVariable("id") Long electionId) {
	   	service.deleteElection(electionId);
	       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   }
	   
	   
	   
	   
		public List<Election> getAll() {
			Iterator<Election> it =  service.getAll().iterator();
			List<Election> list = new ArrayList<Election>();
			while(it.hasNext()) {
				list.add(it.next());
			}
			return list;
		}

	}

