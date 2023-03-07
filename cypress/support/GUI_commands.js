import { Home_Locators } from '../locators/home'
import { Login_Locators } from '../locators/login'
import { Navbar_Locators } from '../locators/navbar'

Cypress.Commands.add('login', (
    user = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    const login = () => {
        cy.visit('http://localhost')

        cy.get(Login_Locators.username).type(user)
        cy.get(Login_Locators.password).type(password, { log: false })
        cy.get(Login_Locators.loginButton).click()

        cy.get(Home_Locators.welcomeTitle).should('be.visible')
    }

    login();
})

Cypress.Commands.add('logout', () => {
    cy.get(Navbar_Locators.profile.toggleDropdown).click()
    cy.get(Navbar_Locators.profile.logout).click()

    cy.get(Login_Locators.username).should('be.visible')
})