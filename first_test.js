Feature('Mobile Browser Test');

Scenario('Anrdoid Chrome Mobile Browser Test', async(I) => {
    await I.amOnPage("https://the-internet.herokuapp.com/login");
    await I.see("Login");
    await I.waitForVisible({xpath: "//input[@id='username']"});
    await I.fillField({xpath: "//input[@id='username']"}, "tomsmith");
    await I.fillField({xpath: "//input[@id='password']"}, "SuperSecretPassword!");
    await I.hideDeviceKeyboard();
    await I.waitForVisible({xpath: "//button[@type='submit']"});
    await I.click({xpath: "//button[@type='submit']//i"});
    await I.see("Secure Area");
});
