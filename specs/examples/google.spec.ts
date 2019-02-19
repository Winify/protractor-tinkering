import { browser, by, element } from 'protractor';
import '../../utils/locators';

describe('google search', () => {
    it('should have object by href', () => {
        browser.get('https://www.google.com')
        element(by.href('asd')).click()
    });
});