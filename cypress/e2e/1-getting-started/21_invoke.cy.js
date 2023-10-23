it("Invoke command ",()=> {

    const student = {
        name : 'aymen',
        family : 'benamor',
        isQA : true,
        isWatching : function(){
           return ' hello' + this.name
        }

    }

    
    
    
    cy.visit('cypress/index.html')
    cy.wrap(student).invoke('isWatching').should('contain','aymen')

})