const array1 = ['a', 'b', 'c'];

// inline anon callback
// array1.forEach(element => console.log(element));

// anon callback
array1.forEach((element, i) => {
    // console.log(element)
    // console.log(i)
});


const cycleElements = (element) => {
    // console.log(element)
}
array1.forEach(cycleElements)

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(friend => {
    // console.log(friend.toLowerCase())
})

const array2 = [1, 4, 9, 16];

// const tripleNums = (num) => num * 3

const tripleNums = (num) => {
    return num = num * 3
}

const tripled = array2.map(tripleNums)
// console.log(tripled)

const instructors = ["Ken", "Payne", "Evan", "Matt"];
const awesomeInst = instructors.map(teacher => {
    return teacher = teacher + " is awesome"
})

// console.log(awesomeInst)


const nums = [100, 2, 5, 42, 99];
const odds = nums.filter((num) => {
    return num % 2
});

// console.log(odds)
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const noJerks = people.filter((person) => {
    // return person.length > 6
    return person !== 'jerks'
})

// console.log(noJerks)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'black', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
];
  
  const firstWhiteCar = cars.find((car) => car.color === 'white');
  // firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}
  
  const missingCar = cars.find((car) => car.color === 'blue');
  // missingCar -> undefined
  
  const array4 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array4.reduce(
    (accumulator, currentValue) => {
        // console.log(accumulator + 'acc')
        // console.log(currentValue + 'current')
        return accumulator + currentValue
    },
    initialValue
  );
  
//   console.log(sumWithInitial);
  // Expected output: 10

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes', 'no thanks'];
const tally = votes.reduce((acc, vote) => {
  // Assign 1 if first time seeing a certain "type" of vote
  // otherwise increase count by 1
//   acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
// console.log(acc)
// console.log(acc[vote] + 'acc property')
  if(acc[vote]){
    acc[vote] = acc[vote] + 1
  }
  else{
    acc[vote] = 1
  }
  return acc;
}, {});  // Note the initial value is an empty object

console.log(tally)
// tally -> {"No": 2, "Yes": 3}

const obj = {}

obj.no = 1
// console.log(obj)
