

it("wrap  command ",()=> {

    const student = {
        name : 'aymen',
        family : 'benamor',
        isQA : true,
        isWatching : function(){
            console.log('he is watching')
        }

    }

    const message ='welcome to Qacart';
    
    //vous enveloppez la variable student pour la rendre utilisable dans le contexte de Cypress
    cy.visit('cypress/index.html')
    cy.wrap(student).should('have.property','name','aymen')
    cy.wrap(message).should('eql','welcome to Qacart')

})