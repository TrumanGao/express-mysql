const mysql = require('mysql')
const $_config = require('../public/constants/config')

const connection = mysql.createConnection($_config.connectionConfig)
connection.connect((err, res) => {
    if (err) {
        console.log('mysql连接报错', err)
    }
    console.log('mysql连接结果', res)
})

module.exports = connection