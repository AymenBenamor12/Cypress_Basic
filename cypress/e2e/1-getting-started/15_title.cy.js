it("get Title ",()=> {
    cy.visit('cypress/index.html')
    
    //Cette ligne de code utilise Cypress pour vérifier que le titre de la page actuelle 
    cy.title().should('eql','Cypress Tutorials')
    
    })