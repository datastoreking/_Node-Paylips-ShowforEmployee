# _Node-Payslip-ShowforEmployee
## Rationale around tech choices
    - First users can input multi line input data.
    - So needed to use readline npm for multiline input
    - Once input done, read the data by lines and fetch value to variables
    - String methods slice() is used to get every variable data, Math.round() is used for       rounding.  If >= 50 cents round up to the next dollar increment, otherwise round down.
## List any assumptions that you have made in order to solve this problem
    Input data must be separated by "," 
    For example: 
    Andrew, Smith, 60050, 9%, 01 March – 31 March
## Link to the source on GitHub / Bitbucket
    https://github.com/datastoreking/_Node-Payslip-ShowforEmployee
## Provide instruction on how to run the application
    Open the terminal on root of project
```
npm install
```
```
node main.js
```
    Input the data
    All done!
## Provide a test harness to validate your solution
    On console see directly the result
    Easily test the app is working well
