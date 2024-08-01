class DashboardPage {

    verifySuccessfullLogin()
    {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    } 
}

export default DashboardPage;