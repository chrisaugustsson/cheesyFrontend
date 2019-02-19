import { browser, by, element } from 'protractor';

describe('End to end testing', function () {
  it('Should navigate to reports from nav-bar', function () {
    browser.get('http://localhost:4200/');
    browser.driver.manage().window().maximize();

    let allLinks = element.all(by.css('a'))
    expect(allLinks.count()).toEqual(4)
    expect(allLinks.get(2).getText()).toEqual("Redovisa")

    allLinks.get(2).click();

    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/reports");
  });

  it('Should go to Kmom01 using buttons on the screen', function () {
    browser.get('http://localhost:4200/reports');
    browser.driver.manage().window().maximize();
    let kmom01 = element(by.cssContainingText(".button", 'Kmom01'));

    expect(kmom01.getText()).toEqual("Kmom01")

    kmom01.click();

    expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/reports/kmom01");
  });

  it('Should show User not found, when trying to login.', function () {
    browser.get('http://localhost:4200/login');
    browser.driver.manage().window().maximize();

    let emailInput = element(by.id("email"));
    let passwordInput = element(by.id("password"));
    let submit = element(by.css("button"));

    emailInput.sendKeys("wontwork");
    passwordInput.sendKeys("wrongpassowrd");
    submit.click();

    let message = element(by.css(".is-danger"));

    expect(message.getText()).toEqual("User not found");

  });
});