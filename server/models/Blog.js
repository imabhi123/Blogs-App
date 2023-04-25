const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        // required:true
    },
    title_2:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
    title_3:{
        type:String,
    },
    description_2:{
        type:String,
    },
    title_4:{
        type:String,
    },
    description_3:{
        type:String,
    },
    title_5:{
        type:String,
    },
    description_4:{
        type:String,
    },
    tag:{
        type:String,
        default:'General'
    },
    date:{
        type:Date,
        default:Date.now
    },
})
module.exports=mongoose.model('blogs',UserSchema);