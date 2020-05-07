const { setHeadlessWhen } = require('@codeceptjs/configure');
const dotenv = require('dotenv');
dotenv.config();

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      host: "hub-cloud.browserstack.com",
      port: 4444,
      user: process.env.BROWSERSTACK_USER,
      key: process.env.BROWSERSTACK_KEY,
      url: "http://localhost",
      platform: "Android",
      browserName: "chrome",
      desiredCapabilities: {
        project: 'Mobile Browser POC',
        build: 'Mobile Browser POC',
        automationName: "UiAutomator2",
        chromeOptions: {
          w3c: false, // false for platform: 'Android'
        },
        "bstack:options": {
          "osVersion" : "9.0",
          "deviceName" : "Google Pixel 2",
          "realMobile" : "true",
          "local" : "false",
        }
      }      
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept-mobile-browsers-poc',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}