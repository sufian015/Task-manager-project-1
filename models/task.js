const mongoose=require('mongoose');

const taskSchema=mongoose.Schema(
     {
          name:{
               type:String,
               require:[true,"please add a task name"],
          },
          completed: {
               type: Boolean,
               required: true,
               default: false,
             }
     },
     { timestamps: true,versionKey: false }
)

const task=mongoose.model("task",taskSchema);
module.exports=task;
