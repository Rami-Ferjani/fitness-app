const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Create Schema*
const PersonSchema=new Schema({
    name: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    admin:{
        type:Boolean,
        required:true
    }
});
module.exports=Person=mongoose.model('person',PersonSchema);