const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./network/routes.js')


var app = express()

app.use( bodyParser.json() )
app.use( 
    bodyParser.urlencoded(
        {
            extended: false
        }
    ) 
)


routes(app)


app.listen( 4000, function(){
    console.log( `Running at localhost:4000` )
})