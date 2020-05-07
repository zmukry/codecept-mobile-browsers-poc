Feature('Mobile Browser Test');

Scenario('Mobile Browser Test @Basic', async(I) => {
    await I.amOnPage("https://the-internet.herokuapp.com/login");
    await I.see("Login");
    await I.waitForVisible({xpath: "//input[@id='username']"});
    await I.fillField({xpath: "//input[@id='username']"}, "tomsmith");
    await I.fillField({xpath: "//input[@id='password']"}, "SuperSecretPassword!");
    //await I.hideDeviceKeyboard();
    await I.waitForVisible({xpath: "//button[@type='submit']"});
    await I.click({xpath: "//button[@type='submit']//i"});
    await I.see("Secure Area");
});

Scenario('Mobile Browser - Basic Auth Test @HttpAuth', async(I) => {
    await I.amOnPage("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await I.see("Basic Auth");
    await I.waitForVisible({xpath: "//*[@id='page-footer']//a"});
    console.log(await I.grabTextFrom({xpath: "//*[@id='page-footer']//a"}));
});