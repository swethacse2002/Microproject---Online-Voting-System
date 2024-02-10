package com.ovs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class Party {
	
WebDriver driver;

 
	@BeforeClass
	public void initializer() {
		
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	
	
	
	
	@Test
	public void addParty() {
		
		driver.get("http://localhost:4200/admin");
	    driver.manage().window().setSize(new Dimension(516, 728));
	    driver.findElement(By.linkText("Party")).click();
	    driver.findElement(By.id("addparty")).click();
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
	    driver.findElement(By.name("partyId")).click();
	    driver.findElement(By.name("partyName")).click();
	    driver.findElement(By.name("partySymbol")).click();
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
		
		
		Party party=new Party();
		party.addParty();
		
	}

}

	
