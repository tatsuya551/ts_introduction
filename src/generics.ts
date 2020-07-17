// ジェネリクスの基本形
function copy<T>(value: T): T {
  return value
};
console.log(copy<string>("Hello")); // T = string
console.log(copy("Hello")); // T = "Hello"
console.log(copy({ greeting: "Hello" })); // T = {greeting: string}


// ジェネリクスに制約をつける(extends)
function copy2<T extends { greeting: string }>(value: T): T {
  return value
};
// エラーになる
// console.log(copy2<string>("Hello")); // T = string
// console.log(copy2("Hello")); // T = "Hello"
console.log(copy2({ greeting: "Hello" })); // T = {greeting: string}


// オブジェクトのキーをユニオン型で渡す(keyof)
function copy3<T extends { greeting: string; language: string }, U extends keyof T>(value: T, key: U): T {
  value[key]; // key = "greeting" | "language"
  return value;
};
console.log(copy3({ greeting: "Hello", language: "En" }, "greeting"));


// クラスに対してジェネリクスを使う
class LightDatebase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatebase = new LightDatebase<string>();
stringLightDatebase.add("Apple");
stringLightDatebase.add("Banana");
stringLightDatebase.add("Grape");
console.log(stringLightDatebase.get());
stringLightDatebase.remove("Banana")
console.log(stringLightDatebase.get());


// インターフェイスに対してジェネリクスを使う
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 55,
  data: [11, 22, 33]
}


// Utility型(Partial・Readonly)
interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>;
type Readable = Readonly<Todo>;


// Utility型(Promise)
const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve("Hello");
  }, 3000);
})
fetchData.then(data => {
  data.toUpperCase();
})


// Utility型(Array)
const vegetables: Array<string> = ["Tomato", "Buroccoli", "Asparagus"];
// = const vegetables: string[] = ["Tomato", "Buroccoli", "Asparagus"];