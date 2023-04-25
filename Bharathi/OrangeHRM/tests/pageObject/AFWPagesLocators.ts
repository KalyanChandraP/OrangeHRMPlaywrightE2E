import { BasePage } from "../basePage/basePage";

let basePage : BasePage;
basePage = new BasePage;

export class AFWPageLocators{
afwLinks = "//h5[text()='Alerts, Frame & Windows']";
browserWindows = "//span[text()='Browser Windows']";
newTabButton = "//button[text()='New Tab']";
newWindowButton = "//button[text()='New Window']";
newWindowMsgButton = "//button[text()='New Window Message']";
windowMessage = "//body[contains(text(),'Knowledge')]";

async beforeAllTest() {
    await basePage.beforeTest();
}

async clickOnAFWLink() {
    await basePage.clickOnElement(this.afwLinks);
}

async verifyBrowserWindows(){
await basePage.clickOnElement(this.browserWindows);
//await basePage.handleMultiWindow(this.newTabButton);
//await basePage.handleMultiWindow(this.newWindowButton);
 await basePage.handleMultiWindow(this.newWindowMsgButton);
 await basePage.getText(this.windowMessage)
}



}