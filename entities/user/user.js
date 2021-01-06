var conn = require('./../../databases/mysql/conn.js')

var table = 'usuarios'

var fillable = ['Cedula', 'Nombres', 'Apellidos', 'Curso']
var requiredFields = ['Cedula', 'Nombres', 'Apellidos', 'Curso']

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