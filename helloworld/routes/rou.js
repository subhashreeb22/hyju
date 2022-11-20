const express = require('express')
const router=express.Router()
router.get('/',(req,res)=>
{
    res.json('helloworld')
})
     module.exports=router