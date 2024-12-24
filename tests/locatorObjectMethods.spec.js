import { expect, test } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
  });

test.describe('Test Group', () => {
  test("Ckeck(): checks the radio button and checkbox if they haven't been checked yet", async ({ page }) => {
 let checkboxesLink = page.locator("text='Checkboxes'");
 await checkboxesLink.click();  
 
 let firstCheckbox = page.locator("#box1");
 let secondCheckbox = page.locator("#box2");

 await page.waitForTimeout(3000);
 await firstCheckbox.check();

 await page.waitForTimeout(3000);
 await secondCheckbox.check();

 await expect(firstCheckbox).toBeChecked();
 await expect(secondCheckbox).toBeChecked();

  });

  test("unCkeck(): checks the radio button and checkbox if they have been unchecked yet", async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();  

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");

    await page.waitForTimeout(3000);
    await firstCheckbox.uncheck();

    await page.waitForTimeout(3000);
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
   await expect(secondCheckbox).not.toBeChecked();
   //expect(await firstCheckbox.isChecked()).toBeTruthy();
   //expect(await secondCheckbox.isChecked()).toBeTruthy();
  });

  test("selectOption(): for drop down boxes", async ({ page }) => {

    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();
    let dropdownBox = page.locator("//select[@id='dropdown']");

    await page.waitForTimeout(3000); 
      
    //select by value
       // await dropdownBox.selectOption("1");
        //await page.waitForTimeout(3000);

    //select by text
        //await dropdownBox.selectOption( {label: "Option 1"} );
        //await page.waitForTimeout(3000);

    //select by index
     await dropdownBox.selectOption({ index: 1 });
        await page.waitForTimeout(3000);
        //await expect(dropdownBox).toHaveValue('option3');
  });
  //create empty test
  test("innerText(): retrives the visible text of the element.", async ({ page }) => {
    let headerElement=page.locator("//span[@class='h1y']");
    let expectedText="Test Automation Practice";

   await expect(headerElement).toHaveText(expectedText);


    //let actualText=await headerElement.innerText();
     //expect(actualText).toBe(expectedText);
  });

  //create empty test body
   
  test("inputValue", async ({page}) => {
    let inputsLink=page.locator("text='Inputs'");
    await inputsLink.click();
    let numberInputBox=page.locator("//input[@type='number']");
    await numberInputBox.fill("987654");
    await page.waitForTimeout(3000);
    let inputValue= await numberInputBox.inputValue();
    expect(inputValue).toEqual("987654");
    console.log(inputValue);
});
       
//create a new test , with empty body
  test("getAriaLabel(): retrieves the aria-label attribute of an element.", async ({ page }) => {
    let abTestingLink=page.getByText("A/B Testing");
    let hrefValue= await abTestingLink.getAttribute("href");
    console.log(hrefValue);
    expect(hrefValue).toContain("/abtest");
  });
  //create a new test, with empty body 
   test("state methods of locator object.", async ({ page }) => {
    let header2Element=page.getByText("Available Examples");
    expect(header2Element.isVisible()).toBeTruthy();
    await expect(header2Element).toBeVisible();

    //let abTestingLink= page.getByAltText("A/B Testing");
    //expect( await abTestingLink.isEnabled()).toBeTruthy();
    //await expect(abTestingLink).toBeEnabled();


    //expect(abTestingLink.isEnabled()).toBeTruthy();
    //await expect(abTestingLink).toBeDisabled();
  });

    




});