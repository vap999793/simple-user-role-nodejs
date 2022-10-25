const express = require('express');
const { anyUserAuth, authRole } = require('../middlewares/auth');
const {user_roles} = require('../database/data');
const userRouter = express.Router();

userRouter.get('/', (req, res)=>{
    return res.send("This is Homepage");
})

userRouter.get('/dashboard', anyUserAuth, (req, res)=>{
    return res.send("This is Dashboard Page");
})

userRouter.get('/admin', authRole(user_roles.admin), (req, res)=>{
    return res.send("This is Admin Page");
})

module.exports = userRouter