import { test,expect } from '@playwright/test';

test.describe('Web tables practices', () => {
let table;
let rows;
let colums;
let cells;

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/web-tables");
        table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
        rows = await table.locator("//tr").all();
        colums = await table.locator("//th").all();
         cells = await table.locator("//td").all();

    });

  test('Verify that there are 9 rows and 13 coloms and 104 cells', async ({ page }) => {
   expect(rows.length===9).toBeTruthy();
   expect(colums.length===13).toBeTruthy();
   expect(cells.length===104).toBeTruthy();
    
     
});

  test('Read all the data from the table', async ({ page }) => {
    /* for(let cell of cells) {
        let cellText=await cell.innerText();
        console.log(cellText);} */    
        //this gets all cell text including empty cells.
 

        for (let i=1; i<rows.length; i++) {
            let cellsInRow=await rows[i].locator("//td").all();
            for(let j=1; j<cellsInRow.length-1; j++) {
                let cellText=await cellsInRow[j].innerText();
                console.log(cellText);}
            }
      
  });

  test('Check all the check boxes on the web table', async ({ page }) => {
    let checkBoxes=await table.locator("//Input").all();
    for(let checkbox of checkBoxes) {
        await checkbox.check();
    }
  });
});