import New_Issue from '../locators/issue/new_issue'
import { faker } from '@faker-js/faker'

var Issue = {
    issueTitle: `Issue ${faker.lorem.word()}`,
    issueDescription: faker.lorem.sentence(),

    create: () =>  {
        cy.get(New_Issue.issueTitle).type(Issue.issueTitle);
        cy.get(New_Issue.issueDescription).type(Issue.issueDescription);
        cy.get(New_Issue.createIssueButton).click();
    },
}

export default { Issue }