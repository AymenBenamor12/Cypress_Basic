
// Be use the get command to find an element or elements 

// we can find an element by tag name

it('Find element by tag name', ()=> {

    cy.visit('cypress/index.html');

    // we put the tag name inside the ger command
    //HTML tag
    // the get command will return all the elements that matches the tag name
    
    cy.get('button')

})
it('Find element by tag id', ()=> {

    cy.visit('cypress/index.html');

    // to find any element by id we use #
   
    
    cy.get('#courses')

})
it.only('Find element by class name', ()=> {

    cy.visit('cypress/index.html');

    // to find any element class name we use '.'
   // In case of compound classes , we choose only'. 'class only
   // We can find an element using tow classes by adding class1.class2
    cy.get('.list1.web')

})

it('Find element by attribute ', ()=> {

    cy.visit('cypress/index.html');

   // to find any element using any attribute we use []
    
    cy.get('[name="Developer"]')

})

it('Find first element from a list of elements ', ()=> {

    cy.visit('cypress/index.html');

   // to find first element form a list of element we use the ".first()""
    
    cy.get('h1').first()

})

it('Find last element from a list of elements ', ()=> {

    cy.visit('cypress/index.html');

   // to find last element form a list of element we use the ".last()""
    
    cy.get('h1').last()

})

it('Find the an element from a list of elements by index ', ()=> {

    cy.visit('cypress/index.html');

   // to find the element form a list of element by index we use the "eq(index)"
    // element are saved in an array Zero index
    cy.get('h1').eq(2)

})

it('Find the an element from a list of elements using filter ', ()=> {

    cy.visit('cypress/index.html');

   // to filter same  element form a list of element by index we use the the filter command 
    // we can use css selectors inside the filter command

    cy.get('li').filter('.web')

})


it('Find the element  using the children command ', ()=> {

    cy.visit('cypress/index.html');

   // to fnd selement using the parent we use the children command
    // we can use the children command without any arguments and in that case it will return all the children
    cy.get('.course-list').children()

  // we can add same ccs selectors to filter our same of the children   
    cy.get('.course-list').children('.web')

    cy.get('.course-list').children().first();
    cy.get('.course-list').children().last();
    cy.get('.course-list').children().eq(2);

})

it('Find the element  using the children command ', ()=> {

    cy.visit('cypress/index.html');


  // we can find elements based on the parent using the find command , find(css.selector)
    cy.get('.course-list').find('.web')

})


it('Find the element  using the parent command ', ()=> {

    cy.visit('cypress/index.html');

   // to find selement using the parent we use the parent command
    // parent command will return the direct parent of the element 
    cy.get('.list1.web').parent();

  

})

it('Find the element  using the parents command ', ()=> {

    cy.visit('cypress/index.html');

   // to find selement using the parent we use the parent command
   // parents command will return the all parents of the element in an array
    cy.get('.list1.web').parents();

})



it('Find the element  using the siblings command ', ()=> {

    cy.visit('cypress/index.html');

   // to find selement using the sibling we use the siblings command
   // siblings command will return the all siblings(brother) of the element in an array
    cy.get('.list1.web').siblings('.web');

})

it('Find the element  by text ', ()=> {

    cy.visit('cypress/index.html');

   // to find any selement using text we can use the contains command .contains(text)
  
    cy.contains('Appium');
    cy.get('li').contains('Appium');

})

it('find elements using the cypress runner',()=>{


    cy.visit('cypress/index.html');

    cy.get('.list4')
})