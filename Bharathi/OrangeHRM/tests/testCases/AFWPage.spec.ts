import { test } from "@playwright/test";
import { AFWPageLocators } from "../pageObject/AFWPagesLocators";
import { BasePage } from "../basePage/basePage";

let afwPageLocators: AFWPageLocators;
afwPageLocators = new AFWPageLocators();

test.describe("Alert Frame Windows", async () => {

    test.beforeAll(async () => {
        await afwPageLocators.beforeAllTest();
    });

    test("Browser window", async () => {
        await afwPageLocators.clickOnAFWLink();
        await afwPageLocators.verifyBrowserWindows();

    })


})
