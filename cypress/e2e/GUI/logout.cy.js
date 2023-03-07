describe('Logout in Application', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Logout via GUI', () => {
        cy.logout()
    })
})