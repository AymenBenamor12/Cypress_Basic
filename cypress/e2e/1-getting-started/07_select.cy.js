
it("select command",()=>{
    
    cy.visit("cypress/index.html")
 
 
    cy.get('#courses').select('cypress')
    cy.get('#courses').select(' wdiocourse')
    cy.get('#courses').select(2)
   
 })