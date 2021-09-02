const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gfx93728',
    connectTimeout: 30,
    database: 'ada-school-ide'
})
connection.connect((err, res) => {
    if (err) {
        console.log('mysql连接报错', err)
    }
    console.log('mysql连接结果', res)
})

module.exports = connection