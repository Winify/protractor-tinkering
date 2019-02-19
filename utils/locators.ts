import { by, ProtractorBy } from "protractor";
import { By } from "selenium-webdriver";

ProtractorBy.prototype.href = (href: string): By => by.css(`[href='${href}']`);
