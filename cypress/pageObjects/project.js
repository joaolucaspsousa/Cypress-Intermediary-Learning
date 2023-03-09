import { New_Project } from '../locators/project/new_project'
import { Project_locators } from '../locators/project/project'
import { faker } from '@faker-js/faker'

let Project = {
    name: `Project ${faker.datatype.uuid()}`,
    description: faker.lorem.sentence(),

    GUI: {
        createProject: () => {
            cy.visit('/projects/new')
            cy.get(New_Project.name).type(Project.name)

            cy.get(New_Project.description).type(Project.description)
            cy.get(New_Project.submit).click()
        },

        goToProject: async(id) => {
            let project = await Project.API.getProject(id)
            cy.visit(`${project.http_url_to_repo}`)
        },

        newIssue: () => {
            cy.get(Project_locators.issues.link).click()
            cy.get(Project_locators.issues.newIssue).click()
        }
    },

    API: {
        createProject: () => {
            cy.request({
                method: 'POST',
                url: '/api/v4/projects',
                headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` },
                body: {
                    name: Project.name,
                    description: Project.description,
                    initialize_with_readme: true
                }
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(Project.name)
                expect(response.body.description).to.eq(Project.description)
            })
        },

        getAllProjects: () => {
            return new Promise((resolve, reject) => {
                cy.request({
                    method: 'GET',
                    url: '/api/v4/projects',
                    headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    resolve(response.body)
                })
            })
        },

        getProject: (id) => {
            return new Promise((resolve, reject) => {
                cy.request({
                    method: 'GET',
                    url: `/api/v4/projects/${id}`,
                    headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    resolve(response.body)
                })
            })
        },

        deleteProject: (id) => {
            cy.request({
                method: 'DELETE',
                url: `/api/v4/projects/${id}`,
                headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
            }).then((response) => {
                expect(response.status).to.eq(202)
            })
        },

        deleteAllProjects: () => {
            cy.request({
                method: 'GET',
                url: '/api/v4/projects',
                headers: { Authorization: `Bearer ${Cypress.env('gitlabAccessToken')}` }
            }).then((response) => {
                expect(response.status).to.eq(200)
                response.body.forEach(project => {
                    Project.API.deleteProject(project.id)
                })
            })
        }
    }
}

export default { Project }