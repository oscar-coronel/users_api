exports.success = function(req, res, status, data){
    res.status(200 || status).send({
        data: data
    })
}

exports.error = function(req, res, status, data){
    res.status(500 || status).send({
        data: data
    })
}