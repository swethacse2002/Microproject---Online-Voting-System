package com.ovs.dao;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.ovs.bean.Polling;

@Repository
public interface PollingRepo extends JpaRepository<Polling ,Long> {
	
	

}
