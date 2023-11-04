it("Then command ",()=> {

    cy.visit('cypress/index.html')

    //The .invoke command is used to call a function on the selected element. In this case, it's calling the function 'text,' which retrieves the text content of the element.
   // .then command to work with the text content retrieved in the previous step. It logs the text content to the Cypress test runner's console using cy.log.

    cy.get("#welcome").invoke('text').then(text =>{
        cy.log(text)
    })
})