

it("clock  command ",()=> {

    let now = new Date('2019.02.18')

    cy.clock(now)
    cy.visit('cypress/index.html')
    
    


})