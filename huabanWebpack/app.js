/**
 * Created by Administrator on 2017/4/6.
 */








//---------------------------------------------
//   创建app应用 加载express模板               //
//---------------------------------------------

var express = require("express");
var app = express();



//---------------------------------------------
//   配置应用模板                            //
//  第一个参数模板引擎,第二内容               //
//---------------------------------------------
var swig = require("swig");
app.engine("html", swig.renderFile);
/*配置视图文件路径*/
app.set("views", "./");
/*注册所使用的模板引擎*/
app.set('view engine', 'html');


//-----------------------------------
//   设置静态文件托管               //
//----------------------------------
app.use('/public', express.static(__dirname + '/public'))


//-----------------------------------
//   防止缓存                      //
//----------------------------------
swig.setDefaults({cache: false})
app.disable('view cache');

//-----------------------------------
//   模板渲染                       //
//----------------------------------
app.get("/", function (req, res, next) {
    res.render('index');
});
app.get("/detial", function (req, res, next) {
    res.render('detial');
});


//-----------------------------------
//   配置前台ajax解析模板            //
//----------------------------------
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


//----------------------------
//   设置路由模块            //
//---------------------------

app.use('/api',require('./routers/api'));

app.listen(8288);