package com.ovs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ViewResult {
	
	WebDriver driver;

	 
	@BeforeClass
	public void initializer() {
		
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void Result() {
		driver.get("http://localhost:4200/User");
	    driver.manage().window().setSize(new Dimension(1382, 744));
	    driver.findElement(By.xpath("//button[@type=\'button\']")).click();
	    driver.findElement(By.xpath("(//button[@type=\'button\'])[2]")).click();
	    driver.findElement(By.cssSelector(".btn-primary:nth-child(1)")).click();
	    //driver.findElement(By.name("ok")).click();
	    //driver.findElement(By.cssSelector(".col-9")).click();
	}

	public static void main(String[] args) {
		
		ViewResult vr=new ViewResult();
		vr.Result();

	}

}
