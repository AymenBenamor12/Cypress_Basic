

it("its command ",()=> {

    const student = {
        name : 'aymen',
        family : 'benamor',
        isQA : true,
        isWatching : function(){
            console.log('he is watching')
        }

    }

    
    
    
    cy.visit('cypress/index.html')
    cy.wrap(student).its('name').should('eql','aymen')

})