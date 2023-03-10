import { Project } from '../../pageObjects/project'

describe('Suite of tests cases that covers all access to project endpoints and respective scenarios', () => {
    it('Create a new project successfully', () => {
        Project.API.createProject();
    })

    it('Get all projects successfully', async() => {
        let projects = await Project.API.getAllProjects();
        console.log(projects)
    })

    it('Get a project successfully', async() => {
        let project = await Project.API.getProject(27);
        console.log(project)
    })

    /*it('Delete a project successfully', () => {
        Project.API.deleteProject(26);
    })

    it('Delete all projects successfully', () => {
        Project.API.deleteAllProjects();
    })*/
})