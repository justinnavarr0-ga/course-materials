// const friends = ["Melissa", "Marc", "Andrew", "Nick"];

// friends.forEach(function(friend) {
//   console.log(`I have a friend named ${friend}`);
// });

// // logs out "I have a friend named <friend's name>" for each friend
// friends.forEach(friend => {
//     console.log(friend.toLowerCase())
// })


// const people = [
//     {name: 'Fred', town: 'Bedrock'},
//     {name: 'Susan', town: 'Miami'},
//     {name: 'John', town: 'Arcadia'}
//   ];
  
//   const els = people.map((person, idx) => {
//     const el = document.createElement('div');
//     el.innerHTML = `${person.name} <span>(${person.town})</span>`;
//     // The new array will contain whatever
//     // is returned from the callback 
//     return el;
//   });
  
//   // Append the <div>s to the end of the <body>
//   els.forEach(el => document.body.append(el));
  
  //given array
const instructors = ["Kenneth", "Matt", "Payne", "Evan" ];
 // 
const makeawesome = (instructor) => {
    return instructor + " is awesome"
}

const makeithappen = instructors.map(makeawesome)

console.log(makeithappen)

//Exercise 3
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const nojerks = people.filter((person) => {
   // return person != "jerks";
   return person.includes("nice people")
})

console.log(nojerks)

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

  //Exercise 4 
  const notTooOldCar = cars.find((car) => car.year > 2014)
  // if written in expanded form you NEED return in the function
  console.log(notTooOldCar)

  //Exercise 5
    const myRoom = ["evil monkey", "bed", "lamp"];
    const isEvilMonkeyInRoom = myRoom.some((item) => item === "evil monkey" )

    console.log(isEvilMonkeyInRoom)