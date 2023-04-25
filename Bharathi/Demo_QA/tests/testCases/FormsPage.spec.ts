import { test } from "@playwright/test";
import { FormsPageLocators } from "../pageObject/FormsPageLocators";

let formsPageLocators: FormsPageLocators;
formsPageLocators = new FormsPageLocators();

test.describe("DemoQA_Forms", async () => {

    test.beforeAll(async () => {
        await formsPageLocators.beforeAllTest();
    });

    test("DemoQA_Practice forms", async () => {
        await formsPageLocators.clickOnPracticeForms();
        await formsPageLocators.practiceForm();
    });
});