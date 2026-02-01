// pages/LoginPage.js
const { expect } = require('@playwright/test');

exports.homepage = class homepage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.name = this.page.locator("");
  }

  async clickCountyCheckbox(countryNAme){
    const lc = "//td[contains(.,'"+countryNAme+"')]/preceding-sibling::td/input";
    await this.page.locator(lc).click();

  }

  
};
