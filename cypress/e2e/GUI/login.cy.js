describe('Login in Application', () => {
    it('Login via GUI', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'), { cacheSession: false })
    })
})