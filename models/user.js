var mongoose=require('mongoose')
var validator=require('validator')


var UserSchema= new mongoose.Schema({
    name:{
        type:String,
        rquired:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!!')
            }
        }


    },
    password:{
        type:String,
        required:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot password')
            }
        }

    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positve number ')
            }
        }

    }


})


UserSchema.statics.CheckCredentials=async(email,password)=>{
    const user=await User.findOne({email})

    if(!user){
        throw new Error('User not exits')
    }
    return user

}


var User=mongoose.model('user',UserSchema)

module.exports=User