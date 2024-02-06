package com.ovs.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.ovs.bean.User;
import com.ovs.dao.UserRepo;
import com.ovs.service.userService;


@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {
	
	@Autowired
	userService service;
	
	@PostMapping("/Register")
	public String performRegister(@RequestBody User user) {
		service.Register(user);
		return "Registered successfully";
	}
//	
//	@PutMapping("/PerformUpdate")
//	public String performUpdate(@RequestBody User user) {
//		service.save(user);
//		return "Updated";
//	}
//
//	@DeleteMapping("/PerformDelete/{userId}")
//	public String performDelete(@PathVariable("userId") int userId) {
//		service.deleteById(userId);
//		return "Deleted";
//	}
//	
	@GetMapping("/View")
	public List<User> getAll(){
		Iterator<User> it=service.getAll().iterator();
		List<User> list = new ArrayList<User>();
		while(it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	
	
//	
//	@GetMapping("view/{userId}")
//	public User viewDetail(@PathVariable("userId") int userId) {
//		User user=service.findById(userId).get();
//		return user;
//	}
}
