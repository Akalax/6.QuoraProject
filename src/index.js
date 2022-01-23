const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const route = require('./routes/route');
const multer = require('multer') //---It helps to recognise data if some send in form data-----

const app = express();

app.use(bodyParser.json()); // it help use recognise incoming body object is in json format
app.use(bodyParser.urlencoded({ extended: true })); // it is used to extract or access any particular key form the body data(req.body.name(key)) can say it helps us to use extension of dataBody
app.use(multer().any())

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/project_6_Akash?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))


app.use('/', route); // =>  "/" hyphen represents route or domain or home page, next variable "route" represents call back function that we want res or req

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});