package com.ovs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ovs.bean.User;
import com.ovs.dao.PollingRepo;
import com.ovs.bean.Polling;

@Service
public class PollingService {
	
	@Autowired
	PollingRepo repo;
	

	public boolean Polling(Polling polling) {
		repo.save(polling);
		return true;
	}

	public List<Polling> getAll() {
		Iterator<Polling> it = repo.findAll().iterator();
		List<Polling> list = new ArrayList<Polling>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
}
