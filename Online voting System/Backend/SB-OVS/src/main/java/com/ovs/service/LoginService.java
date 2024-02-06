package com.ovs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ovs.bean.User;
import com.ovs.bean.Login;
import com.ovs.dao.UserRepo;

@Service
public class LoginService {
	
	@Autowired
	UserRepo repo;
	User user;
//	Login login;
//	
//	public Login login(User user) {
//		User emailId=repo.getByEmailId(user.getEmailId());
//		User password=repo.getByPassword(user.getPassword());
//		if(emailId!=null && password!=null) {
//			String value=emailId.getPassword();
//			String confirmPass=password.getPassword();
//			if (value.equals(confirmPass)) {
//				String userType = emailId.getUserType();
//				if(userType.equalsIgnoreCase("Admin")) {
//					return new Login("Admin Login Successfully");
//				}else{
//					return new Login("User Login Successfully");
//				}
//			}
//			else {
//				return new Login("Login Fail");
//			}
//		}  else {
//		return new Login("Login Fail");
//		}
//		
//	}

	
	
	
	public boolean login(User user) {
		User ref=repo.findByEmailId(user.getEmailId());
		User pass=repo.findByPassword(user.getPassword());
		if(ref!=null && pass!=null) {
			String value=ref.getPassword();
			String word=pass.getPassword();
			if (value.equals(word)) {
				return true;
			}
			else {
				return false;
			}
		}  else {
		return false;
		}
		
	}	
	
	@Autowired
	   private UserRepo userRepo;
	
	   public User loginUser(String emailId, String password) {
	       // Find the user by email
	       User user = userRepo.findByEmailId(emailId);
	       // If user exists and password matches, return the user
	       if (user != null && user.getPassword().equals(password)) {
	           return user;
	       }
	       return null; // User not found or password incorrect
	   }

	
}



