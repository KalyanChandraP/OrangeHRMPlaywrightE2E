export class LeavePageLocators {

    leaveLink : string = "//span[text()='Leave']";
    applyLink : string  = "//a[text()='Apply']";
    applyLeaveTitle : string = "//h6[text()='Apply Leave']";
    leaveTypeText : string  = "//label[text()='Leave Type']";
    leaveTypeDropDown : string = ".oxd-select-text-input";
    leaveBalanceText : string = "//label[text()='Leave Balance']";
    fromDateText = "//label[text()='From Date']";
    toDateText ="//label[text()='To Date']";
    FormDataTextBox = "//i[@class='oxd-icon bi-calendar oxd-date-input-icon']/preceding::div[@class='oxd-date-input']";
    toDateTextBox = "//label[text()='To Date']/following::input[@class='oxd-input oxd-input--active']";
    commentsText= "//label[text()='Comments']";
    commentsTextBox  = "//label[text()='Comments']/following::textarea";
    applyButton = "//button[text()=' Apply ']";
    myLeave = "//a[text()='My Leave']";
    myLeaveListTitle = "//h5[text()='My Leave List']";
    myLeave_ShowLeaveWithStatusText = "//label[text()='Show Leave with Status']";
    myLeave_ShowLeaveWithStatusDropDown = "//label[text()='Show Leave with Status']//following::div[@class='oxd-select-text--after'][1]";
    myLeave_LeaveTypeText = "//label[text()='Leave Type']";
    myLeave_SearchButton = "//button[text()=' Search ']";
    myLeave_ResetButton = "//button[text()=' Reset ']";    
    entitlementsLink= "//span[text()='Entitlements ']";
    addEntiltementsLink = "//a[text()='Add Entitlements']";
    addLeaveEntitlementTitle = "//p[text()='Add Leave Entitlement']";
    addToText ="//label[text()='Add to']";
    employeeNameText = "//label[text()='Employee Name']";
    employeeNameTextBox = "//label[text()='Employee Name']//following::input[contains(@placeholder,'Type for hints')]";
    entitlementLeaveTypeDropdown = "//label[text()='Leave Type']//parent::div//following-sibling::div//div[@class='oxd-select-wrapper']//div[@class='oxd-select-text--after']/i";
    entitlementLeavePeriodDropdown = "//label[text()='Leave Period']//parent::div//following-sibling::div//div[@class='oxd-select-wrapper']//div[@class='oxd-select-text--after']/i";
    entitlementTextBox = "//label[text()='Entitlement']//parent::div//following-sibling::div//input";
    entitlementSaveButton = "//button[text()=' Save ']";
    entitlementCancelButton = "//button[text()=' Cancel ']";
    leaveEntitlementsTitle = "//h5[text()='Leave Entitlements']";
    leaveTypeOption = "//span[text()='CAN - Bereavement']";
    employeeEntitlementsLink = "//a[text()='Employee Entitlements']";
    empEntitleLeavePeriodDropDown = "//label[text()='Leave Period']//parent::div//following-sibling::div//div[@class='oxd-select-wrapper']//div[@class='oxd-select-text--after']/i";
    empEntitleSearchButton = "//button[text()=' Search ']";
    }

    