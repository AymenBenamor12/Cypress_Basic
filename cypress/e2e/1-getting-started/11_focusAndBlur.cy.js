

it("focus command",()=>{
    
    cy.visit("cypress/index.html")
 
 
    cy.get('.focus').focus();

 })

 it.only("blur command",()=>{
    
    cy.visit("cypress/index.html")
 
    cy.get('.focus').focus();
    cy.get('.focus').blur()

 })