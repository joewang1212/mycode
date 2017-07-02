/**
 * Created by joewang on 17/06/2017.
 */


//AMD
/*define(["./app.js"],function(str){
 document.body.innerHTML="<h1>"+str+"</h1>";
 });*/



//CMD
require("./css/style.css");
var str = require("./app.js");
document.getElementById("demo").innerHTML="<h1>"+str+"</h1>";


class Student{
    hello(){
        console.log("Hello");
    }
}

var s = new Student();
s.hello();