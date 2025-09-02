# QA Testing Quiz

## About
Necessary testing has been implemented in the prototype login portal developed by MeldCX for the QA Code Challenge.

## Recommended Software
Users are recommended to use any release within the Node.js 16.x series.

If you use different version of Node.js, you can use NVM(Node Version Manager) to use multiple verions of Node.js.

- Download NVM from https://github.com/coreybutler/nvm-windows/releases
- Uninstall existing Node.js from your machine
- Install NVM
- After installing NVM you can check the current version by running the following command on command prompt
```
nvm -v
```
- Install Node.js using NVM
```
nvm install 16
```
- You can install multiple version of Node.js using NVM
```
nvm install 22
```
- Choose between different versions
```
nvm use 16
```
or

```
nvm use 22
```
- Check the current version of Node running in your machine by
```
node -v
```

Use recommended version of Node.js before setting up the prototype

## Installation And Dependencies
- Clone or download the prototype
- Open the project with code editor
- Open terminal in the project folder
- Run following commands
```
npm install -g yarn
```
```
yarn install
```
- To compile the project
```
yarn start
```
It will compile the project and you will be able to run the Mock API and the UI.

# Testing The Mock API

## Test Cases For Mock API
- You will find the test cases for the Mock API [here](https://docs.google.com/spreadsheets/d/1rXSBUJcGwSCVsqsOs-UBs1G8LKR_9rU3uOIAB6KpdJ0/edit?usp=sharing)

## Run API Test And Generate Report
- Postman was used to test the Mock API
- Postman collection will be found in the following folder
```
mockedAPI/
└── Postman_Collection/
    └── Mocked_API.postman_collection.json
```

- We need to keep the Mock API open. To do that we need to go the following folder
```
mockedAPI/
└──index.js 
```
and then run command
```
node index.js
```
The server will start running 
- Keep the server running to run Postman test and generate Postman report
- To run the Postman test run the following command 
```
yarn postman:test
```
and to generate the API report

```
yarn postman:report
```
- A folder called **Postman-Report** will be generated where you will find the report

## Report Generated For Postman API Testing
<img width="1920" height="1732" alt="Postman-Report" src="https://github.com/user-attachments/assets/04a248e4-a5e8-45a6-9526-1a5e9c147172" />

## Fixes Applied To The Codes 
- In **index.json** file located in **mockedAPI** folder, the path for the **account.json** file located in **storage** folder was not correct. It was found and fixed after reading the error logs.
- While testing the **PUT** request to update account information it was found that account was getting updated successfully but **favouriteMovie** was not saving in **account.json**. 
- Please go through the added comment to find the fixes in the Mock API.  
- No status code was set in the API response. Assertions were conducted based on the text messages returned for successful operations. For every respond, the status was **200**. 

# Testing The UI
## Test Cases For The UI
- You will find the test cases for the UI [here](https://docs.google.com/spreadsheets/d/1OMngRUZws2LS0noxP7Xb4zgffrHEOoB1sS4k09lXZrw/edit?usp=sharing)

## Run UI Test And Generate Report
- Cypress was used to test the UI
- Cypress 12.x was used to conduct the test as it was compatible with Node.js 16.x series
- Mocha-awesome reporter 3.2.0 was used to generate the report
- Cypress tests will be found in the following folder
```
cypress/
└──e2e/ 
```
- To run the test and generate report run
```
yarn test:end-to-end
```
- After running the test, you will find the report in the following folder
```
cypress/
└── reports/
    └── html/
```
## Report Generated For Postman API Testing
<img width="1920" height="1944" alt="Cypress-UI-test-report" src="https://github.com/user-attachments/assets/35f2aca7-5e1f-4eb9-a773-aff4cd223ce4" />


