function validate(model, dataJson){
    let columns = []
    for(let column in dataJson){
        columns.push(column)
    }

    let requiredFieldsCopy = model.requiredFields.filter(function(element){
        return columns.some( column => column == element )
    })

    return requiredFieldsCopy.length == model.requiredFields.length
}

function getNewDataJson(model, dataJson){
    let newDataJson = {}
    model.fillable.forEach( element => {
        newDataJson[element] = dataJson[element] || null
    })
    return newDataJson
}

module.exports = {
    validate,
    getNewDataJson
}