![JS Classes](https://i.pinimg.com/originals/b6/25/1f/b6251fd72b44d94085f02f2e26cb4341.png)

[JS CLASSES Class REPO](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-1/week-2/d6-js-functions-pt2-and-classes/6.3-js-classes.md)

# JS Classes

## 1. Setup

`null`

## 2. The Use Case of Classes

<!-- Explain the nomencalture of classes w/Person example -->
```js
class KoreanIdol {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let idol_1 = new KoreanIdol("Kim Namjoon", 28);
let idol_2 = new KoreanIdol("Kim Seok Jin", 31);
let idol_3 = new KoreanIdol("Min Yoongi", 30);
let idol_4 = new KoreanIdol("Jeon Hoseok", 29);

let idol_5 = new KoreanIdol("Park Jimin", 27);
let idol_6 = new KoreanIdol("Kim Taehyung", 27);
let idol_7 = new KoreanIdol("Jeon Jungkook", 25);

console.log(idol_5.name); // Output: "Park Jimin"
console.log(idol_5.age); // Output: 25

```

In this example, the constructor method of the `KoreanIdol` class takes two arguments, `name` and `age`, and sets the corresponding properties of the object being created. When we create a new `KoreanIdol` object using the `new` keyword, the constructor method is automatically called, and the `name` and `age` properties are initialized. We can then access these properties using the `idol_5.name` and `idol_5.age` syntax.




```js
// Toyota Blueprint...

class Car {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  carDescription() {
    return `Person's favorite car is a ${this.color} ${this.brand} ${this.model} and he loved it.`
  }
}

const kensFavoriteCar = new Car('silver', 'Toyota', 'Corolla')
const paynesFavoriteCar = new Car('gold', 'Toyota', 'Camry')
const evansFavoriteCar = new Car('blue', 'Toyota', 'Tacoma')
const matthewsFavoriteCar = new Car('black', 'Toyota', '4Runner')

console.log(kensFavoriteCar.carDescription());
console.log(kensFavoriteCar);
console.log(paynesFavoriteCar.carDescription());
console.log(paynesFavoriteCar);
console.log(evansFavoriteCar.carDescription());
console.log(evansFavoriteCar);
console.log(matthewsFavoriteCar.carDescription());
console.log(matthewsFavoriteCar);
```

- [x] Let's create your first car using the blueprint. 

### Encapsulation in OOP

- Candy wrapper and Unidentified White Powder analogy.

- What's the difference between a function and a method? Methods are associated with an object or class.

- How are these methods associated with the object or class? They are `encapsulated` within the object. 

```js
const cohort = {
  id: 'SEI',
  students: ['Mary', 'Toni', 'Fred'],
  instructors: ['Susan', 'Phil'],
  addStudent: function(name) {
    // name variable is a string. Strings operate like arrays.
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    this.students.push(name);
  },
  pickRandomStudent: function() {
    let rndIdx = Math.floor(Math.random() * this.students.length);
    return this.students[rndIdx];
  }
};

console.log(cohort)
cohort.addStudent('Billiam');
console.log(cohort.students)

// Random operator
console.log(cohort.pickRandomStudent());
```

### ❓ Review Questions - OOP (1 min)

1. What does the acronym OOP stand for? `null`

- [Object Oriented Programming vs Functional Programming: Is OOP Dead?](https://www.tabnine.com/blog/object-oriented-dead-or-alive/#:~:text=The%20natural%20alternative%20to%20OOP,problem%20through%20transforming%20the%20input.)

2. What are Classes used for in OOP? `veto`

Classes are used to encapsulate data and behavior into a single entity, which makes it easier to manage and reuse code. By defining a class, you can create objects that share the same properties and behavior, without having to write the same code over and over again.

In OOP, classes are used for:

1. Abstraction: Classes allow you to abstract away the implementation details of an object and expose only the relevant information to the outside world.

2. Encapsulation: Classes encapsulate data and behavior into a single entity, which helps to prevent unwanted access and manipulation of data.

3. Inheritance: Classes can be derived from other classes, which allows you to reuse code and create hierarchies of objects with similar properties and behavior.

4. Polymorphism: Classes can have multiple methods with the same name but different implementations, which allows you to write more flexible and reusable code.


3. Describe the OOP principle known as encapsulation --> The bundling of data (properties/attributes) and related behavior (methods) within an object.

## 3. Defining and Instantiating a Class

#### Instantiating a Class (Creating an Object) 

`Instance`, `instantiate`, and `instantiation` are related terms used in the context of object-oriented programming (OOP) and software engineering.

An `instance` is a specific occurrence of a class, created from the class blueprint. It is an individual object that has its own set of data and methods.

`Instantiate` is the verb used to describe the process of creating an instance of a class. When you instantiate a class, you create a new object that is an instance of that class.

`Instantiation` refers to the act of creating an instance of a class. It is the process of turning a class definition into a concrete object that can be used in a program.

To summarize, `instance` refers to the object that is created, `instantiate` is the verb that describes the act of creating the instance, and `instantiation` is the process of creating the instance.

#### The constructor Method

The main `purpose` of the constructor method is to initialize the properties of the object being created. This can involve setting default values for properties, setting properties based on arguments passed to the constructor, and performing any other initialization tasks required to make the object ready for use.

### 👉 YOU DO - Add Another Property (2 mins)

#### Not All Properties Need a Parameter in the Constructor

- 👀 A node list does not have a `map` method. Therefore, we are converting the node list to an array so that we can use the `map` method. 

#### Object Instantiation - Behind the Scenes

```null```

**Everything you need to know about object creation in JavaScript**

[The Guide I Wish I Had for JavaScript Object Creation Patterns](https://betterprogramming.pub/the-guide-i-wish-i-had-for-js-object-creation-patterns-e0af3043993d)

## 4. Defining Prototype Methods in a Class

```js
const beatles = ['John', 'Paul', 'Ringo', 'George']
beatles.forEach( (beatle, idx) => {
  console.log(beatle, idx)
})

const nwa = ['Eazy-E', 'Dr. Dre', 'Ice Cube', 'MC Ren', 'DJ Yella', 'Arabian Prince']
nwa.forEach( (icon, idx) => {
  console.log(icon, idx)
})
```

#### Prototype Methods versus Static Methods:

**Prototype Method Example**
```js
// Example of a prototype method
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // Output: 50
```

In this example, `getArea` is a prototype method of the `Rectangle` class, which means that it is defined on the class's prototype and is available to all instances of the class. When `getArea` is called on an instance of Rectangle, it returns the area of the rectangle represented by that instance.

**Static Method Example**
```js
// Example of a static method
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(1, 2)); // Output: 3
```

In this example, `add` is a static method of the `MathUtils` class, which means that it is defined on the class itself and not on its prototype. Static methods are called on the class itself rather than on instances of the class. In this case, `MathUtils.add` takes two arguments and returns their sum. Since `add` is a static method, we don't need to create an instance of `MathUtils` in order to use it

Array.isArray is an example of a static method:
```js
const nums = [1, 2, 3, 4, 5];
console.log(Array.isArray(nums)); //-> true
```

#### Defining Methods in a Class

`null`

Let's add a play method to our TicTacToeGame class:

👀 It's interesting that methods are not separated by a comma or any other character.

### 👉 YOU DO - Add Another Instance Method (1 min)

```js
  render() {
    console.log('Render game...')
  }
```

#### Overriding Methods

A short simple example of a method override:
```js
class Animal {
  makeSound() {
    console.log('The animal makes a sound');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('WOOF')
  }
}

const animal = new Animal();
const cat = new Cat();
const fido = new Dog();

animal.makeSound(); // Output: The animal makes a sound
cat.makeSound(); // Output: Meow!
fido.makeSound()
```

Our example of a method override:
```js
  
  // METHOD OVERRIDING to the built in JS toString() method
  toString() {
    return `Tic-Tac-Toe / winner -> ${this.winner}`;
  }
```

- 80% checkpoint for this classes lecture - congrats to everyone!!!

## 5. Defining Static Methods & Properties

### Static Methods:
-[x] Remember our MathUtils class versus our Rectangle class? Go back and check it out. 

-[x] Again, static methods, as well as static properties are accessible on a class itself - not on its instances. 

-[x] Static methods are used to implement behavior that does not pertain to a particular instance.

```js
class TicTacToeGame {
  // Place below constructor...
  static about() {
    console.log("I'm the TicTacToeGame class!");
  }
  ...
}

// Test out about static method
```

**Why does calling `game.about()` return an error?**

### Static Properites:

Static properties are properties that belong to a class itself rather than to instances of the class. They are shared across all instances of the class and can be accessed and modified using the class name without creating an instance of the class.

Static properties are useful when you want to define values or constants that are shared across all instances of a class, or when you want to define properties that belong to the class itself rather than to instances of the class.

```js
class Car {
  static numberOfWheels = 4;
  static manufacturer = 'Toyota';

  constructor(model) {
    this.model = model;
  }
}

console.log(Car.numberOfWheels); // Output: 4
console.log(Car.manufacturer); // Output: Toyota

const corolla = new Car('Corolla');
console.log(corolla.numberOfWheels); // Output: undefined
```

A **static property** is a data property that lives on the class and is therefore shared by all instances of that class.

Since the winning combinations is the same for all games of Tic-Tac-Toe, it should be defined as a static property vs. a property that gets duplicated for each game instance:

- [x] Adding winningCombos 2D array.

```js
  static winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
```

## 6. 💪 Practice Exercise - Defining Another Class (15 min)

1. I use chopsticks so I'm not gonna `fork` anything here.
2. Before the TicTacToeGame class, define a skeleton Square class.
```js
class Square {

}
```
3. Add a constructor method with a parameter named domElement.
```js
class Square {
  constructor(domElement) {

  }
}
```

4. Code the constructor method so that it creates the following two properties:
- `domElement`: Initialized to the `domElement` parameter.
- `value`: Initialized to `null` but ultimately will hold player values of `1/-1`.
```js
class Square {
  constructor(domElement) {
    this.domElement = domElement;
    this.value = null;
  }
}
```

5. Define a **static** property named `renderLookup` used to determine what color to render for which value. Assign the following object (use whatever colors you wish):

```js
class Square {
  constructor(domElement) {
    this.domElement = domElement;
    this.value = null;
  }

  static renderLookup = {
    '1': 'purple',
    '-1': 'orange',
    'null': 'darkgrey'
  }
}
```

6. Square objects should be responsible for rendering themselves. Define a render method with the following code line of code:

```js
class Square {
  constructor(domElement) {
    this.domElement = domElement;
    this.value = null;
  }

  static renderLookup = {
    '1': 'purple',
    '-1': 'orange',
    'null': 'darkgrey'
  }
  // Prototype method
  render() {
    // 👀 Note how we access a class's static property via the name of the class
    this.domElement.style.backgroundColor = Square.renderLookup[this.value];
  }
}
```

7. Back in the TicTacToeGame class, update the commented out line

```js
this.squares = this.squareEls.map(el => new Square(el));
```

## 7. Finish the Game Logic

`null`

## 8. Inheritance

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log("Engine started.");
  }
}

class Toyota extends Car {
  constructor(model, year) {
    super("Toyota", model, year);
  }

  startEngine() {
    console.log("Engine started quietly.");
  }
}

class Lexus extends Car {
  constructor(model, year) {
    super("Lexus", model, year);
  }
}

// class Lexus {
//   constructor(make, model, year) {
//     this.make = 'Lexus';
//     this.model = model;
//     this.year = year;
//   }
// }

let car1 = new Car("Honda", "Civic", 2022);
let toyota1 = new Toyota("Camry", 2022);
let lexus1 = new Lexus("RX", 2023);

car1.startEngine(); // Output: "Engine started."
toyota1.startEngine(); // Output: "Engine started quietly."
lexus1.startEngine(); // Output: "Engine started."
console.log(car1.make, car1.model, car1.year); // Output: "Honda Civic 2022"
console.log(toyota1.make, toyota1.model, toyota1.year); // Output: "Toyota Camry 2022"
console.log(lexus1.make, lexus1.model, lexus1.year); // Output: "Lexus RX 2023"
```

![Working Image](https://imagen.research.google/main_gallery_images/a-strawberry-mug.jpg)
![Working Image Corgo](https://imagen.research.google/main_gallery_images/a-photo-of-a-corgi-dog-riding-a-bike-in-times-square.jpg)

### Adding Additional Properties to a Subclass

`null`

## 9. ❓ Essential Questions (1 min)

1. In JavaScript, classes are used as a way to define and create objects with similar properties and methods. Classes are a blueprint for creating objects that share similar characteristics and behavior.

2. In JavaScript, the constructor method is a special method that is used to create and initialize an object created from a class. The constructor method is automatically called when an object is created using the new keyword.

3. The purpose of the constructor method in JavaScript is to create and initialize objects that are created from a class. When a new object is created using the `new` keyword, the constructor method is automatically called, and any initialization code inside the constructor is executed.

4. Prototype methods being called on instances of a class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // class method
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

let john = new Person("John", 30);
// Prototype method
john.sayHello(); // Output: Hello, my name is John and I'm 30 years old.
```
The `Person` class  has a `sayHello` method, which is defined on the prototype of the class. This means that every instance of the `Person` class has access to the `sayHello` method, and it doesn't need to be defined separately for each instance.

By defining methods on the prototype of a class, we can avoid duplicating the same code for every instance of the class, and make our code more efficient and easier to maintain.

5. extends example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let fido = new Dog("Fido");
fido.speak(); // Output: Fido barks.

```

## 10. Further Study