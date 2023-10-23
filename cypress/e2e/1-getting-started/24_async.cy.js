it("async command ",()=> {

    let message = "Hello"

     cy.visit('cypress/index.html')
     cy.get("#welcome").invoke('text').then(textVariable =>{
        message = textVariable ;
        expect(message).to.eql('Welcome to Cypress Tutorials')
     
    
    })//.then(()=>{
        //cy.log(message)
    // })
    
    
})