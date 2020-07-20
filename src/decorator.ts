function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

function Component(template: string, selector: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]){
        super(...args);
        console.log("pppp")
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

@Component("<h1>{{name}}</h1>", "#app")
@Logging("LOGGING......")
class User {
  name = "Quill";
  constructor(public age: number) {
    console.log("User was created!")
  }
}

console.log("start")
const user1 = new User(33);
console.log("end")