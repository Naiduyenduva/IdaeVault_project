const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});

const ideaSchema = new Schema({
    title: String,
    description: String,
    techStack: String,
    keyFeatures: String,
    userId: ObjectId
});

const userModel = mongoose.model("user",userSchema);
const ideaModel = mongoose.model("ideas",ideaSchema);

module.exports = {
    userModel,
    ideaModel
}