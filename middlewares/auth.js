const {user_roles, users, projects} = require('../database/data');

function setUser(req, res, next){
    if(req.body.userid){
        req.user = users.find(user=>user.userid === req.body.userid);
    }
    next();
}

function anyUserAuth(req, res, next){
    if(!req.user){
        return res.status(401).send("You need to sign in");
    }
    next();
}

function authRole(role){
    return (req, res, next)=>{
        if(req.user.role!==role){
            return res.status(401).send("Unauthenticated");
        }
        next();
    }
}

function setProject(req, res, next){
    if(req.params.projectid !== null){
        req.project = projects.filter(project=>project.projectid == req.params.projectid);
        console.log(req.project)
    }
    next();
}

function isProjectUser(req, res, next){
    if(req.body.userid !== null){
        if(req.user.role === user_roles.admin || req.project.userid == req.body.userid){
            next();
        }
        return res.send("You are not Authorized");
    }
}

function getUserProject(user) {
     if(user.role === user_roles.admin) return projects;
     return projects.filter(project=>project.userid === user.userid);
}

module.exports = {setUser, anyUserAuth, authRole, setProject, isProjectUser, getUserProject};