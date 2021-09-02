var express = require('express');
var router = express.Router();

// INSERT 增 post
// DELETE 删 delete
// UPDATE 改 put
// SELECT 查 get

// 新增异常
router.get('/', (req, res, next) => {
    res.render('index')
})

module.exports = router;
