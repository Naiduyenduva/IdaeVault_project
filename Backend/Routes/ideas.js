const {Router} = require('express');
const ideaRouter = Router();
const {userMiddleware} = require("../Middlewares/user")
const {ideaModel} = require('../db')


ideaRouter.post('/',userMiddleware, async function(req, res) {
     
    const userId = req.userId;
    const { title, techStack, description, keyFeatures } = req.body;

    const idea = await ideaModel.create({
        title: title,
        techStack: techStack,
        description: description,
        keyFeatures: keyFeatures,
        userId: userId
    })

    res.json({
        message: " idea created succesfully",
        // title: title,
        // techstack,
        // description,
    })

});



 ideaRouter.put('/update',userMiddleware, async function(req,res) {
    const userId = req.userId;
    const { title, techStack, description, keyFeatures,ideaId } = req.body;

    const idea = await ideaModel.updateOne({
        _id: ideaId,
        userId: userId
    },{
        title: title,
        techStack: techStack,
        description: description,
        keyFeatures: keyFeatures
    })

    res.json({
        message: " idea updated succesfully",
        idea
    })

})



ideaRouter.get('/all',userMiddleware, async function(req,res) {
    const userId = req.userId;

    const ideas = await ideaModel.find({});

    res.json({
        message: "get all the ideas",
        ideas
    })
})

module.exports = {
    ideaRouter: ideaRouter
}