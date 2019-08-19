const express=require('express')
const app=express()
const mongoose=require('mongoose')

const UserRouter=require('./routes/user')

mongoose.connect('mongodb://localhost/user',{useNewUrlParser:true,useCreateIndex:true})


app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(UserRouter)



app.listen(9876,()=>{
    console.log('server started')
})