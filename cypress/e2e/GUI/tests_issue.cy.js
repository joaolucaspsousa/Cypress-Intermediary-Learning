import { Issue } from '../../pageObjects/issue'
import { Project } from '../../pageObjects/project'

describe('Suite of tests cases that covers all GUI access to issue and respective scenarios', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Successfully', () => {
        Project.GUI.goToProject(27);
        Project.GUI.newIssue();
        Issue.GUI.create()
    })
})