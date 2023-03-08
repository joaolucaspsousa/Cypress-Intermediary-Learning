const Navbar_Locators = {
    issues: '.dashboard-shortcuts-issues',
    mergeRequests: '.dashboard-shortcuts-merge_requests',

    profile: {
        toggleDropdown: '.qa-user-avatar',
        name: '.user-name',
        profile: '.profile-link',
        settings: 'data-qa-selector[settings]',
        logout: '.sign-out-link'
    }
}

module.exports = { Navbar_Locators }