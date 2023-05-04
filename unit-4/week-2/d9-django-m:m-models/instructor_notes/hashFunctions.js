
// ['Matt_Gonczar', 'Best Instructor EVAR~!']

// {
//   "matt_gonczar : 'handsomest instructor evar!'
// }


// Storing Colors:
// ['ff69b4', 'ff4500', '#00ffff']

// pink ---> #ff69b4
// orangered ---> #ff4500
// cyan ---> #00ffff

// function hashFunction(str) {
//   magiBox = 'DOES SOMETHING SPECIAL'
//   return magicBox
// }

// hashFunction("pink")-- -> 0


// [, , , , , , , , , , , , ,]
// hash("pink", 100)
// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     // map "a" to 1, "b" to 2, "c" to 3, etc...
//     let value = char.charCodeAt(0) - 96;
//     // The way the haash function works here is NOT THE FOCUS!
//     total = (total + value) % arrayLen
//   }
//   // total = total % arrayLen
//   return total;
// }

// hash("orange", 1000)
// hash("blue", 10)
// hash("purple", 10)
// hash("yellow", 10)
// hash("black", 10)
// hash("white", 10)

// console.log(hash("pink", 10))
// console.log(hash("orangered", 10))
// console.log(hash("cyan", 10))
// console.log(first)
// 7

// function hash(key, arrayLen) {
//   let total = 0
//   // Adding in our WEIRD_PRIME (hashing almost always takes advantage of prime numbers)
//   // Prime numbers come down to reducing collisions (data stored in the same buckets). The End.
//   let WEIRD_PRIME = 31
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i]
//     let value = char.charCodeAt(0) - 96
//     total = (total * WEIRD_PRIME + value) % arrayLen
//   }
//   return total;
// }
// hash("hello", 13)

// console.log(hash("pink", 10))

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    // Is there something at that index? 
    if (this.keyMap[index]) {
      // SOMETHING AT THIS INDEX EXISTS
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    // nothing at that index
    return undefined
  }
  // returns all the values in our keyMap hash
  values() {
    let valuesArr = [];
    // Loop over the entire keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // valuesArr.push(this.keyMap[i][j][1])
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }
  // returns all the keys in our keyMap hash
  keys() {
    let keysArr = [];
    // Loop over the entire keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // valuesArr.push(this.keyMap[i][j][1])
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }

}

let btyHashTable = new HashTable();
btyHashTable.set("hello world", "goodbye!!")
btyHashTable.set("breakfast", "goodbye!!")
btyHashTable.set("dogs", "woof woof woof")
btyHashTable.set("cats", "meow meow meow")
btyHashTable.set("brogrammers", "the jokers in room 8")
btyHashTable.set("brogrammers", "you know who they are")
btyHashTable.set("d1 athlete", "Justin Snorlax")
// console.log(btyHashTable.get("brogrammers"))
// console.log(btyHashTable.get("d1 athlete"))

// console.log(btyHashTable.values())
console.log(btyHashTable.keys())
