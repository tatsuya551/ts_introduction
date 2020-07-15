// Abstractクラスにして、継承にのみに使えるようにする
abstract class Person {
  constructor(public name: string, protected age: number){
  }
  
  greeting(this: Person){
    console.log(`Hi ${this.name} ${this.age}`);
    this.explainJob();
  }

  // Teacherクラスから呼び出せるようにする
  abstract explainJob(): void
}

// Personクラスの継承
class Teacher extends Person {
  private static instance: Teacher;

  // Personクラスのメソッドを呼ぶ
  explainJob(){
    console.log(`My job is ${this.subject}`);
  }

  // ゲッター・セッター
  get subject() {
    return this._subject;
  };
  set subject(value) {
    this._subject = value
  };

  private constructor(name: string, age: number, private _subject: string){
    super(name, age);
  }

  static getTeacher(){
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Taro", 33, "English");
    return Teacher.instance;
  }
}

const taro = Teacher.getTeacher();
const taro2 = Teacher.getTeacher();
taro.subject = "Math"
console.log(taro, taro2);