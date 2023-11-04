
it("expect command ",()=> {

    cy.visit('cypress/index.html')
    cy.get("#welcome").invoke('text').then(returnText=>{

 //The .then block is used to handle the text content that was retrieved in the previous step. It's passed as returnText to the callback function.
 //this line uses the expect assertion to check if the returnText is equal to the string 'Welcome to Cypress Tutorials'. If the text doesn't match the expected value, the test will fail.     
        expect(returnText).to.eql('Welcome to Cypress Tutorials')
    })
   
  //expect('').to.have.text('')
  //expect('').to.not.contain('')
  //expect('').to.have.attr('')
})