# Playwright
Playwright Learning

Different scripts to run the test: 
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
