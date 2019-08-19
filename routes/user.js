const route = require('express').Router()
const User=require('../models/user')


route.post('/singup', async (req,res)=>{
    const user =await new User(req.body)
    try{
    await user.save()
    res.send(user)
    }
    catch(e){
        res.send(e)
    }
})

route.post('/login',async (req,res)=>{
    try{
        const user=await User.CheckCredentials(req.body.email,req.body.password)
        res.send(user)
       

    }
    catch(e){
    res.send("Error is :  "+e)

    }
    
})

module.exports = route