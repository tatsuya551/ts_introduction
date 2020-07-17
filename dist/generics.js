"use strict";
// // ジェネリクスの基本形
// function copy(value) {
//     return value;
// }
// ;
// console.log(copy("Hello")); // T = string
// console.log(copy("Hello")); // T = "Hello"
// console.log(copy({ greeting: "Hello" })); // T = {greeting: string}
// // ジェネリクスに制約をつける(extends)
// function copy2(value) {
//     return value;
// }
// ;
// // エラーになる
// // console.log(copy2<string>("Hello")); // T = string
// // console.log(copy2("Hello")); // T = "Hello"
// console.log(copy2({ greeting: "Hello" })); // T = {greeting: string}
// // オブジェクトのキーをユニオン型で渡す(keyof)
// function copy3(value, key) {
//     value[key]; // key = "greeting" | "language"
//     return value;
// }
// ;
// console.log(copy3({ greeting: "Hello", language: "En" }, "greeting"));
// クラスに対してジェネリクスを使う
var LightDatebase = /** @class */ (function () {
    function LightDatebase() {
        this.data = [];
    }
    LightDatebase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatebase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatebase.prototype.get = function () {
        return this.data;
    };
    return LightDatebase;
}());
var stringLightDatebase = new LightDatebase();
stringLightDatebase.add("Apple");
stringLightDatebase.add("Banana");
stringLightDatebase.add("Grape");
console.log(stringLightDatebase.get());
stringLightDatebase.remove("Banana");
console.log(stringLightDatebase.get());
