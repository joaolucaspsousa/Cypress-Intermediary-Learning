import { Issue } from '../../pageObjects/issue'

describe('Suite of tests cases that covers all API access to issue and respective scenarios', () => {
    let projectId = 36;
    let issueId = 1;

    it('Create a new issue successfully', () => {
        Issue.API.createIssue(projectId);
    })    

    it('Get all issues successfully', async() => {
        let issues = await Issue.API.getAllIssues(projectId);
        console.log(issues)
    })

    it('Get an issue successfully', async() => {
        let issue = await Issue.API.getIssue(projectId, issueId);
        console.log(issue)
    })

    /*it('Delete an issue successfully', () => {
        Issue.API.deleteIssue(projectId, 12);
    })

    it('Delete all issues successfully', () => {
        Issue.API.deleteAllIssues(projectId);
    })*/
})