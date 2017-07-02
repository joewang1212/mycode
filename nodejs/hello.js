/*class Student {
    hello() {
        console.log("Hello World");
    }
}

let s = new Student();
s.hello();

var a = 10;
//当前模块的变量
console.log(global.a);
*/

//当前文件解析后的绝对路径
// console.log(__filename); ///Users/joewang/git/mycode/nodejs/hello.js

//模块加载
console.log("this 2.js");
console.log(module);
module.exports = {
    m: "ok",
    say: function() {
        console.log("say");
    }
}