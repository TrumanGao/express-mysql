var express = require('express');
var router = express.Router();
const connection = require('../modules/ada-school-ide')

// INSERT 增 post
// DELETE 删 delete
// UPDATE 改 put
// SELECT 查 get

// 新增异常
router.post('/', (req, res, next) => {

  bodyFormat = {
    ...req.body,
    timestamp: new Date().getTime()
  }

  let keysStr = Object.keys(bodyFormat).join()
  let valsStr = Object.values(bodyFormat).join()
  let sqlStr = `INSERT INTO exception(${keysStr}) VALUES(${valsStr})`
  console.log('sqlStr', sqlStr)

  connection.query(sqlStr, {}, (err, result) => {
    console.log('响应', res)
    console.log('错误', err)
    res.send(result)
  })
})

module.exports = router;
