import Event from "../models/event.model.js";
import mongoose from "mongoose";

export const getEvent = async (req,res)=>{
  try{
    const events = await Event.find({});
    res.status(200).json({success:true,data:events});
  }
  catch(error){
   console.log("error in fetching events:",error.message);
   res.status(500).json({success:false,message:"Server Error"});
  }
};

export const createEvent = async (req,res)=>{
   const event = req.body;
   if(!event.title || !event.date || !event.venue || !event.image){
    return res.status(400).json({sucess:false,message:"Please provide all fields"});
   }
   const newEvent = new Event(event)
   try{
    await newEvent.save();
    res.status(201).json({success:true,data:newEvent});
   }catch(error){
    console.error("Error Creating Event:",error.message);
    res.status(500).json({success:false,message:"Server Error"});
   }
};

export const deleteEvent = async (req,res)=>{
  const {id} = req.params;
  try{
    await Event.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Event Deleted"});
  }
  catch(error){
    res.status(400).json({success:false,message:"Cannot find Event"});
  }

};

export const updateEvent = async (req,res)=>{
  const {id} = req.params;
  const event = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false,message:"Invalid Event Id"});
  }
  try{
    const updatedEvent = await Event.findByIdAndUpdate(id,event,{new:true})
    res.status(200).json({success:true,data:updatedEvent});
  }
  catch(error){
    res.status(500).json({success:false,message:"Server Error"});

  }
};