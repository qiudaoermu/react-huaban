/**
 * Created by Administrator on 2017/4/8.
 */
var express = require('express')

var router = express.Router()

var result;
var TEST_TABLE = 'database';

var newsList
var mongo=require("mongodb");
var host="localhost";
var boadrResult = ""
//var port=mongo.Connection.DEFAULT_PORT;
var server=mongo.Server(host,27017,{auto_reconnect:true});

var db=new mongo.Db("huaban",server,{safe:true});
db.open(function (err,db) {
    db.collection("huanbanDate", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    result = docs;

                    db.close();
                }
            });
        }
    });
    db.collection("huabanBoardData", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    boadrResult = docs;
                    //console.log(boadrResult)
                    db.close();
                }
            });
        }
    });

});

router.post('/user/getDate', function (req, res, next) {

    var index=req.body.index;

    res.send(result[index])

});
router.post('/user/newsList', function (req, res, next) {
   // console.log(newsList)

    var targetData=req.body.targetData;

    res.send(newsList[targetData])

});


router.post('/user/newsDetail', function (req, res, next) {


    var foo=req.body;
    var para = req.params;


    var json={a:1,b:3}
    res.send(json)

});
router.post('/user/getBoardData', function (req, res, next) {


res.send(boadrResult)

});

module.exports = router;