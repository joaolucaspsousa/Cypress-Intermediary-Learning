import { Issue } from '../../pageObjects/issue'
import { Project } from '../../pageObjects/project'

describe('Create Issue', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Successfully', () => {
        Project.goToProject(1);
        Project.newIssue();
        Issue.create()
    })
})