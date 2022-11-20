const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://subha:1234@cluster0.mvu3bke.mongodb.net/?retryWrites=true&w=majority", {
  // connecting to the mongodb database name: "todo-app" locally
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connection")
}
).catch(err=>{
    console.log("Database error"+ err)
})
mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
mongoose.Promise = Promise // setting mongoose's Promise to use Node's Promise

module.exports.Todo = require("./todolist") // requiring the todo model that we just created in mongodb
