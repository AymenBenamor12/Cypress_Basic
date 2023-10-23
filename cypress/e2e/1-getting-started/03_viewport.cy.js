
['iphone-8','ipad-mini','iphone-4'].forEach(viewport=>{
   
    it('should be able to open a website in different views ',()=>{

        // we can use cy.viewport to set the width and high of the test runner 
        //userfully to test our application in different viewports
        
        cy.viewport(viewport)  //change with the config
    
        cy.visit('cypress/index.html');
    })




})

