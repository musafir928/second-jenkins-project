import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  test("ByPass the authentication by embedding the credentials in the URL", async ({ page }) => {
    //https://username:password@domainaddress/basic_auth
    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
     await page.waitForTimeout(2000); 
     
      await expect(page.locator("//p[contains(text(), 'Congratulations!')]")).toBeVisible();
   
  });

  test('Bypass the authentication by encoding the credentials base64 format @sep-login', async ({ page }) => {
    //1. encoding the credentials in base64 format
    let encodedCredential=Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
    console.log(encodedCredential);
    //2. add the credentials to the http header
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredential}`});
     await page.goto("https://practice.cydeo.com/basic_auth");

     await page.waitForTimeout(2000); 
     
     await expect(page.locator("//p[contains(text(), 'Congratulations!')]")).toBeVisible();
  });


});
