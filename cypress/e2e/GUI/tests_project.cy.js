import { Project } from '../../pageObjects/project'

describe('Suite of tests cases that covers all GUI access to project and respective scenarios', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Successfully', () => {
        Project.GUI.createProject()
        cy.contains(Project.name).should('be.visible')
    })
})