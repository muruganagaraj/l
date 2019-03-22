import { browser, by, element } from 'protractor';

export class AppPage {
   /* tslint:disable no-any */
  navigateTo(): any {
    return browser.get('/');
  }
 /* tslint:disable no-any */
  getParagraphText(): any {
    return element(by.css('app-root h1')).getText();
  }
}
