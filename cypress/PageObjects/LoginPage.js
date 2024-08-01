export default class LoginPage {

    xpathUserName = "//input[@name='username']";
    xpathPassword = "//input[@name='password']";
    xpathLoginButton = "//button[@type='submit']";
    title = "OrangeHRM";

    /**
     * This method will open the HRM in your browser
     */
    openHrmApplication()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    /**
     * This method is used to login into the HRM application
     * @param {*} username 
     * @param {*} password 
     */
    loginToHRM(username,password)
    {
        cy.xpath(this.xpathUserName).type(username);
        cy.xpath(this.xpathPassword).type(password);
        cy.xpath(this.xpathLoginButton).click();
    }

    /**
     * This method is to verify the title of OrangeHRM application
     */
    verifyTitle(){
        cy.title().should('equal',this.title);
    }

}

//export default LoginPage;