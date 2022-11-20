const express = require('express')
 const app = express() 
 const port = 3000 
 app.set('view engine', 'pug') 
 app.get('/',function (req, res) 
 {   
      res.render('index',
       { 
        title: 'Hey express', message: 'Hello there!' }) 
    }) 
    app.listen(port,() => console.log('example app listening on port ${port}!'))