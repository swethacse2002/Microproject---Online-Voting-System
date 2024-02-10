package com.ovs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class Polling {
	
	WebDriver driver;

	 
	@BeforeClass
	public void initializer() {
		
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	@Test
	public void poll() {
		driver.get("http://localhost:4200/User");
	    driver.manage().window().setSize(new Dimension(1382, 744));
	    driver.findElement(By.cssSelector(".form-control")).click();
	    driver.findElement(By.cssSelector(".form-control")).sendKeys("HJu678");
	    driver.findElement(By.id("exampleRadios2")).click();
	    driver.findElement(By.cssSelector(".btn:nth-child(8)")).click();
	    //driver.findElement(By.cssSelector("#staticBackdrop .btn")).click();
	  }
	

	public static void main(String[] args) {
		
		Polling polling=new Polling();
		polling.poll();

		

	}

}
