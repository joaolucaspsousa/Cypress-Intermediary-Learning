import New_Issue_Locators from '../locators/issue/new_issue'
import { Issue_Locators } from '../locators/issue/issue'
import { faker } from '@faker-js/faker'

var Issue = {
    issueTitle: `Issue ${faker.lorem.word()}`,
    issueDescription: faker.lorem.sentence(),

    GUI : {
        createIssue: () =>  {
            cy.get(New_Issue_Locators.issueTitle).type(Issue.issueTitle);
            cy.get(New_Issue_Locators.issueDescription).type(Issue.issueDescription);
            cy.get(New_Issue_Locators.createIssueButton).click();
        },

        goToIssue: async(IdProject, IdIssue) => {
            let issue = await Issue.API.getIssue(IdProject, IdIssue)
            cy.visit(`${issue.web_url}`)
        },

        setLabel: () => {
            cy.get(Issue_Locators.Labels.link).click();
            cy.contains(Label.name).click();
            cy.get(Issue_Locators.Labels.link).click();
            cy.get(Issue_Locators.Labels.badge).should('contain', Label.name)
        }
    },  
    
    API: {
        createIssue: (IdProject) => {
            cy.request({
                method: 'POST',
                url: `/api/v4/projects/${IdProject}/issues`,
                headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` },
                body: {
                    title: Issue.issueTitle,
                    description: Issue.issueDescription,
                }
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq(Issue.issueTitle)
                expect(response.body.description).to.eq(Issue.issueDescription)
            })
        },

        getAllIssues: (IdProject) => {
            return new Promise((resolve, reject) => {
                cy.request({
                    method: 'GET',
                    url: `/api/v4/projects/${IdProject}/issues`,
                    headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    resolve(response.body)
                })
            })
        },

        getIssue: (IdProject, IdIssue) => {
            return new Promise((resolve, reject) => {
                cy.request({
                    method: 'GET',
                    url: `/api/v4/projects/${IdProject}/issues/${IdIssue}`,
                    headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    resolve(response.body)
                })
            })
        },

        deleteIssue: (IdProject, IdIssue) => {
            return new Promise((resolve, reject) => {
                cy.request({
                    method: 'DELETE',
                    url: `/api/v4/projects/${IdProject}/issues/${IdIssue}`,
                    headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
                }).then((response) => {
                    expect(response.status).to.eq(204)
                    resolve(response.body)
                })
            })
        },

        deleteAllIssues: async(IdProject) => {
            let issues = await Issue.API.getAllIssues(IdProject);
            issues.forEach(issue => {
                Issue.API.deleteIssue(issue.iid)
            });
        }
    },
}

var Label = {
    name: `Label ${faker.lorem.word()}`,
    color: '#FFAABB',

    API: {
        createLabel: (IdProject) => {
            cy.request({
                method: 'POST',
                url: `/api/v4/projects/${IdProject}/labels`,
                headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` },
                body: {
                    name: Label.name,
                    color: Label.color,
                }
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(Label.name)
                expect(response.body.color).to.eq(Label.color)
            })
        }
    },
}

export default { Issue, Label}