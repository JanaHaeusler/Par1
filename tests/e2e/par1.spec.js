/// <reference types="cypress" />

const testId = (id) => `[data-testid="${id}"]`
const NAV_HOME = testId('button-home-page')
const NAV_CREATE = testId('button-create-page')
const BUTTON_SAVE = testId('button-save')
const BUTTON_CANCEL = testId('button-cancel')
const BUTTON_SET_DELETE = testId('button-set-delete')
const BUTTON_EDIT = testId('button-edit')

describe('Par1 Test', function () {    
    it('creates a new game', () => {        
        cy.visit('/')        
        cy.contains('Your Games')  
        cy.get(NAV_CREATE).click()
        cy.url().should('include', '/create')
        cy.get(BUTTON_SAVE).should('be.disabled')
        cy.contains('Location').type('Horner Racecourse')
        cy.contains('Date').type('2020-12-24')
        cy.contains('Player(s)').type('John, Jane')
        cy.contains('Winner(s)').type('Jane')
        cy.contains('Total Shots Winner(s)').type('36')
        cy.get(BUTTON_SAVE).should('be.enabled')
        cy.get(BUTTON_SAVE).click()
        cy.url().should('not.include', '/create')
        cy.contains('Horner Racecourse')
        cy.contains('2020-12-24')
        cy.contains('John, Jane')
        cy.contains('Jane')
        cy.contains('36')
        cy.get(BUTTON_EDIT)
        cy.get(BUTTON_SET_DELETE)
    })
})