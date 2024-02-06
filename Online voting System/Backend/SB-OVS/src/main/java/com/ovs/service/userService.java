package com.ovs.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ovs.bean.User;
import com.ovs.dao.UserRepo;

@Service
public class userService {
	@Autowired
	UserRepo repo;

	public boolean Register(User user) {
		repo.save(user);
		return true;
	}

	public List<User> getAll() {
		Iterator<User> it = repo.findAll().iterator();
		List<User> list = new ArrayList<User>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

}

//	public List<User>getAllUsers(){
//		Iterator<User>iterator = userRepo.findAll().iterator();
//		List<User>userList=new ArrayList<>();
//		userList.add(iterator.next());
//	}
//	return userList;
