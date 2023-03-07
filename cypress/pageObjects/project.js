import New_Project from '../locators/new_project'
import { faker } from '@faker-js/faker'

class Project {
    name;
    description;

    constructor() {
        this.name = `Project ${faker.datatype.uuid()}`
        this.description = faker.lorem.sentence()
    }

    create() {
        cy.visit('/projects/new')
        cy.get(New_Project.name).type(this.name)

        cy.get(New_Project.description).type(this.description)
        cy.get(New_Project.submit).click()
    }
}

export default { Project }