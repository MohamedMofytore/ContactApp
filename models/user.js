const mongoose=require("mongoose")

const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
})




const User = mongoose.model("User", userSchema); 

module.exports = User;

