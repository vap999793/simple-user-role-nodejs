const { application } = require('express');
const express = require('express');
const { projects } = require('./database/data');
const { setUser } = require('./middlewares/auth');
const projectRouter = require('./routes/projects');
const userRouter = require('./routes/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(setUser);

app.use(userRouter);
app.use('/projects', projectRouter);


module.exports = {app};