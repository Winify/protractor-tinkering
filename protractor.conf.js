// @ts-nocheck
const tsNode = require('ts-node');
const path = require('path');

exports.config = {
    framework: 'jasmine',

    capabilities: {
        browserName: 'chrome'
    },

    directConnect: true,

    specs: ['specs/**/*.spec.ts'],

    onPrepare: () => {
        tsNode.register({project: path.resolve(path.join(__dirname, './tsconfig.json'))});

        browser.waitForAngularEnabled(false);
        browser.manage().window().setSize(1920, 1080);
    }
};
