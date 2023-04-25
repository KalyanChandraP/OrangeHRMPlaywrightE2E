import { test } from "@playwright/test";
import { ElementsPageLocators } from "../pageObject/ElementsPageLocators";
import { BasePage } from "../basePage/basePage";

let elementsPageLocators: ElementsPageLocators;
elementsPageLocators = new ElementsPageLocators();

test.describe("DemoQA_Elements", async () => {

    test.beforeAll(async () => {
        await elementsPageLocators.beforeAllTest();
    });

    test("DemoQA_TextBox", async () => {
        await elementsPageLocators.clickOnElementsLink();
        await elementsPageLocators.performTextBoxOperations();
        await elementsPageLocators.performCheckBoxOperations();
        await elementsPageLocators.performRadioButtonOperations();
        await elementsPageLocators.performwebTablesOperations();
        await elementsPageLocators.verifyButtons();
        await elementsPageLocators.verifyLink();
        await elementsPageLocators.verifyBrokenLinks();
        await elementsPageLocators.verifyUploadAndDownloadFile();
        await elementsPageLocators.verifyDynamicProperties();
    });
});