const Project_locators = {
    allProjectsSize : '.shortcuts-activity > .badge',
    project : (id) => `:nth-child(${id}) > .project-details > .flex-wrapper > .align-items-center > .d-flex > .text-plain > .project-full-name > .project-name`,

    projectTitle : '.home-panel-title',
    projectDescription : '.home-panel-description-markdown > p',

    issues: {
        link: '.shortcuts-issues',
        allIssuesSize : '#state-opened > .badge',
        issue : (id) => `#issue_${id} > .issue-box > .issuable-info-container > .issuable-main-info > .issue-title > .issue-title-text > a`,

        newIssue: '#new_issue_link',

        issueTitle : '.qa-title',
        issueDescription : '.md > p',
    },
    mergeRequests: '.shortcuts-merge_requests',
    ciCd: '.qa-link-pipelines'
}

export default { Project_locators }