import { test, Page } from "@playwright/test";
import { LeavePageLocators } from "../e2e/pageObjects/LeavePageLocators";
import { LoginPageLocators } from "../e2e/pageObjects/LoginPageLocators";
import { BasePage } from "../e2e/base/BasePage";
import CONSTANTS from "../e2e/utils/Constants.json"

let basePage: BasePage;
let leavePage: LeavePageLocators;
let loginPage: LoginPageLocators;
let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    leavePage = new LeavePageLocators();
    loginPage = new LoginPageLocators();
    basePage = new BasePage(page);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000); // Wait for 5 seconds
    await console.log("Routed to OrangeHRM");
});

test.describe("Orange HRM Leave Module", async () => {
    test("Login", async () => {
        await basePage.isVisible(loginPage.usernameTextBox);
        await basePage.enterText(loginPage.usernameTextBox, CONSTANTS.credentials.username);
        await console.log("Username : " + CONSTANTS.credentials.username);
        await basePage.isVisible(loginPage.password);
        await basePage.enterText(loginPage.passwordTextBox, CONSTANTS.credentials.password);
        await console.log("Password : " + CONSTANTS.credentials.password);
        await basePage.click(loginPage.loginButton);
    });


    test("Verify the user is able to see Apply Leave page and components", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.applyLink);
        await basePage.click(leavePage.applyLink);
        await console.log("Clicked on apply link");
        await basePage.isVisible(leavePage.applyLeaveTitle);
        await console.log("Apply leave section is visible");
        await basePage.isVisible(leavePage.leaveTypeText);
        await basePage.isVisible(leavePage.leaveTypeDropDown);
        await basePage.isVisible(leavePage.leaveBalanceText);
        await basePage.isVisible(leavePage.fromDateText);
        await basePage.isVisible(leavePage.toDateText);
        await basePage.isVisible(leavePage.FormDataTextBox);
        await basePage.isVisible(leavePage.toDateTextBox);
        await basePage.isVisible(leavePage.commentsText);
        await basePage.isVisible(leavePage.commentsTextBox);
        await basePage.isVisible(leavePage.applyButton);
    });

    test("Verify the user is able to see My leave list components", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.myLeave);
        await basePage.click(leavePage.myLeave);
        await basePage.isVisible(leavePage.myLeaveListTitle);
        await basePage.isVisible(leavePage.fromDateText);
        await basePage.isVisible(leavePage.FormDataTextBox);
        await basePage.isVisible(leavePage.toDateText);
        await basePage.isVisible(leavePage.toDateTextBox);
        await basePage.isVisible(leavePage.myLeave_ShowLeaveWithStatusText);
        await basePage.isVisible(leavePage.myLeave_ShowLeaveWithStatusDropDown);
        await basePage.isVisible(leavePage.leaveTypeText);
        await basePage.isVisible(leavePage.leaveTypeDropDown);
    });

    test("Verify the user is able to see Reset functionality", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.myLeave);
        await basePage.click(leavePage.myLeave);
        await basePage.isVisible(leavePage.myLeave_ResetButton);
    });

    test("Verify the user is able to see Search functionality", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.myLeave);
        await basePage.click(leavePage.myLeave);
        await basePage.isVisible(leavePage.myLeave_SearchButton);
    });

    test("Verify the user is able to see Add Entitlements Components", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.entitlementsLink);
        await basePage.click(leavePage.entitlementsLink);
        await basePage.isVisible(leavePage.addEntiltementsLink);
        await basePage.click(leavePage.addEntiltementsLink);
        await basePage.isVisible(leavePage.addLeaveEntitlementTitle);
        await basePage.isVisible(leavePage.addToText);
        await basePage.isVisible(leavePage.employeeNameText);
        await basePage.isVisible(leavePage.employeeNameTextBox);
        await basePage.isVisible(leavePage.leaveTypeText);
        await basePage.isVisible(leavePage.entitlementLeaveTypeDropdown)
        await basePage.isVisible(leavePage.entitlementLeavePeriodDropdown);
        await basePage.isVisible(leavePage.entitlementTextBox);
        await basePage.isVisible(leavePage.entitlementSaveButton);
        await basePage.isVisible(leavePage.entitlementCancelButton);

    });

    test("Verify the user is able to Perform Cancel functionality", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.entitlementsLink);
        await basePage.click(leavePage.entitlementsLink);
        await basePage.isVisible(leavePage.addEntiltementsLink);
        await basePage.click(leavePage.addEntiltementsLink);
        await basePage.isVisible(leavePage.entitlementCancelButton);
        await basePage.click(leavePage.entitlementCancelButton);
        await console.log("clicked on cancel button");
        await basePage.isVisible(leavePage.leaveEntitlementsTitle);
        await console.log("Cancellled add entitlement");
    });

    test("Verify the user is able to Perform Save functionality", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.entitlementsLink);
        await basePage.click(leavePage.entitlementsLink);
        await basePage.isVisible(leavePage.addEntiltementsLink);
        await basePage.click(leavePage.addEntiltementsLink);
        await basePage.isVisible(leavePage.addLeaveEntitlementTitle);
        await basePage.isVisible(leavePage.addToText);
        await basePage.enterText(leavePage.employeeNameTextBox, CONSTANTS.Testdata.employeename);
        await basePage.click(leavePage.entitlementEmployeeName);
        await basePage.isVisible(leavePage.entitlementLeavePeriodDropdown);
        await basePage.click(leavePage.entitlementLeaveTypeDropdown);
        await basePage.click(leavePage.leaveTypeOption);
        await basePage.enterText(leavePage.entitlementTextBox, CONSTANTS.Testdata.entitlements);
        await basePage.click(leavePage.entitlementSaveButton);
    });

    test("Verify the user is able to see Employee entitlement components", async () => {
        await basePage.isVisible(leavePage.leaveLink);
        await basePage.click(leavePage.leaveLink);
        await console.log("Clicked on leave link");
        await basePage.isVisible(leavePage.entitlementsLink);
        await basePage.click(leavePage.entitlementsLink);
        await basePage.isVisible(leavePage.employeeEntitlementsLink);
        await basePage.click(leavePage.employeeEntitlementsLink);
        await console.log("Clicked on Employee Entitlements link");
        await basePage.isVisible(leavePage.leaveEntitlementsTitle);
        await basePage.isVisible(leavePage.employeeNameText);
        await basePage.isVisible(leavePage.employeeNameTextBox);
        await basePage.isVisible(leavePage.myLeave_LeaveTypeText);
        await basePage.isVisible(leavePage.entitlementLeaveTypeDropdown);
        await basePage.isVisible(leavePage.empEntitleLeavePeriodDropDown);
        await basePage.isVisible(leavePage.empEntitleSearchButton);
    });


});

test.afterAll(async ({ browser }) => {
    await browser.close();
});