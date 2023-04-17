import { test, Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../e2e/pageObjects/LoginPageLocators";
import { BasePage } from "../e2e/base/BasePage";
import CONSTANTS from "../e2e/utils/Constants.json"


let basePage: BasePage;
let loginPage : LoginPageLocators; 
let page : Page;


test.beforeAll(async({browser}) => {
     page = await browser.newPage();    
     loginPage  = new LoginPageLocators();
     basePage = new BasePage(page);
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await page.waitForTimeout(5000); // Wait for 5 seconds
     await expect(page).toHaveURL(/login/);   
     console.log("Routed to OrangeHRM");
     
});

test.describe("Login functionality", () => {

    test("Verify Logo", async() =>{
        await basePage.isVisible(loginPage.orangeHRMLogo);
        await basePage.isDisplayed(loginPage.loginLogo);
    });

    test("Verify visibility of username and password text" , async() => {
        await basePage.isVisible(loginPage.userName);
        await basePage.isVisible(loginPage.password);
    });

    test("Verify visibility of username  and password textboxes" , async() => {
        await basePage.isVisible(loginPage.usernameTextBox);
        await basePage.isVisible(loginPage.passwordTextBox);
    });

    test("Verify visibility of login and forgotpassword links" , async() => {
        await basePage.isVisible(loginPage.loginButton);
        await basePage.isVisible(loginPage.forgotPasswordLink);
    });

    test("Verify user is able to enter username" , async() => {
        await basePage.isVisible(loginPage.usernameTextBox);
        await basePage.enterText(loginPage.usernameTextBox , CONSTANTS.credentials.username);
        console.log("Username : " +CONSTANTS.credentials.username);
    });


    test("Verify user is able to enter password" , async() => {
        await basePage.isVisible(loginPage.passwordTextBox);
        await basePage.enterText(loginPage.passwordTextBox , CONSTANTS.credentials.password);
        console.log("Password : " +CONSTANTS.credentials.password);
    });

    test("Verify user is able to click on login button" , async() => {
        await basePage.isVisible(loginPage.usernameTextBox);
        await basePage.enterText(loginPage.usernameTextBox , CONSTANTS.credentials.username);
        await console.log("Username : " +CONSTANTS.credentials.username);
        await basePage.isVisible(loginPage.passwordTextBox);
        await basePage.enterText(loginPage.passwordTextBox , CONSTANTS.credentials.password);
        await console.log("Password : " +CONSTANTS.credentials.password);
        await basePage.click(loginPage.loginButton);
        await console.log("Clicked on Login Button");
    });

    test("Verify user is able to click on forgot password button" , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password Button");
    });

    test("Verify user is able to route to reset password page " , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password Button");
        await basePage.isVisible(loginPage.resetPasswordTitle);
        await console.log("Routed to reset password page");
    });

    test("Verify visibility of reset password page useraname text " , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password link");
        await basePage.isVisible(loginPage.resetPasswordTitle);
        await console.log("Routed to reset password page");
        await basePage.isVisible(loginPage.usernameResetPage);
        await console.log("Username text is available in reset password page");
    });

    test("Verify visibility of reset password page cancel button" , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password link");
        await basePage.isVisible(loginPage.resetPasswordTitle);
        await console.log("Routed to reset password page");
        await basePage.enterText(loginPage.usernameTextBox, CONSTANTS.credentials.username);
        await basePage.isVisible(loginPage.cancelButton);
        await console.log("Cancel button is visible");
    });

    test("Verify visibility of reset password page reset button" , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password Button");
        await basePage.isVisible(loginPage.resetPasswordTitle);
        await console.log("Routed to reset password page");
        await basePage.isVisible(loginPage.resetPasswordButton);
        await console.log("Reset button is visible");
    });


    test("Verify user is able to click on reset password page cancel button" , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password Button");
        await basePage.isVisible(loginPage.resetPasswordTitle);
        await console.log("Routed to reset password page");
        await basePage.enterText(loginPage.usernameTextBox, CONSTANTS.credentials.username);
        await basePage.isVisible(loginPage.cancelButton);
        await console.log("Cancel button is visible");
        await basePage.click(loginPage.cancelButton);
        await console.log("clicked on Cancel button");

    });

    test("Verify user is able to click on reset password button" , async() => {
        await basePage.isVisible(loginPage.forgotPasswordLink);
        await basePage.click(loginPage.forgotPasswordLink);
        await console.log("Clicked on forgot password Button");
        await basePage.isVisible(loginPage.resetPasswordTitle);
        await console.log("Routed to reset password page");
        await basePage.enterText(loginPage.usernameTextBox, CONSTANTS.credentials.username);
        await basePage.isVisible(loginPage.resetPasswordButton);
        await console.log("Reset button is visible");
        await basePage.click(loginPage.resetPasswordButton);
        await console.log("clicked on reset password button");
    });
});

test.afterAll(async({browser})=>{
    await browser.close();
    });
    