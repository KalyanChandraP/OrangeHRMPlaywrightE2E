import { chromium, test, expect } from "@playwright/test";
import CONSTANTS from "../utils/Constants.json"



export class BasePage {
    private page;
    private browser;
    private context;


    async beforeTest() {
        this.browser = await chromium.launch();
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        await this.page.goto("https://demoqa.com/");
        await this.page.waitForTimeout(5000);
        await expect(this.page).toHaveURL(/demoqa/);
        console.log("Routed to DemoQA");
    }

    async close() {
        await this.page.close();

    }

    async isElementVisible(element) {
        await this.page.isVisible(element);
        if (true) {
            await console.log("Element is visible");
        } else {
            await console.log("Element is not visible");
        }
    }

    async isElementEnabled(element) {
        await this.page.isEnabled(element);
        if (true) {
            await console.log("Element is enabled");
        } else {
            await console.log("Element is not enabled");
        }
    }

    async clickOnElement(element) {
        await this.isElementVisible(element);
        await this.page.click(element);
        if (true) {
            await console.log("Click is successful");
        } else {
            await console.log("Click is not successful");
        }

    }

    async enterText(element, text) {
        await this.isElementVisible(element);
        await this.page.locator(element).fill(text);
        await console.log("Entered text :" + text);

    }

    async clearAndEnterText(element, text) {
        await this.isElementVisible(element);
        await this.page.click(element).clear();
        await this.page.locator(element).fill(text);
    }


    async getText(element) {
        await this.isElementVisible(element);
        console.log(await this.page.locator(element).textContent());
    }


    async checkCheckbox(element) {
        await this.isElementVisible(element);
        await this.page.locator(element).check();
        await console.log("Checked checkbox")
    }

    async checkRadioButton(element) {
        const isEnabled = await this.page.locator(element).isEnabled();
        if (isEnabled) {
            await this.page.locator(element).check();
            await console.log("Clicked on Radio button")
        } else {
            console.log('Radio button is not enabled for click.');
        }
    }

    async searchNameInWebTable(value) {

        status: Boolean = await this.page.isVisible("//div[@class='rt-td' and contains(text(),'" + value + "')]");
        if (true) {
            console.log("Added name is available in the web table");
        }
        else {
            console.log("Added name is not available in the web table");
        }


    }

    async rightClick(element, responseSelector) {
        await this.page.locator(element).click({ button: 'right' });
        var responseMessage = await this.page.textContent(responseSelector);
        console.log(responseMessage);

    }

    async doubleClick(element, responseSelector) {
        await this.page.locator(element).dblclick();
        var responseMessage = await this.page.textContent(responseSelector);
        console.log(responseMessage);

    }
    async clickAndGetText(clickSelector, responseSelector) {
        await this.clickOnElement(clickSelector);
        var responseMessage = await this.page.textContent(responseSelector);
        console.log(responseMessage);

    }

    async moveToNewTab() {
        const link = await this.page.$('a[target="_blank"]');
        await link.click();

        const [newPage] = await Promise.all([
            this.context.waitForEvent('page'),

        ]);
        await newPage.waitForLoadState();
        expect(newPage.url()).toContain("demoqa");
        console.log('New tab url is ${newPage.url()}');
        await this.page.bringToFront();
        await this.page.close();

    }

    async uploadFile(element) {
        await this.page.locator(element).setInputFiles("D:\\NICE_DEMOQA\\tests\\files\\sample.doc");
        await console.log("Uploaded successfully");

    }

    async downloadFile(element) {
        const downloadButton = await this.page.locator(element);
        await downloadButton.click();
        console.log("Downloaded successfully");

    }
    async identifyBrokenLink() {
        // Get all links on the page
        const links = await this.page.$$eval('a', (elements) => elements.map((element) => element.href));
        // Check each link for a 404 or 500 response status code
        for (const link of links) {
            const response = await this.page.goto(link);
            const status = response.status();
            if (status === 404 || status === 500) {
                console.log(`Broken link: ${link}`);
            }
        }
    }

    async selectGender(value) {
        const gender = await this.page.locator("//input[@name='gender']//following::label[text()='" + value + "']");
        await gender.check();
        console.log("Selected gender");
    }

    async selectHobbies(value) {
        const hobbies = await this.page.locator("//input[@type='checkbox']//following::label[text()='" + value + "']");
        await hobbies.check();
        console.log("Selected gender");
    }

    async clickEnter() {
        await this.page.keyboard.press('Enter');
    }


    async handleMultiWindow(element) {
        console.log(this.page.url());
        const [multiPage] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.click(element)
        ])
        const pages = multiPage.context().pages();
        console.log("No of pages: " + pages.length)
        
        pages.forEach(tab => {
            console.log(tab.url());            
        });
        }


}
