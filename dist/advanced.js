"use strict";
var _a, _b, _c;
var aruru = {
    name: "Aruru",
    role: "front-end",
    follower: 4000,
};
////////////////////
//// Type Guard ////
////////////////////
// 7つの型を使った場合(typeof)
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadworker) {
    // Engineer型の場合
    if ("role" in nomadworker) {
        console.log(nomadworker.role);
    }
    // Blogger型の場合
    if ("follower" in nomadworker) {
        console.log(nomadworker.follower);
    }
}
// クラスを使った場合(instanceof)
var Dog = /** @class */ (function () {
    function Dog() {
        // タグの設置
        this.kind = "dog";
    }
    Dog.prototype.speak = function () {
        console.log("Bow-wow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        // タグの設置
        this.kind = "bird";
    }
    Bird.prototype.speak = function () {
        console.log("Tweet-tweet");
    };
    Bird.prototype.fly = function () {
        console.log("Flutter");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
    switch (pet.kind) {
        case "bird":
            return console.log("Bird");
        case "dog":
            return console.log("Dog");
    }
}
havePet(new Bird());
havePet(new Dog());
//////////////////////
//// 型アサーション ////
//////////////////////
// 1.末尾に "as" をつけるパターン
// const input1 = document.getElementById("test-input") as HTMLInputElement;
// 2.先頭にに <タグ> をつけるパターン
// const input2 = <HTMLInputElement>document.getElementById("test-input");
/////////////////////////
//// constアサーション ////
/////////////////////////
var array = [10, 20]; // array: number[]
var array2 = [10, 20]; // array2: readonly [10, 20]
// name: string・age: number
var peter = {
    name: "Peter",
    age: 20
};
// readonly name: "Peter"・readonly age: 20
var peter2 = {
    name: "Peter",
    age: 20
};
var downloadedData = {
    id: 1
};
// downloadedData.userの値がない時はundefined
var optionalChaining = (_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first;
// downloadedData.userの値が空文字・0でも"no-user"が返される
var nullishCoalescing = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
function toLowerCase(x) {
    if (typeof x === "string") {
        return x.toLowerCase();
    }
    return x;
}
var lowerHello = toLowerCase("HELLO");
var lowerHello2 = toLowerCase(33);
var tmpFunc = function (x) { return 0; };
var intersectionFunc;
intersectionFunc = function (a, b) { return 0; };
var unionFunc;
// UnionFuncAを定義して呼び出す
unionFunc = function (num) { return num; };
console.log(unionFunc(2000));
// UnionFuncBを定義して呼び出す
unionFunc = function (str) { return "Hi " + str; };
console.log(unionFunc("UnionFuncB"));
