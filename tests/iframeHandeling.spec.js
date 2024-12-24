import { test } from '@playwright/test';

test('SEP Iframe', async ({ page }) => {
  const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
await page.setExtraHTTPHeaders({
    Authorization: `Basic ${code}`,
})
await page.goto(process.env.SEP_QA_URL);

let firstNameInputBox= page.locator("//input[@formcontrolname='firstName']");
await firstNameInputBox.fill("norah");
let lastNameInputBox= page.locator("//input[@formcontrolname='lastName']");
await lastNameInputBox.fill("Adil");

let emailBox=page.locator("//input[@formcontrolname='email']");
await emailBox.fill("norah@gmail.com");

let phoneInputBox=page.locator("//input[@formcontrolname='phoneNumber']");
await phoneInputBox.fill("1234567890");

let howDidYouHearDropdown=page.locator("//mat-label[text()='How did you hear about us?']");
await howDidYouHearDropdown.click();

let emailOption = page.locator("//span[text()='Email']");
await emailOption.click();

let nextButton1=page.locator("//button[@type='submit' and contains(text(), 'Next')]");
await nextButton1.click();

let upfrontPaymentOption = page.locator("//span[@class='payment-type' and normalize-space()='Upfront']");
await upfrontPaymentOption.click();

let nextButton2 = page.locator("//button[text()='Next']");
await nextButton2.click();

//step3: review step iframe

let paymentFrame= page.frameLocator("//iframe[@title='Secure payment input frame']");
let carNumberInput=paymentFrame.locator("//input[@id='Field-numberInput']");
await carNumberInput.fill(process.env.CARD_NUMBER);

let expirationDateInput= paymentFrame.locator("//input[@id='Field-expiryInput']");
await expirationDateInput.fill(process.env.EXPIRATION_DAY);

let cvcInput= paymentFrame.locator("//input[@id='Field-cvcInput']");
await cvcInput.fill(process.env.CVC_NUMBER);

let checkBox = page.locator("//input[@type='checkbox']");
await checkBox.click();

let payButton = page.locator("//span[text()='Pay']");
await payButton.click();

});