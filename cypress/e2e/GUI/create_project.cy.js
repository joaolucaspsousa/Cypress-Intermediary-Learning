import { Project } from '../../pageObjects/project'

describe('Create Project', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Successfully', () => {
        const project = new Project()
        project.create()
        cy.contains(project.name).should('be.visible')
    })
})