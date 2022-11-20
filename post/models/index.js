const mongoose = require("mongoose")
//mongoose.connect("mongodb+srv://lakshmi1:EwOUimeFClkhS2gL@cluster0.tiwjjhu.mongodb.net/login2", {
  mongoose.connect("mongodb+srv://subha:1234@cluster0.wza2wla.mongodb.net/?retryWrites=true&w=majority", {
  // connecting to the mongodb database name: "todo-app" locally
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  //useUnifiedTclsopology: true,
}).then(()=>{
    console.log("Database Connection")
}
).catch(err=>{
    console.log("Database error"+ err)
})
mongoose.set("debug", true) // enabling debugging information to be printed to the console for debugging purposes
mongoose.Promise = Promise // setting mongoose's Promise to use Node's Promise

module.exports.login = require("./login") // requiring the todo model that we just created in mongodb
