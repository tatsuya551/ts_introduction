function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

function Component(template: string, selector: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountElement) {
          mountElement.innerHTML = template;
          mountElement.querySelector("h1")!.textContent = instance.name
        }
      }
    }
  }
}

// targetの値は、staticメソッドならclass、static以外のメソッドならプロトタイプ。
function PropertyLogging(target: any, propertyKey: string) {
  console.log("PropertyLogging-start");
  console.log(target);
  console.log(propertyKey);
  console.log("PropertyLogging-end");
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("MethodLogging-start");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  console.log("MethodLogging-end");
}

function enumerable(isEnumerable: boolean){
  return function(_target: any, _propertyKey: string, _descriptor: PropertyDescriptor){
    return {
      enumerable: isEnumerable
    }
  }
}

function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("AccessorLogging-start");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  console.log("AccessorLogging-end");
}

function ParameterLogging(target: any, propertyKey: string, parameterIndex: number) {
  console.log("ParameterLogging-start");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
  console.log("ParameterLogging-end");
}


@Component("<h1>{{name}}</h1>", "#app")
@Logging("LOGGING......")
class User {
  @PropertyLogging
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created!")
  }
  @AccessorLogging
  get age () {
    return this._age;
  }
  set age (value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log(message);
  }
}

console.log("start")
const user1 = new User(33);
console.log("end")