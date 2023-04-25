import { BasePage } from "../basePage/basePage";
import CONSTANTS from "../utils/Constants.json"

let basePage: BasePage;
basePage = new BasePage();

export class FormsPageLocators {

  formsLink = "//h5[text()='Forms']";
  practiceForms = "//span[text()='Practice Form']";
  formPageTitle = "//h5[text()='Student Registration Form']";
  firstNameInputBox = "#firstName";
  lastNameTextBox = "#lastName";
  emailTextBox = "#userEmail";
  mobileNumberTextBox = "//input[@id='userNumber']";
  dobTextBox = "#dateOfBirthInput";
  subjectTextBox = "//div[@class='subjects-auto-complete__control css-yk16xz-control']";
  currentAddress = "//textarea[@id='currentAddress']";
  stateDropdown = "(//div[@class=' css-1wy0on6']//div)[1]";
  state = "//div[text()='NCR']";
  city = "//div[text()='Delhi']";
  chooseFile = "//input[@id='uploadPicture']";
  cityDropdown = "(//div[@class=' css-1wy0on6']//div)[2]";
  submitButton = "//button[text()='Submit']";
  closeButton = "//button[text()='Close']";



  async beforeAllTest() {
    await basePage.beforeTest();
  }

  async clickOnPracticeForms() {
    await basePage.clickOnElement(this.formsLink)
    await basePage.clickOnElement(this.practiceForms);
  }


  async practiceForm() {
    await basePage.enterText(this.firstNameInputBox, CONSTANTS.DemoQA_Forms.firstname);
    await basePage.enterText(this.lastNameTextBox, CONSTANTS.DemoQA_Forms.lastname);
    await basePage.enterText(this.emailTextBox, CONSTANTS.DemoQA_Forms.email)
    await basePage.selectGender(CONSTANTS.DemoQA_Forms.gender);
    await basePage.enterText(this.mobileNumberTextBox, CONSTANTS.DemoQA_Forms.mobile);
    await basePage.enterText(this.dobTextBox, CONSTANTS.DemoQA_Forms.dob);
    await basePage.clickEnter();
    await basePage.selectHobbies(CONSTANTS.DemoQA_Forms.hobbies);
    await basePage.uploadFile(this.chooseFile);
    await basePage.enterText(this.currentAddress, CONSTANTS.DemoQA_Forms.currentAddress);
    await basePage.clickOnElement(this.stateDropdown);
    await basePage.clickOnElement(this.state);
    await basePage.clickOnElement(this.cityDropdown);
    await basePage.clickOnElement(this.city);
    await basePage.clickOnElement(this.submitButton);
    await basePage.clickOnElement(this.closeButton);
  }



}