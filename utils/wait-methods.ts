import { browser, ElementFinder, ExpectedConditions as EC } from "protractor";

ElementFinder.prototype.waitFor = function (conditionName: Function): PromiseLike<{}> {
    const ec = conditionName.bind(EC)
    const name = conditionName.toString().match(/(\D*)\(.*{/)[1]
    return browser.wait(ec(this), 1_000,
        `Waiting for Expected Condition: [${name}] on element: ${this.locator()}`)
}