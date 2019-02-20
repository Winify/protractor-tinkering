import { browser, by, element, ElementFinder, ExpectedConditions, until } from 'protractor';
import '../../utils/locators';
import '../../utils/wait-methods';
import { u } from '../../utils/wait-methods';


describe('wait on google page', () => {

    const searchBtn = element.all(by.name('btnK')).last()

    beforeEach(() => {
        browser.get('https://www.google.com');
    });

    it('should work with until callback', () => {
        callbackWait(until.elementIsVisible, searchBtn)
    });

    it('should work with ExpectedConditions', () => {
        browser.wait(ExpectedConditions.visibilityOf(searchBtn), 1_000)
    });

    it('should work with EC callback', () => {
        callbackWait(ExpectedConditions.visibilityOf, searchBtn)
    });

    fit('asd', () => {
        searchBtn.waitFor(u.visible)
    })

});

function callbackWait(condition, element: ElementFinder) {
    browser.wait(condition(element.getWebElement()), 1_000)
}
