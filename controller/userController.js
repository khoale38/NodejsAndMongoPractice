import { v4 as uuidv4 } from 'uuid';
import userModel from '../model/user.js'



  export const getAllUser=async(req, res,next) => {
    const users = await userModel.find({});
    try {
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
export const createUser= async (req, res) => {
    const user =new userModel(req.body)
    try {
      await user.save();
      res.send({'status':'200','message':'Create User Successful'});
    } catch (error) {
      res.status(500).send(error);
    }
  }

export const getUserWithID = async (req, res,next) => {
    const {id,pass} =req.params
    try {
      const foundUser = await userModel.find({id:id})
      console.log(foundUser)
      if(foundUser.length==0 )
      {
       res.send({'status':'400','message':'User not found'})
       return
      }
      else
      res.send(
        foundUser
     )
    
    } catch (error) {
      console.log(error)
      res.send(error.message)
   
    }
   
  }

export const deleteUser = async(req,res)=>{
    const {id,pass} =req.params
    const foundUser = await userModel.find({id:id})
    try {
   
      if(foundUser.length==0 )
      {

       res.send({'status':'400','message':'Delete User not found'})
       return
      }

      await userModel.deleteOne({id:id})
      res.send({'status':'200','message':'Delete User Successful'});
    
    } catch (error) {
      console.log(error)
      res.send(error.message)
   
    }
   

   }

export const updateUser=async (req,res)=>{
    const {id,pass} =req.params
    const {firstname,lastname,age} =req.body
    const foundUser = await userModel.find({id:id})
    try {
   
      if(foundUser.length==0 )
      {

       res.send({'status':'400','message':'Update User not found'})
       return
      }

  
      await userModel.findOneAndUpdate({id:id},{firstname:firstname,lastname:lastname,age:age},{new: true})
      res.send({'status':'200','message':'Update User Successful'});
    
    } catch (error) {
      console.log(error)
      res.send(error.message)
   
    }
   
    
 
   }