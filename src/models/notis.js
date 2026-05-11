import mongoose from "mongoose";
const NotisSchema = new mongoose.Schema(

{
    notisId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    src:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }
}

    );

export default mongoose.models.Notis || mongoose.model("Notis", NotisSchema);