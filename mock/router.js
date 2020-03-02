const express = require("express");
const router = express.Router();

const url = require('url');
const fs = require('fs');
// const multer=require('multer');

// 类目详细信息
const sorts = require('./data/sorts')
const sortsContent = require('./data/sorts/sortsContent')
// 我的收藏
const collection = require('./data/mycollect')
// 粉丝和关注
const guanzhu = require('./data/gzandfs/gz.js')
const fensi = require('./data/gzandfs/fs.js')
const picData = require('./data/find');
const imgData = require('./data/huatibang')
const daren = require('./data/daren');
const shangpin = require('./data/shangpin')
const faqidianjin = require('./data/faqidianjin');
const bannerList=require('./upload/banner');
const picList=require('./upload/picture');
const tipList=require('./upload/dialy')

// 1.首页轮播图接口
router.get("/banner",(res,req)=>{
    req.send(bannerList)
})

// 2.图片接口
router.get("/pic",(res,req)=>{
    req.send(picList)
})



//3.日记接口
router.get("/tip",(res,req)=>{
    req.send(tipList)
})

router.post('/login',function(res,req){
    let username = res.body.username;
    let password = res.body.password;
    console.log(username,password);
    if (username == 'admin' &&password == '123'){
        req.send({
            status:200,
            msg:'登录成功'
        })
    }else{
        req.send({
            msg:'用户名或密码错误'
        })
    }
})

router.get('/find',function(res,req){
    req.send(picData);
})
// 搜索类目列表
router.get('/sorts',function(res,req){
    var sorts_id = res.query.id;
    var data = {}
    for(var i=0;i<sorts.data.length;i++){
        if(sorts.data[i].id == sorts_id){
            data = {
                status:200,
                data:sorts.data[i]
            }
            break;
        }
    }
    if(data){
        req.send(data);
    } else {
        req.send({
            status:200,
            msg:'error'
        })
    }
})
// 商品信息
router.get('/sorts/getcontent',function(res,req){
    var product_id = res.query.id;
    console.log(product_id,sortsContent.data.id)
    if(product_id == sortsContent.data.id){
        req.send(sortsContent)
    } else{
        req.send({
            status:200,
            msg:'error'
        })
    }
})

// 我的收藏
router.get('/mine/collection',function(res,req){
    var id = res.query.id;
    if(id == collection.id){
        req.send(collection)
    } else {
        req.send({
            status:200,
            msg:'error'
        })
    }
})

router.get('/mine/gzandfs',function(res,req){
    var type = res.query.id;
    if(type==1){
        req.send(guanzhu)
    } else if(type==2){
        req.send(fensi)
    } else {
        req.send({
            status:200,
            msg:'error'
        })
    }
    
})
router.post('/login',function(res,req){
    let username = res.body.username;
    let password = res.body.password;
    console.log(username,password);
    if (username == 'admin' &&password == '123'){
        req.send({
            status:200,
            msg:'登录成功'
        })
    }else{
        req.send({
            msg:'用户名或密码错误'
        })
    }
})

router.get('/find',function(res,req){
    req.send(picData);
});
router.get('/find/img',function (res,req) {
    req.send(imgData);
});
router.get('/find/daren',function (res,req) {
req.send(daren);
})
router.get('/find/shangpin',function (res,req) {
req.send(shangpin);
});
router.get('/find/faqidianjin',function (res,req) {
    let id = res.query.id;
    console.log(id);
    if (id==1001){
        req.send(faqidianjin);
    }else{
        req.send({
            msg:'id信息错误'
        })
    }

})

module.exports = router