const basePage = require('./pages/basePage')
const userAccount = require('./pages/userAccount');
const header = require('./components/header');
const mainPage = require('./pages/mainPage');
const loginFlow = require('./pages/loginFlow');

describe('Suite for user account actions', ()=> {

    beforeEach(() => {
            cy.visit(Cypress.env('url'))
            basePage.closeCookieBanner()
        })
        

        it('Verifies that purshase appears in purshase history', ()=>{            
            loginFlow.successfulLogIn()
            //buy product
            userAccount.checkPurchaseHistory()

        })

        it('Verifies that product appears on viewed page', () => {
            loginFlow.successfulLogIn()
            header.searchForProductAndSelect('Тонометр Microlife A2 Standard с адаптером + манжета M-L')
            userAccount.checkViewedItems('Тонометр Microlife A2 Standard с адаптером + манжета M-L')
        })
    

        it.only('Verifies that video reviews can be opened', () => {
            mainPage.openReview()
        })
        
    





})