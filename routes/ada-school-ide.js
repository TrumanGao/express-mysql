var express = require('express');
var router = express.Router();
const connection = require('../modules/ada-school-ide')

// INSERT 增 post
// DELETE 删 delete
// UPDATE 改 put
// SELECT 查 get

// 新增异常
router.post('/', (req, res, next) => {
  connection.query('INSERT INTO exception(source, type, file) VALUES(1, 2, 3)', {}, (err, result) => {
    console.log('req', req)
    console.log('err', err)
    console.log('result', result)
    result.send(112233)
  })
})

module.exports = router;
