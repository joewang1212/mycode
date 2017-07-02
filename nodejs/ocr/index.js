/**

登陆 百度 bcs 控制台中心 申请 access key
https://console.bce.baidu.com/iam/#/iam/accesslist

**/
var ak = 'af151b38293240cc92f5deb4d766f4ce';
var sk = 'f8e1c58bd6f94c9bb914c868427a1157';
var ocr = require('./lib/ocr').create(ak, sk);

// 外部图片
ocr.scan({
    url: './img/2.jpg', // 支持本地路径
    type: 'text',
}).then(function(result) {
    return console.log(result)
}).catch(function(err) {
    console.log('err', err);
})