"use strict";
// 構造的部分型のテスト
var tmpDeveloper = {
    name: "Tom",
    age: 22,
    experience: 3,
    greeting: function (message) {
        console.log(message);
    }
};
// Human型が必要な情報満たすため、"experience"についてはエラーにならない。
var user = tmpDeveloper;
// interfaceをクラスに適応する(複数適応可能)
var Developer = /** @class */ (function () {
    function Developer(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Developer.prototype.greeting = function (message) {
        console.log(message);
    };
    return Developer;
}());
var developer = new Developer("Bob", 44, 15);
developer.greeting("hello");
