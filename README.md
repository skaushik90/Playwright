# Playwright
Playwright Learning

## Different scripts to run the test: 
| Command | Meaning |
| --- | --- |
| npx playwright test | Runs all tests on all browsers in headless mode |
| npx playwright test --workers 3 | runs with 3 workers in parallel |
| npx playwright test one.spec.js | runs a specific test file | 
| npx playwright test one.spec.js two.spec.js | runs the files specified | 
| npx playwright test one two | runs files that have one or two in the file name | 
| npx playwright test -g "check title" | runs test with the title |
| npx playwright test --project=chromium | runs on specific browser | 
| npx playwright test --headed | runs test in headed mode |
| npx playwright test --debug | debug tests | 
| npx playwright test one.spec.js --debug | debug specific test file |
| npx playwright test one.spec.js:21 --debug | debug starting from specific line in a test file |

## How to write tests 
Step 1 - Create a new file under test folder 

Step 2 - Add module 'playwright/test' - Playwright test provides a test function to declare tests and expect function to write assertions
```
import {test, expect} from '@playwright/test'
```
Step 3 - Create a test block -test(title, test function) - async: Makes the function return a promise - await: Wait for a promise 
```
test('get started link', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle('Google');
});
```
## How to record test - test generator
Playwright comes with a tool - **Codegen** also called test generator.
Can be used to record test and generate test scripts.
It Opens 2 windows
1. A browser window to interacts with the website
2. Playwright Inspector window to record test

Step 1 - Open terminal and run codegen
```
npx playwright codegen
```
Step 2 - Check 2 windows open - Browser and Playwright Inspector 

Step 3 - Record your test steps and check the test scripts getting created 

Step 4 - Save the recorded script in a test file - Run and check
