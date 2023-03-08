import { Project } from '../../pageObjects/project'

describe('Create Project', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Successfully', () => {
        Project.create()
        cy.contains(Project.name).should('be.visible')
    })
})