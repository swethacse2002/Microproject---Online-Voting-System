package com.ovs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ovs.bean.Party;

@Repository
public interface PartyRepo extends JpaRepository<Party, Long> {

}
