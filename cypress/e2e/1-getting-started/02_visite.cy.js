

it("should viste the website correctly",()=>{
    // with visit command we can go to a normalwebsite , or localhost , or any html file in the system
   // Cypress recommande to set the baseUrl in cypress.config.js file
    // we can add the secod argument to visite command an this argument is an object
    //inside the object we add our options
   cy.visit("cypress/index.html")

    //cy.visit('/')
})