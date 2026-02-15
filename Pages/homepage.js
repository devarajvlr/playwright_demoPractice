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

  async getCityNameofEmployee(EmpName){
    const lc = "//td[contains(.,'" + EmpName + "')]/following-sibling::td[2]";
    const city = await this.page.locator(lc).textContent();
    return city;
  }

  
};
