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


app.listen( process.env.PORT || 4000, '0.0.0.0', function(){
    console.log( `Running at port 4000` )
})