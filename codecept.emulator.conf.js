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
      url: "http://localhost",      
      platform: "Android",      
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
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
}