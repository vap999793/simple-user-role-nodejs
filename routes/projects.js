const express = require('express');
const { setProject, anyUserAuth, setUser, isProjectUser, getUserProject } = require('../middlewares/auth');
const projectRouter = express.Router();

projectRouter.get('/', anyUserAuth, (req, res)=>{
    return res.json(getUserProject(req.user));
})

projectRouter.get('/:projectid', anyUserAuth, setProject, isProjectUser, (req, res)=>{
    return res.json(req.project);
})

module.exports = projectRouter;