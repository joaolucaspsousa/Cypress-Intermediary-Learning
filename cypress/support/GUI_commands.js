import { Home_Locators } from '../locators/home'
import { Login_Locators } from '../locators/login'
import { Navbar_Locators } from '../locators/navbar'

Cypress.Commands.add('login', (
    user = Cypress.env('username'),
    password = Cypress.env('password'),
    { cacheSession = true } = {}
) => {
    const login = () => {
        cy.visit('http://localhost/users/sign_in')

        cy.get(Login_Locators.username).type(user)
        cy.get(Login_Locators.password).type(password, { log: false })
        cy.get(Login_Locators.loginButton).click()

        cy.get(Navbar_Locators.profile.toggleDropdown).should('be.visible')
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000}).should('not.eq', '/users/sign_in')
    }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(user, login, options)
        return;
    } 

    login()
})

Cypress.Commands.add('logout', () => {
    cy.visit('/')
    cy.get(Navbar_Locators.profile.toggleDropdown).click()
    cy.get(Navbar_Locators.profile.logout).click()

    cy.get(Login_Locators.username).should('be.visible')
})