package com.ovs.test;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class Election {
	
WebDriver driver;
	

@BeforeClass
public void initializer() {
	
	System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	driver = new ChromeDriver();
}

@Test
public void election()
{
	 driver.get("http://localhost:4200/admin");
	    driver.manage().window().setSize(new Dimension(516, 728));
	    driver.findElement(By.id("elect")).click();
	    driver.findElement(By.id("addelection")).click();
	    driver.findElement(By.name("electionId")).click();
	    driver.findElement(By.name("electionId")).sendKeys("102");
	    driver.findElement(By.name("electionName")).click();
	    driver.findElement(By.name("electionName")).sendKeys("President");
	    driver.findElement(By.name("partyName")).click();
	    {
	      WebElement dropdown = driver.findElement(By.name("partyName"));
	      dropdown.findElement(By.xpath("//option[. = 'BJP']")).click();
	    }
	    driver.findElement(By.name("date")).click();
	    driver.findElement(By.name("date")).sendKeys("2024-02-22");
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
	    driver.findElement(By.cssSelector(".mdc-button__label")).click();
	  }

	public static void main(String[] args) {
		
		Election ele=new Election();
		ele.election();
		
	}
	


}
