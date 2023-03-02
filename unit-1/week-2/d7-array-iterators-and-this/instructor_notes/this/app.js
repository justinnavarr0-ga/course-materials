console.log(this)
class Person {
    constructor(name) {
      this.name = name;
    }
  
    intro() {
      return `Hello, I'm ${this.name}!`;
    }
    check(){
        console.log(this)
    }
  }
  
  const person = new Person('Katie');
  const person1 = new Person('Ken')
  console.log(person.intro()); //-> Hello, I'm Katie!
  console.log(person1.intro())
person.check()
  