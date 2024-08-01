Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Verify login with all list of credentials',()=>{

    it('Verify Login wihth valid and invalid user name and password',()=>{
        cy.fixture("AllCredentials").then((data)=>{
          cy.visit('https://opensource-demo.orangehrmlive.com/');
          //cy.wait(5000); 
          
          data.forEach(element => {
            cy.xpath("//input[@name='username']").type(element.username);
            cy.xpath("//input[@name='password']").type(element.password);
            cy.xpath("//button[@type='submit']").click();
            
            if(element.username=='Admin' && element.password=='admin123'){
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', element.expected);
                cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();   
                cy.wait(5000);   
            }else{
                cy.xpath("//p[text()='Invalid credentials']").should('have.text', element.expected);
            }
          }) 
        })
   
    })
})