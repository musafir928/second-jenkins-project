import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
    //create beforeEach
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
        
    });

 
  test('Regular JS Alert', async ({ page }) => {
    /*page.on('dialog',async(dialog)=>{         //this part is optional. because alert is handled automatically        
        console.log(`Alert message: ${dialog.message}`);
        await dialog.accept();
     }); */

    let clickForJsAlertButton=page.locator("//button[@onclick='jsAlert()']");
    await clickForJsAlertButton.click();
    await expect(page.getByText("You successfully clicked an alert")).toBeVisible();
    await page.waitForTimeout(2000);
  });

  test('JS Confirmation Alert', async ({ page }) => {
console.log(`Alert message: ${alert.message()}`);
expect(alert.message()).toBe("I am a JS Confirm")
    page.on('dialog',async(alert)=>{
        await alert.accept();
    });

    let clickForJsConfirm=page.locator("//button[@onclick='jsConfirm()']");
    await clickForJsConfirm.click();  //by default it clicks cancel on the alert
     
  });

  test('JS Prompt Alert', async ({ page }) => {
    page.on('dialog',async(alert)=>{
      expect(alert.message).toBegin("I am a JS prompt");
      await alert.accept("CYDEO SCHOOL");
  });

    let clickForJsPrompt=page.locator("//button[@onclick='jsPrompt()']");
    await clickForJsPrompt.click();
    await page.waitForTimeout(3000);

    expect(page.locator("//p[@id='result']")).toHaveText("You entered: CYDEO SCHOOL");
    //expect(page.locator("//p[@id='result']")).toContain("CYDEO SCHOOL");
  });
});