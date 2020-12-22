var conn = require('./../../databases/mysql/conn.js')

var table = 'usuarios'

var fillable = ['Nombres', 'Apellidos', 'Cedula', 'Email', 'Telefono']
var requiredFields = ['Nombres', 'Apellidos', 'Cedula', 'Email', 'Telefono']

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