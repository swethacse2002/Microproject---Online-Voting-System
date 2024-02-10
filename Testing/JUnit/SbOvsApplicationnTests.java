package com.ovs;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ovs.bean.Elections;
import com.ovs.bean.Login;
import com.ovs.bean.Party;
import com.ovs.bean.Polling;
import com.ovs.bean.User;
import com.ovs.controller.ElectionsController;
import com.ovs.service.ElectionsService;
import com.ovs.service.LoginService;
import com.ovs.service.PartyService;
import com.ovs.service.PollingService;
import com.ovs.service.userService;

@SpringBootTest

class SbOvsApplicationnTests {

	@Autowired
	ElectionsService eservice;

	@Autowired
	LoginService lservice;

	@Autowired
	PartyService pservice;

	@Autowired
	PollingService poservice;

	@Autowired
	userService uservice;

	boolean res;
	boolean val;
	String res1;
	String val1;

	List<User> list = new ArrayList<>();
	List<User> list1 = new ArrayList<>();
	List<Party> list2 = new ArrayList<>();
	List<Party> list3 = new ArrayList<>();
	List<Party> list4 = new ArrayList<>();
	List<Party> list5 = new ArrayList<>();
	
	List<Elections> list6 = new ArrayList<>();
	List<Elections> list7 = new ArrayList<>();
	
	List<Polling> list8 = new ArrayList<>();
	List<Polling> list9 = new ArrayList<>();
	
	User ur = new User((long) 105, "Suve", "suve@gmail.com", "GH757J7F", 21, "7010866068", "User", "12345");
	User ad = new User((long) 102, "Swee", "swetha@gmail.com", "AVH8979", 29, "8964321558", "admin", "123");
	User ur1 = new User((long) 101, "Shiva", "User", "Madurai", 98, "shiva@123", "huw", "hu34hi");
	User ur2 = new User((long) 104, "bjghj", "fbewv", "hello", 98, "shiva@123", "huw", "abc345");

	Party pr = new Party((long) 106, "DMK", "Sun");
	Party pr1 = new Party((long) 105, "PMK", "XYZ");
	Party pr2 = new Party((long) 104, "bjghj", "bjghj");

	Elections el = new Elections((long) 111, "President", "INC", "20-02-24");
	Elections el1 = new Elections((long) 111, "Rajsabha", "JD", "24-02-24");
	Elections el2 = new Elections((long) 104, "Parliment", "INC", "2024-02-24");

	Polling po = new Polling("HJ78FG7", "INC", (long) 14);
	// Polling po1 = new Polling((long) 104, "Parliment", "INC","2024-02-24");

	@Test
	@Order(1)
	void performUserLogin() {
		Login rs = lservice.login(ur2);
		ur2.equals(rs);

	}

	@Test
	@Order(2)
	void performAdminLogin() {

		Login rs = lservice.login(ur2);
		ur2.equals(rs);
	}

	@Test
	@Order(3)
	void performLoginFail() {
		Login rs = lservice.login(ur2);
		ur2.equals(rs);
	}

	@Test
	@Order(4)
	void performRegister() {
		val = true;
		res = uservice.Register(ur1);
		assertEquals(val, res);
	}


	@Test
	@Order(5)
	void performViewAllUsers() {
		list1 = uservice.getAll();
		list.add(ur);
		list.add(ad);
		list.add(ur1);
		list.equals(list1);
	}

    @Test
    @Order(6)
    void performInsertParty() {
  	  val1="Inserted";
  	  res1=pservice.Insert(pr);
  	  assertEquals(val1,res1);
    }

    @Test
    @Order(7)
    void performUpdateParty() {
  	  val1="Updated";
  	  res1=pservice.updateParty(pr1);
  	  assertEquals(val1,res1);
    }

	@Test
	@Order(8)
	void performDeleteParty() {
		val1 = "Party Deleted";
		res1 = pservice.deleteParty(105);
		assertEquals(val1, res1);
	}

	@Test
	@Order(9)
	void performViewAllParty() {
		list4 = pservice.getAll();
		list5.add(pr1);
		list5.equals(list4);
	}

	@Test
	@Order(10)
	void performInsertElection() {
		val1 = "Inserted";
		res1 = eservice.Insert(el);
		assertEquals(val1, res1);

	}

	@Test
	@Order(11)
	void performUpdateElection() {
		val1 = "Updated";
		res1 = eservice.updateElections(el);
		assertEquals(val1, res1);
	}

	@Test
	@Order(12)
	void performDeleteElection() {
		val1 = "Election Deleted";
		res1 = eservice.deleteElections((long) 104);
		assertEquals(val1, res1);
	}

	@Test
	@Order(13)

	void performViewAllElection() {
		list6 = eservice.getAll();
		list7.add(el1);
		list7.equals(list6);
	}
	
	@Test
	@Order(14)
	void performPollInsert() {
		val=true;
		res=poservice.Polling(po);
		assertEquals(val,res);
	}
	
	@Test
	@Order(15)
	
	void performViweAllPoll() {
		list8=poservice.getAll();
		list9.add(po);
		list9.equals(list8);
	}
	
	
	

}
