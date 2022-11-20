const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index.pug',{
        title: 'DK_Mediaworks'
    })
})
app.listen(port,() => console.log('This app sucessfully running in DK_Mediaworks Server'))
