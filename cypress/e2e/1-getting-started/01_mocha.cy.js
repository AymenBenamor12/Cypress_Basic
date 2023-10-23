/// <reference types ="cypress"/>


// il will excute only one time besfor all the cases 
//if we have 3 test case , the before hook will execute only one time 
before( "", ()=> {
    cy.log("i am inside the before hook")

})
//it will execute  before all and every test case 
// it we have 3 test cases , the before each will execute 3 time 
beforeEach("",()=>{
    cy.log("i am inside the before hook")
})

// il will excute only one time after all the cases 
//if we have 3 test case , the after hook will execute only one time 
after("",()=>{
    cy.log("i am inside the after hook")
})
//it will execute  after all and every test case 
// it we have 3 test cases , the afetr each will execute 3 time 
afterEach("",()=>{
    cy.log("i am inside the after hook")
})


// describe : suite our test cases
describe("" , () =>  {

    //it descripete a test case in cypress
//it two arguments , test first argments in the name of test case , the second argment is the stpes

it("should login with email password coorectly",function(){
    cy.log('I am inside a test case')

})
it('should not login if the user name is arong : ', () => {
cy.log('i am inside the test case 2')
})

it('should be able to reset th password : ', () => {
    cy.log('should be able to reset th password 3')
    })
})
describe('order fonctionnaly',() =>{
    it('should be able to order a new food : ', () => {
        cy.log('should be able to order a new food 4')
        })
})

