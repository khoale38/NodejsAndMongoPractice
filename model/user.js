import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
const UserSchema = new mongoose.Schema({
    firstname: {
      type: String,
    },
    lastname: {
        type: String,
      },
    age: {
      type: Number,
      default: 0,
    },
    id:{
        type:String,
        default:()=>uuidv4()
    }
  });
  
  const User = mongoose.model("User", UserSchema);
  
   export default User