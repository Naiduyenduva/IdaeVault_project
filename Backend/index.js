require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');



const app = express();
const { userRouter } = require('./Routes/user');
const { ideaRouter } = require('./Routes/ideas');

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/idea", ideaRouter);

app.get("/",function (req,res) {
    res.send('hello world')
})

const PORT = process.env.PORT || 3000;
async function main () {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT);
    console.log("port started");
}

main();