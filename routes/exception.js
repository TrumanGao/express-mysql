var express = require('express');
const { route } = require('.');
var router = express.Router();
const connection = require('../modules/db')

router.post('/', (req, res, next) => {
  connection.query('INSERT INTO name(source,type,file) VALUES(1,2,3)', {}, (err, result) => {
    console.log('err, result', err, result)
    result.send(112233)
  })
})

router.get('/getExceptionByUserId', function (req, res, next) {
  connection.query('SELECT * FROM ExceptionInfo WHERE userId=1', {}, (err, result) => {
    console.log('err, result', err, result)
    res.send('445566')
  })
});

module.exports = router;
