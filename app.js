var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

// view engine setup
var ejs = require('ejs');
app.engine('.html', ejs.__express) // 设置视图引擎后缀，为.html
app.set('view engine', 'html'); // 设置视图引擎为html
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const $_utils = require('./public/utils/index.js')
const $_config = require('./public/constants/config.js')

// 配置接口
const indexRouter = require('./routes/index')
app.use('/ada-frontend-exception', indexRouter)
// scratch 项目
var adaSchoolIdeRouter = require('./routes/ada-school-ide.js')
app.use('/ada-frontend-exception/ada-school-ide', adaSchoolIdeRouter)

// catch 404 and forward to error handler
var createError = require('http-errors');
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log('错误原因', err)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * 配置端口号
 * Get port from environment and store in Express.
 */
var port = $_utils.normalizePort($_config.serverPort);
app.set('port', port);

/**
 * 创建 http 服务，监听端口号
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */
var http = require('http');
var debug = require('debug')('express-mysql:server');
var server = http.createServer(app);
server.listen(port);
server.on('error', $_utils.onError);
server.on('listening', $_utils.onListening.bind(null, server, debug));

module.exports = app;
