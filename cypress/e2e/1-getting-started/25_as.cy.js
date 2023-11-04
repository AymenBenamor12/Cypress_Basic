

describe ('alias ', ()=> {

beforeEach(() => {
    
    cy.visit('cypress/index.html')
    cy.url().as('url')

 //cy.url(): This Cypress command retrieves the URL of the currently loaded page.
 //.as('url'): The .as() command is used to create an alias. In this case, it creates an alias named 'url' and assigns the URL value to it.
})
    it("aliases in Cypress ",()=> {
   
        cy.get('@url').should('contain','index.html')
           
   })
   
   it("aliases in Cypress ",()=> {
       cy.get('@url').should('contain','index.html')
          
   })
})


