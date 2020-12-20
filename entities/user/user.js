var conn = require('./../../databases/mysql/conn.js')

var table = 'usuarios'

var fillable = ['Nombres', 'Apellidos', 'Cedula', 'Password']
var requiredFields = ['Nombres', 'Apellidos', 'Cedula', 'Password']

async function get(){
    return await conn.get( table )
}

async function create( dataJson ){
    return await conn.create(table, dataJson)
}


module.exports = {
    fillable,
    requiredFields,
    get,
    create
}