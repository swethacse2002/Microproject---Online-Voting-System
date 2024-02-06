package com.ovs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ovs.bean.Election;
import com.ovs.bean.Party;
import com.ovs.dao.ElectionRepo;

@Service
public class ElectionService {
	
	@Autowired
	private ElectionRepo repo;
	public List<Election> getAllElection() {
		return repo.findAll();
	}
	public Optional<Election> getElectionById(Long electionId) {
		return repo.findById(electionId);
	}
	public Election createElection(Election election) {
		return repo.save(election);
	}
	public Election updateElection(Election election) {
		return repo.save(election);
	}
	public void deleteElection(Long electionId) {
		repo.deleteById(electionId);
	}
	
	public List<Election> getAll() {
		Iterator<Election> it =  repo.findAll().iterator();
		List<Election> list = new ArrayList<Election>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
}

