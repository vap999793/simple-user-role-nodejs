const user_roles = {
    admin: 'admin',
    user: 'user'
}

module.exports = {
    user_roles,
    users:[
        {userid:1, role: user_roles.admin, name:"vishal"},
        {userid:2, role: user_roles.user, name:"thakare"},
    ],
    projects:[
        {projectid:1, userid:1, project_name:"vishal project"},
        {projectid:2, userid:2, project_name:"thakare project"},
    ]
}