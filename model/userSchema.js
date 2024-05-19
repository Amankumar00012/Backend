import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcrypt";
// import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true , "Ples Provide Name"],
        minLength : [4, "name must be contain altest 3 charester"],
        maxLength : [32 , "name must contain maximum atleast 32 charester"]
    },
    email : {
        type: String,
        required : [true , "Pls Provide Email"],
        validate : [validator.isEmail ,"Pls Provide valid Email"]
    },
    password : {
        type : String,
        required : [true , "Please Provide Password"],
        minLength : [8,"Password must containe alteast 8 charester"],
        maxLength : [20,"Password must contain maximum atleast 32 charester"]
    }
});

// hasing password

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});

export const User = mongoose.model("User", userSchema);