const controller = require('./../controller.js')
const user = require('./user.js')




async function get(){
    return await user.get()
}

async function create(dataJson){
    if ( controller.validate(user, dataJson) ) {
        let response = await user.create( controller.getNewDataJson(user, dataJson) ) 
        return {
            value: true,
            response: response
        }    
    }
    return {
        value: false,
        response: 'ERROR EN EL REQUEST'
    }
}

module.exports = {
    get,
    create
}