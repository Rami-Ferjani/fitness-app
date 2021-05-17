const mongoose=require('mongoose');

const Schema=mongoose.Schema;

export const workoutSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    days:{
        type:Array,
        required:true,
    }
});

//module.exports=Workout=mongoose.model('workout',workoutSchema);