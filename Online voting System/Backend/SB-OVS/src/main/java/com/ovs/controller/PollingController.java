package com.ovs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ovs.bean.Party;
import com.ovs.bean.Polling;

import com.ovs.service.PollingService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class PollingController {
	
	@Autowired
	PollingService service;
	
	@PostMapping("/Polling")
	public String performPolling(@RequestBody Polling polling) {
		service.Polling(polling);
		return "Polled successfully";
	}
	
	@GetMapping("/ViewAllPoll")
	public List<Polling> getAll() {
		Iterator<Polling> it =  service.getAll().iterator();
		List<Polling> list = new ArrayList<Polling>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}
