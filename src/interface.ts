interface Nameable {
  name: string;
  // nickNameの値の有無でエラーが出ない
  nickName?: string;
}

// interfaceの継承
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

// 構造的部分型のテスト
const tmpDeveloper = {
  name: "Tom",
  age: 22,
  experience: 3,
  greeting(message: string) {
    console.log(message)
  }
}
// Human型が必要な情報満たすため、"experience"についてはエラーにならない。
const user: Human = tmpDeveloper;



// interfaceをクラスに適応する(複数適応可能)
class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number){
  }
  greeting(message: string): void {
    console.log(message)
  }
}

const developer = new Developer("Bob", 44, 15);
developer.greeting("hello");