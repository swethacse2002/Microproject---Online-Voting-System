package com.ovs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ovs.bean.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {

//	public User getByEmailId(String emailId);
//	public User getByPassword(String password);

	

	public User findByEmailId(String emailId);
	public User findByPassword(String password);
	
}

//public interface UserRepo extends JpaRepository<User, Long> {
//	   @Query("SELECT u FROM User u WHERE u.emailId = :emailId") // Use the correct column name
//	   User findByEmailId(String emailId);
//	}

