const express=require("express")

const router=express.Router()
let User=require("../models/user")
//add new user


router.post("/addUser",async(req,res)=>{
    const {name,email,phone}=req.body

    const user=  new User({
        name,email,phone
    })

    await user.save()
    res.send({msg:"user created",user})


})
// delete user
router.delete("/delete/:_id",async(req,res)=>{
const {_id}=req.params

const user=await User.findOneAndDelete({_id})

res.send({msg:"user Deleted with success !",user})

})


// edit User 
router.put("/edit/:_id",async(req,res)=>{
   const{_id}=req.params

   const user=await User.findOneAndUpdate({_id},req.body,{new:true})
 res.send({msg:"user updated successfuly!",user})
})


//display all userssss

router.get("/getall",async(req,res)=>{

    const users=await User.find()

    res.send({msg:"users fetched !",users})
})

module.exports=router
