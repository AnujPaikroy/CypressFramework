/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage"
import DashboardPage from "../PageObjects/DashboardPage";
const loginObj = new LoginPage();
const dashboardObj = new DashboardPage();

describe('This suite consists of all test cases related to Login page', ()=>{
 
    
    it('Verify title while landing on Login page',()=>{
        loginObj.openHrmApplication();
        loginObj.verifyTitle();   //correct way
    })

    it('Verify Login functionality',()=>{
        cy.fixture('credentials').then((data)=>{
            loginObj.openHrmApplication();
            loginObj.loginToHRM(data.username,data.password)
            dashboardObj.verifySuccessfullLogin();
        }) 
    })
})

