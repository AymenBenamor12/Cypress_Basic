

describe ('alias ', ()=> {

beforeEach(() => {
    
    cy.visit('cypress/index.html')
    cy.url().as('url')

})
    it("aliases in Cypress ",()=> {
   
        cy.get('@url').should('contain','index.html')
           
   })
   
   it("aliases in Cypress ",()=> {
       cy.get('@url').should('contain','index.html')
          
   })
})


