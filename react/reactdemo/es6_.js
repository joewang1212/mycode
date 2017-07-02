"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joewang on 17/06/2017.
 */
var sayHello = function sayHello() {
    document.write("es6");
};

sayHello();

var Student = function () {
    function Student() {
        _classCallCheck(this, Student);
    }

    _createClass(Student, [{
        key: "hello",
        value: function hello() {
            alert("ok");
        }
    }]);

    return Student;
}();

var stu = new Student();
stu.hello();

var Leo = function (_Student) {
    _inherits(Leo, _Student);

    function Leo() {
        _classCallCheck(this, Leo);

        return _possibleConstructorReturn(this, (Leo.__proto__ || Object.getPrototypeOf(Leo)).apply(this, arguments));
    }

    return Leo;
}(Student);

var l = new Leo();
l.hello();
