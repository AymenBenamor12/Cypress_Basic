it("check command",()=>{
    
    cy.visit("cypress/index.html")
 
 
    cy.get('#Nuts').check()
    cy.get('#Nuts').uncheck()
    cy.get('#Manager').check()

 })