import {test} from '@playwright/test';
//create a test
 test('environment variable practice', async () => {
   console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
 });
 console.log(`Password is: ${process.env.PRACTICE_USERNAME}`);

//create another test
