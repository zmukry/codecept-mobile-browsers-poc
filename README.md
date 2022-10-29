##### CodeceptJS Android Chrome Mobile Browser POC #####
A simple Project to evaluate CodeceptJS Android Chrome Mobile Browser Test Automation with local emulator and BrowserStack Real Devices.

A Project contains 2 Config files.

1. **codecept.conf.js** contains configuration for executing tests on BrowserStack.
2. **codecept.emulator.conf.js** contains configuration for executing tests on locally configured Android emulator.

#### Test Execution
Follow the steps before executing the Tests
1. Start the Appium Server with following command ``appium --chromedriver-executable C:\\WebDriver_Drivers\\chromedriver.exe`` (Update the path as per your Chrome Driver path). Appium has to be started with correct version of Chrome Driver, check the Chrome version in your Emulator and start the Appium server with correct Chrome Driver. 
2. The Android Emulator should be up and running.

To execute Tests on Android Emulator with detailed logs
``npx codeceptjs run --config=codecept.emulator.conf.js --verbose``

To execute Tests on BrowserStack with detailed logs
``npx codeceptjs run --verbose`` 
