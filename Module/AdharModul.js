import mongoose from "mongoose";

const Adhardata=new mongoose.Schema({
    Full_Name:{type:String,required:true},
    Gender:{type:String,required:true},
    Address:{type:String,required:true},
    State:{type:String,required:true},
    Adhar_Number:{type:String,required:true,
       validate:{
        validator: function(v)
        {
            return /^\d{12}$/.test(v)
        },
           message:props=>`${props.value} is not a valid 12 digits Adhar_Number`
       }
    },
    Pin_Code:{type:String,required:true,
        validate:{
            validator:function(N)
            {
                return /^\d{6}$/.test(N)
            },
            message:props=>`${props.value} is not a valid 6 digit pin code`
        }
    }
   
    
}, {
        timestamps:true
    })
export default mongoose.model("Adharverification",Adhardata,"Adharverifications")

