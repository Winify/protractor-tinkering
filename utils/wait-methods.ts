import { browser, ElementFinder, ExpectedConditions as EC } from "protractor";

export enum u {
    visible = 'visible'
}

const condition: { [key: string]: Function } = {
    [u.visible]: (e: ElementFinder): PromiseLike<{}> => browser.wait(EC.visibilityOf(e))
}


ElementFinder.prototype.waitForVisibility = function (): PromiseLike<void> {
    return this.waitForPresent()
        .then(() => {
            browser.wait(EC.visibilityOf(this), 1_000,
                `Element with locator: ${this.locator()} is not visible on page`)
        });
}

ElementFinder.prototype.waitForClickable = function (): PromiseLike<{}> {
    return this.waitForPresent()
        .then(() => browser.wait(EC.elementToBeClickable(this), 1_000,
            `Predicatum clickable is not true for element with locator: ${this.locator()}`)
        );
}

ElementFinder.prototype.waitForPresent = function (): PromiseLike<{}> {
    return browser.wait(EC.presenceOf(this), 1000,
        `Element with locator: ${this.locator()} is not present in DOM`)
}

ElementFinder.prototype.waitFor = function (conditionName: string): PromiseLike<{}> {
    return condition[conditionName](this)
}