type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}

// インターセクション型(&)
type EngineerBlogger = Engineer & Blogger;
const aruru: EngineerBlogger = {
  name: "Aruru",
  role: "front-end",
  follower: 4000,
}


////////////////////
//// Type Guard ////
////////////////////

// 7つの型を使った場合(typeof)
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return ""
}

// typeエイリアスを使った型の場合(in)
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadworker: NomadWorker) {
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
class Dog {
  // タグの設置
  kind: "dog" = "dog"
  speak() {
    console.log("Bow-wow");
  }
}
class Bird {
  // タグの設置
  kind: "bird" = "bird"
  speak() {
    console.log("Tweet-tweet");
  }
  fly() {
    console.log("Flutter");
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly()
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

let array = [10, 20]; // array: number[]
let array2 = [10, 20] as const; // array2: readonly [10, 20]

// name: string・age: number
const peter = {
  name: "Peter",
  age: 20
}
// readonly name: "Peter"・readonly age: 20
const peter2 = {
  name: "Peter",
  age: 20
} as const

// 型の中でtypeofを使い、型情報を渡すやり方
type Peter = typeof peter2;



//////////////////////////////////////////////
//// Optional Chaining・Nullish Coalescing////
//////////////////////////////////////////////
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1
}
// downloadedData.userの値がない時はundefined
const optionalChaining = downloadedData.user?.name?.first

// downloadedData.userの値が空文字・0でも"no-user"が返される
const nullishCoalescing = downloadedData.user ?? "no-user"



///////////////////////////
//// 関数のオーバーロード ////
///////////////////////////
function toLowerCase(x: string): string;
function toLowerCase(x: number): number;
function toLowerCase(x: string | number) {
  if (typeof x === "string") {
    return x.toLowerCase();
  }
  return x;
}

const lowerHello = toLowerCase("HELLO");
const lowerHello2 = toLowerCase(33);


// 関数のオーバーロードをinterfaceを使って定義する
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
const tmpFunc: TmpFunc = function(x: string | number) { return 0 };


// オーバーロードした関数型のインターセクション
interface InterFuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface InterFuncB {
  (a: string): number;
}
let intersectionFunc: InterFuncA & InterFuncB;
intersectionFunc = function(a: number | string, b?: string | number) {return 0};


// オーバーロードした関数型のユニオン型
interface UnionFuncA {
  (a: number): number;
}
interface UnionFuncB {
  (a: string): string;
}
let unionFunc: UnionFuncA | UnionFuncB;
// UnionFuncAを定義して呼び出す
unionFunc = function(num: number) {return num}
console.log(unionFunc(2000));

// UnionFuncBを定義して呼び出す
unionFunc = function(str: string) {return `Hi ${str}`}
console.log(unionFunc("UnionFuncB"));


