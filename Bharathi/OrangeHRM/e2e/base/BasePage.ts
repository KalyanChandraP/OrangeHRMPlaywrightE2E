import {Browser, test,Page } from "@playwright/test";

export class BasePage{
 private page;

   constructor(page : Page) {
    this.page = page;    
   } 

  // constructor(private page: Page){}

   
  async close() {
    await this.page.close();
  }

async enterText(selector : string, value : string){
await this.page.locator(selector).fill(value);
}
async click(selector : string){
    await this.page.click(selector);
}
async isVisible(selector : string){
    await this.page.waitForSelector(selector, { visible: true });
    console.log(selector +"is visible");
}

async isDisplayed(selector : string){
  await this.page.waitForSelector(selector, { displayed : true})
  console.log(selector +"is displayed");
}

}