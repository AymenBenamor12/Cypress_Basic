

it("its command ",()=> {

    const student = {
        name : 'aymen',
        family : 'benamor',
        isQA : true,
        isWatching : function(){
            console.log('he is watching')
        }

    }

    
    //In Cypress, commands are methods or functions that allow you to interact with your web application and make assertions
    //These commands are used in your Cypress test scripts to perform actions, interact with elements, and verify the behavior of your web application.
    cy.visit('cypress/index.html')
    cy.wrap(student).its('name').should('eql','aymen')

})