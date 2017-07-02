/**
 * Created by joewang on 17/06/2017.
 */
var sayHello=()=>{
    document.write("es6");
}

sayHello();

class Student{
    hello(){
        alert("ok");
    }
}

let stu = new Student();
stu.hello();

class Leo extends Student{

}

let l = new Leo();
l.hello();