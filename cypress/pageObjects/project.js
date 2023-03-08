import { New_Project } from '../locators/project/new_project'
import { Project_locators } from '../locators/project/project'
import { faker } from '@faker-js/faker'

let Project = {
    name: `Project ${faker.datatype.uuid()}`,
    description: faker.lorem.sentence(),

    create : () => {
        cy.visit('/projects/new')
        cy.get(New_Project.name).type(Project.name)

        cy.get(New_Project.description).type(Project.description)
        cy.get(New_Project.submit).click()
    },

    goToProject: (id) => {
        cy.visit('dashboard/projects')
        cy.get(Project_locators.project(id)).click()
    },

    newIssue: () =>  {
        cy.get(Project_locators.issues.link).click()
        cy.get(Project_locators.issues.newIssue).click()
    }
}

export default { Project }