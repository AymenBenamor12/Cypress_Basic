


it("type command",()=>{
    
   cy.visit("cypress/index.html")


   // we can type an any input using the type command

   cy.get('#inputEmail').type('test@gmail.com')

   //cy.get('#inputEmail').type('test@gmail.com{enter}')
   

   cy.get('#coverdInput').type('test@gmail.com',{force:true , delay:1000})
   
   //we can type on hidden element using 'force:true'
   // we can delay the type command per seconds, this deplay will happen between every character in the string
   //we can use some keybord actions using type -->https://docs.cypress.io/api/commands/type#Arguments

})