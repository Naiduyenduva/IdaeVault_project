const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const{JWT_SECRET_USER} = require('../config');
const userRouter = Router();
const { userMiddleware } = require("../Middlewares/user");

const {userModel} = require("../db");
const {ideaModel} = require("../db");

userRouter.post('/signup', async function(req,res) {
    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = await bcrypt.hash(password,5);

    userModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "you signed up successfully"
    })
});


userRouter.post('/login',async function(req,res) {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email: email,
    });      

    const checkedPassword = await bcrypt.compare(password,user.password);
    
   if(user && checkedPassword) {
    const token = jwt.sign({
        id: user._id
    },JWT_SECRET_USER, {expiresIn: '5h'})

        res.json({
            token: token
        })

   }  else {
    res.status(403).json({
        message : "invalid credentials"
    })
    }

});

userRouter.get('/ideas',userMiddleware,async function(req,res) {
    const userId = req.userId;

    const ideas = await ideaModel.find({
        userId: userId
    });

    res.json({
        message: "get user registered ideas",
        ideas
    })
})

module.exports = {
    userRouter
}