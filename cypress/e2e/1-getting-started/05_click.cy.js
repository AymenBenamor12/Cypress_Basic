


it('click command ' ,()  =>  {

    cy.visit('cypress/index.html')
    cy.get('.invoice-button').last().click('topLeft')
})


it('click many element command ' ,()  =>  {

    cy.visit('cypress/index.html')
    cy.get('.invoice-button').click({multiple:true})
})

it('click force element command ' ,()  =>  {

    cy.visit('cypress/index.html')
    cy.get('.hidden-button').click({force:true})

    // we can an element we usisng click command
    // we can only click on one element
    // we can click on multiple elements if we add multiple:true
    // we can click on hidden or convered elements if we add force:true
})