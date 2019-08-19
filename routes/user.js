const route = require('express').Router()
const User=require('../models/user')


route.post('/singup', (req,res)=>{
    const user =new User(req.body)
    try{
    user.save()
    res.send(user)
    }
    catch(e){
        res.send(e)
    }
})

route.post('/login',async (req,res)=>{
    try{
        const user=await User.CheckCredentials(req.body.email,req.body.password)
        if(user.password===req.body.password){
            res.send('Password is matchng')
        }
       

    }
    catch(e){
    res.send("Error is :  "+e)

    }
    
})

module.exports = route