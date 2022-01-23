const mongoose=require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const answerSchema=new mongoose.Schema({
    answeredBy:{
        type:objectId,
        ref:"Project6user",
        required:true
    },
    questionId:{
        type:objectId,
        ref:"project6question",
        required:true
    },
    text:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true})
module.exports=mongoose.model("project6answer",answerSchema)

