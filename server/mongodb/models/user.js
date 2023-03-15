import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    avatar:{type:String,required:true},
    allProperties:{type:[{type:mongoose.Schema.Types.ObjectId,ref:'Property'}]},
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: mongoose.Types.ObjectId
      }

})
const userModel=mongoose.model('User',userSchema);

export default userModel