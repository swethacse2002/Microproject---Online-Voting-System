package com.ovs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ovs.bean.Election;

@Repository
public interface ElectionRepo extends JpaRepository<Election,Long>{

}
