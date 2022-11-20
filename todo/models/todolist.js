const mongoose = require("mongoose") // requiring the mongoose package

const todoSchema = new mongoose.Schema({

  //id:mongoose.Types.ObjectId,
  // creating a schema for todo
  Description: {
    // field1: task
    type: String, // task is a string
    
  },
  Completed: {
    // field2: completed
    type: Boolean, // it is a boolean
    
  },
  Deleted: {
    // field2: completed
    type: Boolean, // it is a boolean
   
  },
})

const todoModel = mongoose.model("todolists", todoSchema) // creating the model from the schema

module.exports = todoModel // exporting the model
