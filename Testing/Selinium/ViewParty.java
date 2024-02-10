package com.ovs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ViewParty {

	WebDriver driver;

	 
	@BeforeClass
	public void initializer() {
		
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void viewParties() {
		
		driver.get("http://localhost:4200/admin");
	    driver.manage().window().setSize(new Dimension(1382, 744));
	    driver.findElement(By.id("par")).click();
	    driver.findElement(By.id("view")).click();
	}
	public static void main(String[] args) {
		
		ViewParty vp=new ViewParty();
		vp.viewParties();
		
	}

}
