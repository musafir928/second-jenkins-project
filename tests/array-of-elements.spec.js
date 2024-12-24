import { expect, test } from '@playwright/test';

test.describe('Array of elements Test Group', () => {
let elements;
//create a beforeeach test to navigate a url
  test.beforeEach(async ({ page }) => {

    await page.goto('https://practice.cydeo.com/');

    elements = await page.locator("//ul[@class='list-group']/li/a").all();

  });


  test('verify that there ara 50 links onder the <ul> tag ', async ({ page }) => {

   expect(elements.length).toBe(50);
expect(elements.length).toBeGreaterThanOrEqual(20);
expect(elements.length).toBeLessThan(100);
  });

  test('verify that each link is visible and clickable', async ({ page }) => {
     for (let element of elements) {
        await expect(element).toBeVisible();
        //expect (await element.isVisible()).toBeTruthy();

       await expect (element).toBeEnabled();
       //expect (await element.isEnabled()).toBeTruthy();
     }
  });

  test('verify that each link has a unique href attribute', async ({ page }) => {
    for(let element of elements){
       await expect(element).toHaveAttribute("href"); 
console.log(`${await element.innerText()}: ${await element.getAttribute("href")}`);

    }
  });
});

/* 1.verify that there ara 50 links onder the <ul> tag.
2. verify that each link is visible and clickable.
3. verify that each link has a unique href attribute. */