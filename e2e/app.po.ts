import { browser, by, element } from 'protractor';

export class UT4WebAdminHttpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
