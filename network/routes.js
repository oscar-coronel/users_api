const user = require('../entities/user/router.js')

function routes( app ){
    app.use('/user', user)
}

module.exports = routes