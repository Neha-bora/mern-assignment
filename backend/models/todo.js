const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
      description:{
          type:String,
          required:true
      },
      responsible:{
          type:String,
          required:true
      },
      priority:{
          type:String,
          required:true
      }
})

module.exports = mongoose.model("ToDo" , todoSchema)