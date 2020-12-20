const express = require('express')
const response = require('../../network/response.js')
const userController = require('./user_controller.js')

var router = express.Router()

router.get('/', async function( req, res ){
    let result = await userController.get()
    response.success(req, res, 200, result)
})

router.post('/', async function(req, res){
    let result = await userController.create(req.body)
    if ( result['value'] ) {
        response.success(req, res, 200, result)
    } else {
        response.error(req, res, 500, result)
    }
})

module.exports = router