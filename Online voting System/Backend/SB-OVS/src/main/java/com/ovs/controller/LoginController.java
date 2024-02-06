package com.ovs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ovs.bean.User;
import com.ovs.bean.Login;
import com.ovs.service.LoginService;
import com.ovs.service.userService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class LoginController {
	
	@Autowired
	LoginService service;
//	
//	@RequestMapping("/login")
//	public ResponseEntity<?> performLogin(@RequestBody User user) {
//		Login res=service.login(user);
//			return ResponseEntity.ok(res);
//	}
//
	
	@GetMapping("/login")
	
	public String performLogin(@ModelAttribute User user) {
		boolean res = service.login(user);
		if (res == true) {
			return "Login Success";
		}
		return "Login Fail";
	}
	
//	 @Autowired
//	   private LoginService service;
//	  
//	   @GetMapping("/login")
//	   public String loginUser(@RequestBody User user) {
//	       User authenticatedUser = service.loginUser(user.getEmailId(), user.getPassword());
//	       if (authenticatedUser != null) {
//	           return "Login successful";
//	       } else {
//	           return "Invalid email or password";
//	       }
//	   }

	

	
	
	

}
