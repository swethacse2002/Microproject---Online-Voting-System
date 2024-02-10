package com.ovs.test;

import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumTestRunner {
	
	WebDriver driver;
	
	public void initializer() {
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	}
	
	@Test
	public void loadGooglePage() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
	}
	@Test
	public void userLogin() {
		driver.get("http://localhost:4200/login");
		driver.findElement(By.name("login")).click();
		driver.findElement(By.name("emailId")).sendKeys("admin@gmail.com");
		driver.findElement(By.id("password")).sendKeys("12345");
//		driver.findElement(By.name("Login")).click();
//		System.out.println(driver.getTitle());
//		
	driver.close();
	}
	
	@Test
	public void adminLogin() {
		driver.get("http://localhost:4200/login");
		driver.findElement(By.name("login")).click();
		driver.findElement(By.name("emailId")).sendKeys("swe@gmail.com");
		driver.findElement(By.id("password")).sendKeys("12345");
//		driver.findElement(By.name("Login")).click();
//		System.out.println(driver.getTitle());
//		
		driver.close();
	}
	
	@Test
	public void register() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
		driver.findElement(By.name("login")).click();
		driver.findElement(By.name("reg")).click();	
		driver.findElement(By.name("userName")).sendKeys("ShaSha");
		driver.findElement(By.name("voterId")).sendKeys("GH56R45T");
		driver.findElement(By.name("emailId")).sendKeys("sha@gmail.com");
		driver.findElement(By.name("password")).sendKeys("R45T");
		driver.findElement(By.name("age")).sendKeys("22");
		driver.findElement(By.name("mobile")).sendKeys("7010866068");
		driver.findElement(By.name("userId")).sendKeys("56");
		driver.findElement(By.name("userType")).sendKeys("User");
//		driver.findElement(By.id("register")).click();
//		System.out.println(driver.getTitle());
		driver.close();
		
	
		}
	public static void main(String[] args) {
		SeleniumTestRunner reg= new SeleniumTestRunner();
		reg.userLogin();
		reg.adminLogin();
		reg.register();
		
	}

}
