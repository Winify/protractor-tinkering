import { browser, by, element, ExpectedConditions as EC } from 'protractor';
import '../../utils/locators';
import '../../utils/wait-methods';


describe('wait on google page', () => {

    const searchBtn = element.all(by.name('btnK')).last()

    beforeEach(() => {
        browser.get('https://www.google.com');
    });

    it('should work with a predicate expected condition visibility', () => {
        searchBtn.waitFor(EC.visibilityOf)
    })

});