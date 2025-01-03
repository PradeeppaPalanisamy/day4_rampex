//in model file we are giving properties of mongodb so import mongoose
// in this file we will define how the model should look

import mongoose from 'mongoose';
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true      // means compulsory name value should be present in all data
    },
    email:{
        type:String,
        required:true  
    },
    address:{
        type:String,
        required:true  
    }
});
export default mongoose.model("users",userSchema);