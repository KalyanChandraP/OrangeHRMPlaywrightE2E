import { expect } from "@playwright/test";
import { BasePage } from "../basePage/basePage";
import CONSTANTS from "../utils//Constants.json"

let basePage: BasePage;
basePage = new BasePage();

export class ElementsPageLocators {
    //textbox
    elementsLink = "//h5[text()='Elements']";
    elementPageTitle = "//div[@class='header-text' and text()='Elements']";
    elementsList = '//div[@class="element-list collapse show"]//ul//li';
    textBox = "//span[text()='Text Box']";
    checkBox = "//span[text()='Check Box']";
    radioButton = "//span[text()='Radio Button']";
    webTables = "//span[text()='Web Tables']";
    buttons = "//span[text()='Buttons']";
    links = "//span[text()='Links']";
    brokenLinks = "//span[text()='Broken Links - Images']";
    uploadAndDownload = "//span[text()='Upload and Download']";
    dynamicProperties = "//span[text()='Dynamic Properties']";
    fullnameText = "//label[text()='Full Name']";
    fullnameTextBox = "#userName";
    email = '//label[text()="Email"]';
    emailTextBox = "#userEmail";
    currentAddress = "//label[text()='Current Address']";
    currentAddressTextBox = "#currentAddress";
    permanentAddress = "//label[text()='Permanent Address']";
    permanentAddressTextBox = "#permanentAddress";
    submitButton = "//button[text()='Submit']";
    output = "//div[@id='output']/div/p";
    //checkbox
    homeText = "//span[text()='Home']";
    expandButton = "//button[@title='Expand all']";
    collapseButton = "//button[@title='Collapse all']";
    desktopCheckbox = "//span[text()='Desktop']//preceding-sibling::span[@class='rct-checkbox']//*[@class='rct-icon rct-icon-uncheck']";
    documentsCheckBox = "//span[text()='Documents']//preceding-sibling::span[@class='rct-checkbox']//*[@class='rct-icon rct-icon-uncheck']";
    downloadsCheckBox = "//span[text()='Downloads']//preceding-sibling::span[@class='rct-checkbox']//*[@class='rct-icon rct-icon-uncheck']";
    //radioButton
    radioButtonTitle = "//div[text()='Radio Button']";
    doYouLikeText = "//div[text()='Do you like the site?']";
    yesRadioButton = "//label[@for='yesRadio' and text()='Yes']";
    noRadioButton = "//label[@for='noRadio' and text()='No']";
    impressiveRadioButton = "//label[@for='impressiveRadio' and text()='Impressive']";
    successMessage = "//span[@class='text-success']";
    //web tables
    webTablesTitle = "//div[text()='Web Tables']";
    addButton = "//button[text()='Add']";
    registrationFormTitle = "//div[text()='Registration Form']";
    firstNameTextBox = "//input[@id='firstName']";
    lastNameTextBox = "//input[@id='lastName']";
    emailBox = "//input[@id='userEmail']";
    age = "//input[@id='age']";
    salary = "//input[@id='salary']";
    department = "//input[@id='department']";
    tableRows = "//div[@role='rowgroup']";
    searchBox = "//input[@id='searchBox']";
    searchIcon = "//span[@class='input-group-text']//*[contains(@xmlns,'http://www.w3.org/')]";
    editIcon = "//span[@title='Edit']";
    deleteIcon = "//span[@title='Delete']";

    //Buttons
    doubleClickMeButton = "//button[text()='Double Click Me']";
    doubleClickText = "//p[text()='You have done a double click']";
    rightClickMeButton = "//button[text()='Right Click Me']";
    rightClickText = "//p[text()='You have done a right click']";
    clickButton = "//button[text()='Click Me']";
    clickButtonText = "//p[text()='You have done a dynamic click']";
    successMessageAfterClick = "//div[@class='mt-4']/following::p";

    //Links
    newTabLinkTitle = "//strong[text()='Following links will open new tab']";
    homeLink = "//a[@id='simpleLink' and text()='Home']";
    homeDynamicLink = "//a[@id='dynamicLink' and contains(@href,'demoqa.com')]";
    apiLinkTitle = "//strong[text()='Following links will send an api call']";
    badRequestLink = "#bad-request";
    badRequestResponse = "//b[contains(text(),'Bad Request')]";
    toolsQATitle = "//img[contains(@src,'/images/Toolsqa.jpg')]";


    //brokenLinks-images
    validImageTitle = "//p[text()='Valid image']";
    validImage = "//p[text()='Valid image']/following::img[contains(@src,'Toolsqa.jpg')]";
    brokenImageTitle = "//p[text()='Broken image']";
    brokenImage = "//p[text()='Broken image']/following::img[contains(@src,'Toolsqa_1.jpg')]";
    validLinkTitle = "//p[text()='Valid Link']";
    validLink = "//p[text()='Valid Link']/following::a[contains(text(),'Click Here for Valid Link')]";
    validLinkHomePage = "//img[contains(@src,'/images/Toolsqa.jpg')]";
    brokenLinkTitle = "//p[text()='Broken Link']";
    brokenLink = "//p[text()='Broken Link']/following::a[contains(text(),'Click Here for Broken Link')]";
    statusCodeTitle = "//h3[text()='Status Codes']";

    //upload and download
    uploadAndDownloadTitle = "//div[text()='Upload and Download']";
    selectFileText = "//label[text()='Select a file']";
    uploadButton = "//input[@id='uploadFile']";
    downloadButton = "//a[@id='downloadButton']";

    //Dynamic Properties
    dynamicPropertiesTitle = "//div[text()='Dynamic Properties']";
    enableAfterButton = "//button[@id='enableAfter' and text()='Will enable 5 seconds']";
    colorChangeButton = "//button[@id='colorChange' and text()='Color Change']";
    visibleAfterButton = "//button[@id='visibleAfter' and text()='Visible After 5 Seconds']";
    colorChangeButtonAfterWait = "//button[@class='mt-4 text-danger btn btn-primary']";

    async beforeAllTest() {
        await basePage.beforeTest();
    }

    async clickOnElementsLink() {
        await basePage.clickOnElement(this.elementsLink);
    }

    async performTextBoxOperations() {
        await basePage.clickOnElement(this.textBox);
        await basePage.enterText(this.fullnameTextBox, CONSTANTS.DemoQA_TestData.fullname);
        await basePage.enterText(this.emailTextBox, CONSTANTS.DemoQA_TestData.email);
        await basePage.enterText(this.currentAddressTextBox, CONSTANTS.DemoQA_TestData.currentAddress);
        await basePage.enterText(this.permanentAddressTextBox, CONSTANTS.DemoQA_TestData.permanentAddress);
        await basePage.getText(this.submitButton)
        await basePage.clickOnElement(this.submitButton);
        // await basePage.listOfElements(this.output)
    }

    async performCheckBoxOperations() {
        await basePage.clickOnElement(this.checkBox);
        await basePage.isElementVisible(this.homeText);
        await basePage.clickOnElement(this.expandButton);
        await basePage.checkRadioButton(this.desktopCheckbox);
        await basePage.checkRadioButton(this.documentsCheckBox);
        await basePage.checkRadioButton(this.downloadButton);
        await basePage.clickOnElement(this.collapseButton);
    }

    async performRadioButtonOperations() {
        await basePage.clickOnElement(this.radioButton);
        await basePage.isElementVisible(this.radioButtonTitle);
        await basePage.checkRadioButton(this.yesRadioButton);
        await basePage.getText(this.successMessage)
        await basePage.checkRadioButton(this.noRadioButton);
        await basePage.getText(this.successMessage)
        await basePage.checkRadioButton(this.impressiveRadioButton);
        await basePage.getText(this.successMessage)

    }

    async performwebTablesOperations() {
        await basePage.clickOnElement(this.webTables);
        await basePage.isElementVisible(this.webTablesTitle);
        await basePage.clickOnElement(this.addButton);
        await basePage.isElementVisible(this.registrationFormTitle);
        await basePage.enterText(this.firstNameTextBox, CONSTANTS.DemoQA_TestData.firstname);
        await basePage.enterText(this.lastNameTextBox, CONSTANTS.DemoQA_TestData.lastname);
        await basePage.enterText(this.emailBox, CONSTANTS.DemoQA_TestData.webtableemail);
        await basePage.enterText(this.age, CONSTANTS.DemoQA_TestData.age);
        await basePage.enterText(this.salary, CONSTANTS.DemoQA_TestData.salary);
        await basePage.enterText(this.department, CONSTANTS.DemoQA_TestData.department);
        await basePage.clickOnElement(this.submitButton);
        await basePage.enterText(this.searchBox, CONSTANTS.DemoQA_TestData.fullname);
        await basePage.clickOnElement(this.searchIcon);
        await basePage.searchNameInWebTable(CONSTANTS.DemoQA_TestData.fullname);
        await basePage.clickOnElement(this.editIcon);
      
    }

    async verifyButtons() {
        await basePage.clickOnElement(this.buttons);
        await basePage.doubleClick(this.doubleClickMeButton, this.successMessageAfterClick);
        await basePage.rightClick(this.rightClickMeButton, this.successMessageAfterClick);
        await basePage.clickAndGetText(this.clickButton, this.successMessageAfterClick);
    }


    async verifyLink() {
        await basePage.clickOnElement(this.links);
        await basePage.isElementVisible(this.homeText);
        await basePage.clickOnElement(this.homeLink);
        await basePage.moveToNewTab();
           }

    async verifyBrokenLinks() {
        await basePage.clickOnElement(this.brokenLinks);
        await basePage.isElementVisible(this.validImageTitle);
        await basePage.identifyBrokenLink();
    }

    async verifyUploadAndDownloadFile() {
        await basePage.clickOnElement(this.uploadAndDownload);
        await basePage.isElementVisible(this.uploadAndDownloadTitle);
         await basePage.uploadFile(this.uploadButton);
        await basePage.downloadFile(this.downloadButton);
    }

    async verifyDynamicProperties() {
        await basePage.clickOnElement(this.dynamicProperties);
        await basePage.isElementVisible(this.dynamicPropertiesTitle);
        await basePage.isElementEnabled(this.colorChangeButton);
       expect(await basePage.isElementEnabled(this.colorChangeButtonAfterWait));
       console.log("Color Changed");       
    }

}

















