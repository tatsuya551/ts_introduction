"use strict";
// 構造的部分型のテスト
const tmpDeveloper = {
    name: "Tom",
    age: 22,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
// Human型が必要な情報満たすため、"experience"についてはエラーにならない。
const user = tmpDeveloper;
// interfaceをクラスに適応する(複数適応可能)
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const developer = new Developer("Bob", 44, 15);
developer.greeting("hello");
