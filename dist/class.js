"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstractクラスにして、継承にのみに使えるようにする
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function () {
        console.log("Hi " + this.name + " " + this.age);
        this.explainJob();
    };
    return Person;
}());
// Personクラスの継承
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    // Personクラスのメソッドを呼ぶ
    Teacher.prototype.explainJob = function () {
        console.log("My job is " + this.subject);
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        // ゲッター・セッター
        get: function () {
            return this._subject;
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Teacher.getTeacher = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Taro", 33, "English");
        return Teacher.instance;
    };
    return Teacher;
}(Person));
var taro = Teacher.getTeacher();
var taro2 = Teacher.getTeacher();
taro.subject = "Math";
console.log(taro, taro2);
