"use strict";
// ジェネリクスの基本形
function copy(value) {
    return value;
}
;
console.log(copy("Hello")); // T = string
console.log(copy("Hello")); // T = "Hello"
console.log(copy({ greeting: "Hello" })); // T = {greeting: string}
// ジェネリクスに制約をつける(extends)
function copy2(value) {
    return value;
}
;
// エラーになる
// console.log(copy2<string>("Hello")); // T = string
// console.log(copy2("Hello")); // T = "Hello"
console.log(copy2({ greeting: "Hello" })); // T = {greeting: string}
// オブジェクトのキーをユニオン型で渡す(keyof)
function copy3(value, key) {
    value[key]; // key = "greeting" | "language"
    return value;
}
;
console.log(copy3({ greeting: "Hello", language: "En" }, "greeting"));
// クラスに対してジェネリクスを使う
class LightDatebase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatebase = new LightDatebase();
stringLightDatebase.add("Apple");
stringLightDatebase.add("Banana");
stringLightDatebase.add("Grape");
console.log(stringLightDatebase.get());
stringLightDatebase.remove("Banana");
console.log(stringLightDatebase.get());
const tmpDatabase = {
    id: 55,
    data: [11, 22, 33]
};
// Utility型(Promise)
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve("Hello");
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
// Utility型(Array)
const vegetables = ["Tomato", "Buroccoli", "Asparagus"];
// = const vegetables: string[] = ["Tomato", "Buroccoli", "Asparagus"];
