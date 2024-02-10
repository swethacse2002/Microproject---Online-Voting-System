package com.ovs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ViewElection {

	WebDriver driver;

	 
	@BeforeClass
	public void initializer() {
		
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}

	@Test
	
	public void viewEditElect() {
		driver.get("http://localhost:4200/admin");
	    driver.manage().window().setSize(new Dimension(1382, 744));
	    driver.findElement(By.id("elect")).click();
	    driver.findElement(By.linkText("View all election")).click();
	    driver.findElement(By.linkText("Edit")).click();
	    driver.findElement(By.cssSelector(".form-control:nth-child(2)")).click();
	    driver.findElement(By.cssSelector(".form-control:nth-child(5)")).click();
	    driver.findElement(By.cssSelector(".form-control:nth-child(5)")).sendKeys("Parliment");
	    driver.findElement(By.cssSelector(".select")).click();
	    {
	      WebElement dropdown = driver.findElement(By.cssSelector(".select"));
	      dropdown.findElement(By.xpath("//option[. = 'BJP']")).click();
	    }
	    driver.findElement(By.cssSelector(".ng-untouched")).click();
	    driver.findElement(By.cssSelector(".ng-untouched")).sendKeys("2024-02-13");
	    {
	      WebElement element = driver.findElement(By.cssSelector(".mat-mdc-button-touch-target"));
	      Actions builder = new Actions(driver);
	      builder.moveToElement(element).perform();
	    }
	    {
	      WebElement element = driver.findElement(By.tagName("body"));
	      Actions builder = new Actions(driver);
	      builder.moveToElement(element, 0, 0).perform();
	    }
	    {
	      WebElement element = driver.findElement(By.cssSelector(".mdc-button__label"));
	      Actions builder = new Actions(driver);
	      builder.moveToElement(element).perform();
	    }
	    driver.findElement(By.cssSelector(".mdc-button__label")).click();
	    {
	      WebElement element = driver.findElement(By.tagName("body"));
	      Actions builder = new Actions(driver);
	      builder.moveToElement(element, 0, 0).perform();
	    }
	    driver.findElement(By.cssSelector(".btn-secondary")).click();
	  }
	
	
	
	public static void main(String[] args) {

		ViewElection vee=new ViewElection();
		vee.viewEditElect();
	}

}
