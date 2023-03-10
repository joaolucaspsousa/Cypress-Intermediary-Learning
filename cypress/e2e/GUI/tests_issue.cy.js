import { Issue, Label } from '../../pageObjects/issue'
import { Project } from '../../pageObjects/project'

const options = { env: { snapshotOnly: true }}

describe('Suite of tests cases that covers all GUI access to issue and respective scenarios', options, () => {
    beforeEach(() => {
        cy.login()
    })
    
    let projectId = 36;
    let issueId = 1;

    it('Successfully', () => {
        Project.GUI.goToProject(projectId);
        Project.GUI.newIssue();
        Issue.GUI.createIssue()
    })

    it('Create and Set Label on Issue', () => {
        Label.API.createLabel(projectId)
        Issue.GUI.goToIssue(projectId, issueId)
        Issue.GUI.setLabel()
    })
})