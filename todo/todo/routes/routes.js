const express = require("express") // our express server
const router = express() // generate an app object
const Todo = require("../models/todolist")

router.get("/",async (req,res)=>{
    try
    {
        const doLists = await Todo.find()
        res.json(doLists)
    }
    catch(err)
    {
        res.status(500).json({message : err.message})
    }
})
router.post("/", async (req, res, next) => {
    try {
      const doLists = await Todo.create(req.body)
      return success(res, doLists)
    } 
    catch (err) {
      res.status(500).json ({message: "failed to create todos" })
    }
  })

  router.put("/todos/:id", async (req, res, next) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return success(res, todo)
    } catch (err) {
      next({ status: 400, message: err+ "failed to update todo" })
    }
  })
  router.delete("/todos/:id", async (req, res, next) => {
    try {
      await Todo.findByIdAndRemove(req.params.id)
      return success(res, "todo deleted!")
    } catch (err) {
      next({ status: 400, message: err +"failed to delete todo" })
    }
  })

  function success(res, payload) {
    return res.status(200).json(payload)
  }
  

  router.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
      status: err.status || 400,
      message: err.message || "there was an error processing request",
    })
  })
  

module.exports=router   
