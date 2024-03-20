
import { login } from '../../../pages/login' 
import data from '../../fixtures/data.json'
const loginObj = new login()

describe('PeoplehumLogin', () => {
    it('Login',()=>{
        loginObj.openURl()
        loginObj.enterUserName(data.Name)
        loginObj.enterPassword(data.Password)
        loginObj.click()
       
    })
})
describe('Clickclockinbutton', () => {
    it('Clockin',()=>{
        loginObj.openURl()
        loginObj.enterUserName(data.Name)
        loginObj.enterPassword(data.Password)
        loginObj.click()
        loginObj.clockin()
       
    })
})

describe('Clickclockoutbutton', () => {
    it('Clockout',()=>{
        loginObj.openURl()
        loginObj.enterUserName(data.Name)
        loginObj.enterPassword(data.Password)
        loginObj.click()
        cy.wait(4000)
        loginObj.clockot()
       
    })
})
    describe('profilevisitandedit', () => {
        it('visitandedit',()=>{
            loginObj.openURl()
            loginObj.enterUserName(data.Name)
            loginObj.enterPassword(data.Password)
            loginObj.click()
            loginObj.profileVisit1()
            cy.wait(5000)
            loginObj.editProfile()
            loginObj.changeexperience(data.Years)
})
    })
    describe('createGoal', () => {
        it.only('creategoal',()=>{
            loginObj.openURl()
            loginObj.enterUserName(data.Name)
            loginObj.enterPassword(data.Password)
            loginObj.click()
            cy.wait(3000)
            loginObj.createGoal(data.Goalname,data.Description,data.Startdate)
            
            

            

            
})
    })