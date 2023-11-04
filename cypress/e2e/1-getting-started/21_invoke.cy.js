it("Invoke command ",()=> {

    const student = {
        name : 'aymen',
        family : 'benamor',
        isQA : true,
        isWatching : function(){
           return ' hello' + this.name
        }

    }

   //L'utilisation de invoke est courante pour effectuer des actions ou des assertions spécifiques sur les éléments de la page
    cy.visit('cypress/index.html')
    cy.wrap(student).invoke('isWatching').should('contain','aymen')

})