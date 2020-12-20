const { result } = require('lodash')
const mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    user: 'sql10383111',
    password: 'LBnHDyUTyY',
    database: 'sql10383111'
})

conn.connect(function(error){
    if(error) throw error
    console.log('Connected!')
})

async function get(table){
    return new Promise((resolve, reject) => {
        sql = `SELECT * FROM ${ table }`
        conn.query(sql, function(error, result, fields){
            resolve(result)
        })
    })
}

async function create(table, dataJson){
    return new Promise((resolve, reject) => {

        let columns = []
        let dataToInsert = []
        for(let column in dataJson){
            columns.push( column )
            dataToInsert.push( dataJson[column] )
        }

        let sql = `INSERT INTO ${ table } (${ columns.join(',') }) VALUES (?)`
        let values = [ dataToInsert ]

        conn.query(sql, values, function(error, result, fields){
            if (error) throw error
            resolve( result.insertId )
        })
    })
}


module.exports = {
    conn,
    get,
    create
}