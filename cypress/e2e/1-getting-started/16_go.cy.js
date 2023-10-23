it("get go between the pages ",()=> {
    cy.visit('cypress/index.html')
    
    cy.get('.about').click()
    cy.go('back')
    cy.go('forward')
    
    })