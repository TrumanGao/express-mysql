var express = require('express');
var router = express.Router();
const connection = require('../modules/ada-school-ide')

// INSERT 增 post
// DELETE 删 delete
// UPDATE 改 put
// SELECT 查 get

// 新增异常
router.post('/', (req, res, next) => {
  connection.query('INSERT INTO exception(workId, userId, tenantId ) VALUES(1, 2, 3)', {}, (err, result) => {
    console.log('请求', req)
    console.log('响应', res)
    console.log('错误', err)
    console.log('结果', result)
    res.send(result)
  })
})

module.exports = router;
