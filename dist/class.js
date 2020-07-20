"use strict";
// Abstractクラスにして、継承にのみに使えるようにする
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hi ${this.name} ${this.age}`);
        this.explainJob();
    }
}
// Personクラスの継承
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    // Personクラスのメソッドを呼ぶ
    explainJob() {
        console.log(`My job is ${this.subject}`);
    }
    // ゲッター・セッター
    get subject() {
        return this._subject;
    }
    ;
    set subject(value) {
        this._subject = value;
    }
    ;
    static getTeacher() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Taro", 33, "English");
        return Teacher.instance;
    }
}
const taro = Teacher.getTeacher();
const taro2 = Teacher.getTeacher();
taro.subject = "Math";
console.log(taro, taro2);
