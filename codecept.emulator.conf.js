const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config();

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      url: "http://localhost",      
      platform: "Android",
      waitForTimeout: 20000,
      timeouts: {
        "script": 60000,
        "page load": 30000
      },
      desiredCapabilities: {
        automationName: "UiAutomator2",
        deviceName: "Android Emulator",          
        udid: "emulator-5554",       
        platformVersion: "10.0",
        browserName: "chrome",
        chromeOptions: {
          w3c: false, // false for platform: 'Android'
        },
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