# Hash Table / Hash Map

- Used frequently
- Built-in to almost every programming language out there as a default type
- Just like most languages have a built in array you can just use out of the box
- We will be implementing our own version of hash table, but MOST of the time, you'll be using the built-in version

## Objectives:
- Explain what a hash table is
- Define what a hashing algorithm is
- Discuss what makes a good hashing algorithm
- Understand how collisions occur in a hash table
- Handling collisions (with two strategies) using **separate chaining** or **linear probing**

## What is a Hash Table?

- Hash tables are used to store *key-value* pairs.
- They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are *fast* for all of the following operations: finding values, adding new values, and removing values.

## Why Should We Care?
- Nearly every programming language has some sort of hash table data structure
- Because of their speed, hash tables are very commonly used

## Hash Tables in the Wild

They are all key value stores

- [x] Python has **Dictionaries**
- [x] JS has **Objects and Maps** (Objects have some restrictions, but are basically hash tables)
- [x] Java, Go, & Scala have **Maps**
- [x] Ruby has **Hashes**

Let's pretend the existing implementations mysteriously disappeared.

How would we implement our own version???

## Hash Tables Introductory Example:

Imagine we want to store some colors:

We could just use an array/list:
```js
['ff69b4', 'ff4500', '#00ffff']
```
Not very readable. What do these colors correspond to?

It would be nice if instead of using indices to access the colors, we could use more human readable keys.
```shell
pink ---> #ff69b4
orange-red ---> #ff4500
cyan ---> #00ffff
```

Basically, **`colors["cyan"]`** is better than **`colors[2]`** so we'll implement this on our own. We will re-invent this basic mapping of key-value pairs.

## Hash Tables Introductory Example:

How can we get human-readability *and* computer readability?

Computers don't know how to find an element at index *pink*

Hash Tables to the rescue!

## The Hash Part

Re-inventing the wheel part:

- Building a go-cart engine, but if we actually had to use one, we'd use a real car. The go-cart engine part is to understand how an engine works.
- To implement a hash table, we'll be using an array (to store information). 
- In order to look up values by key (narrowing it down to strings), we need a way to convert keys into valid array indices.
- If our array has 100 slots (goes from 0 to 99), we need a way to convert `pink` to a number between `0 and 99` and then store the data at that number.
- There are functions that help us do that and they're called hash functions / hashing functions

![Imgur](https://i.imgur.com/86beE2G.png)

- [x] If I pass in the string "pink", it needs to give me some number between zero and nine
- [x] Every time I pass in "pink", it should give me the same number

![Imgur](https://i.imgur.com/1k5Mjmn.png)

BTY, what's at index "cyan"? 

Our code still doesn't know what index "cyan" is, but we can take "cyan" and pass it to the hash function again and say **"Hey! What was the number you gave me earlier?"** and returns **3**. Then we go to idx 3. Same deal with "pink". 

This is why it's important that we always get the same number back. If we don't get the same number back, our entire operation is BROKEN. 

Writing a hash function that works, (taking in a string, an image, a PDF, or any piece of data), and somehow spits out a number **IS NOT EASY!** 

## Intro to Hash Functions:

We'll be using hash functions to convert keys (like the string "pink") and turn that into a valid array index (a small number). However, hash functions have valid uses in the real world - security, internet, and computing in general.

**Password storage**: When a user creates an account with a website, their password is hashed and stored in a database. When the user logs in, their password is hashed again and compared with the stored hash value. This ensures that even if the database is compromised, the attacker cannot retrieve the original passwords.

**Data integrity**: Hash functions are used to ensure the integrity of data during transmission or storage. For example, a sender can hash a message and send the hash value along with the message. The receiver can hash the received message and compare the hash value with the one received to ensure that the message has not been tampered with.

**Digital signatures**: Hash functions are used in digital signature schemes to ensure that the signed data has not been modified after signing. The hash value of the signed data is included in the digital signature, and any modification to the data will result in a different hash value, rendering the signature invalid.

**File deduplication**: Hash functions are used to detect duplicate files in a storage system. The hash value of each file is calculated, and files with the same hash value are considered duplicates.

**Blockchain**: Hash functions are used extensively in blockchain technology to secure the network and ensure the integrity of transactions. Each block in the blockchain contains a hash value that is calculated based on the transactions in the block and the hash value of the previous block, forming a chain of blocks that cannot be tampered with.

The **definition of a basic hash function** is just a function that takes data of an arbitrary size (1000 characters to a million characters), and spits out data of a *fixed size*. Basically, it's going to *map* an `input` to an `output` of a *fixed size*

Open up terminal and let's see some results
```shell
python3

>>> hash("BTY is the best!")
>>> hash("bTY is the best!")
>>> hash("b")
>>> hash("bdajkfsdljfasldjfaldsfjalskdfja;ldjfaklsdjalskdf")
```

1. Our output is a fixed size. It is simialrly sized data no matter what the input is **and this is important!**
2. In *most cases* of hash functions, we can't work backwards. Our output is actually meaningless on its own. If all we have is the output, this is *usually* a one way function. We *usually* can't take the output and figure out *what* generated this number. 
3. So, these output numbers are relatively large. We dont' want to store numbers at this index in an array because then we're going to have A LOT of empty spaces in our array. We want to store stuff in an array of like 200 or 20 or 10 spots ten elements. What Python is giving us is something in the trillions. We'll be writing our own and not using Python's built in hash function. 

## What Makes a Good Hash Function?
(not cryptographically secure)
1. Fast (i.e. constant time)
We don't want to spend much time hashing something because when we insert something into our hash table, it needs to be hashed. But also when we go and fetch it or update it or remove it, EVERY TIME we try and access it afterwards, **we still have to run that hash function again**. 
2. Doesn't cluster outputs at specific indices, but distributes uniformly. We don't want a dumb hash function that will always give us the middle of the array (or position 0). Basically, it's useless if every element is stored at the same spot. With "collisions" (10 spots with 50 elements), we want them to be pretty evenly spread out. 
3. Deterministic: same input yields the same output

## Writing Our First Hash Function

Goal:
```js
// Will map "pink" to be a number between 0 and 99
hash("pink", 100) // 100 is the length of the array
hash("pink", 9) // will give us a number between 0 and 8
```

How would we convert **"pink"** to a number? 

- [x] It needs to be "deterministic" meaning it is reproducible every time to get the same output
- [x] We could just take the length of "pink" to get 4. But there are a lot of strings that have a length of 4. We'll have "clustered data". 
- [x] What about the **UTF 16 Character Code**? 
```js
"a".charCodeAt(0) // 97
"hi".charCodeAt(0) // 104
"hi".charCodeAt(1) // 105
```
- [x] What if we add all the UTF 16 Character Codes together?

> If we subtract 96 from `"a".charCodeAt(0)`, we get 1 (basically a = 1)
> If we subtract 96 from `"b".charCodeAt(0)`, we get 2 (basically b = 2)
> If we subtract 96 from `"z".charCodeAt(0)`, we get 26 (basically z = 26)
> We don't NEED to subtract 96; it is still valid

```js
let total = 0;
total += "hello".charCodeAt(0) - 96 // h is the 8th letter in the alphabet
total += "hello".charCodeAt(1) - 96 // e is the 5th letter in the alphabet
total += "hello".charCodeAt(2) - 96 // l is the 12th letter in the alphabet
total += "hello".charCodeAt(3) - 96 // l is the 12th letter in the alphabet
total += "hello".charCodeAt(4) - 96 // o is the 15th letter in the alphabet

console.log(total) // 52
```

But we also need to consider passing in the length of our array for `hash("hello", 11)`. 
We need an index that will be valid, and 52 is too large. 


<details>
<summary>
❓ So how do we keep it within these bounds?
</summary>
<hr>

**The simplest way is modulo %**

```js
total % 11 // 8
```
<hr>
</details>

Here's a hash that works on *strings only*:
```js
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc...
    let value = char.charCodeAt(0) - 96;
    // The way the hash function works here is NOT the focus!  
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3
```

What happens if we try the following?
```js
hash("orange", 10)
hash("blue", 10)
hash("purple", 10)
hash("yellow", 10)
hash("black", 10)
hash("white", 10)
```

### Refining Our Hash (Problems with our current hash)
1. Only hashes strings (we won't sweat/worry about this)
2. Bigger Problemo: Not constant time - linear in key length. The number of operations we're doing depends on the SIZE of the data (string here). It scales along with the size of the input.
3. Could be a little more random (data can be clustered pretty easily). There's a way to make the data slightly more scattered (hint: it involves prime numbers).

## Improving Our Hash Function

Baby steps. Let's focus on two things here:
1. Improve its performance so that it runs closer to constant time
2. Increase the randomness / distribution throughout our buckets in our hash table
   
```js
// Our Original Hash Function
function hash(key, arrayLen) {
  let total = 0;
  for (let i=0; i<key.length; i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
```

```js
// Improved Hash Function
function hash(key, arrayLen) {
  let total = 0;
  // Adding in our WEIRD_PRIME (hashing almost always takes advantage of prime numbers)
  // Prime numbers come down to reducing collisions (data stored in the same buckets). The End.
  let WEIRD_PRIME = 31
  // If our key is 31 characters long, we will only loop 31 times instead of continuing
  for (let i=0; i< Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```

Prime Numbers? WTH? 😬
- The prime number in the hash is helpful in spreading out the keys more uniformly
- It's also helpful if the array that you're putting values into has a prime length
- You don't need to know why (the math is very complicated), but you can look it up if you're curious.
- **Does making array size a prime number help in hash table implementation? Why?** Check out the guest lecturer from MIT Jon Bentley quora answer.
- [Joy Liao's Answer From her Table](https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why)

So let's use a prime number for our array length.

```js
// Improved Hash Function
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31
  for (let i=0; i< Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

hash("hello", 13) // 7
hash("goodbye", 13) // 9
hash("hi", 13) // 10
hash("cyan", 13) // 5
```

The improvements we made, in principle at least, are to speed this up so that we set a maximum 

```js
// What happens when "cyan" and "pink" have THE SAME INDEX??? 🤨
hash("cyan", 13) // 5
hash("pink", 13) // 5
```

There are two solutions to handle collisions...

## Handling Collisions

#### Dealing With Collisions
- Even with a large array and a great hash function, collisions are inevitable.
- We're working with a small hash table and a bad hash function so collisions are unavoidable
- There are **MANY** strategies for dealing with collisions, but we'll focus on two:
1. Separate Chaining
2. Linear Probing


#### Separate Chaining:

Basically, just store the pieces of data at the same spot using another **nested** data structure (array, linked list) etc...
- With *separate chaining*, at each index in our array, we store values using a more sophisticated data structure (e.g. an array or a linked list).
- This allows us to store multiple key-value pairs at the same index.

![Separate Chaining](https://i.imgur.com/4CXKEyw.png)

#### Linear Probing:

- With **linear probing**, when we find a collision, we search through the array to find the *next* empty slot.
- We only store one piece of data at each position.
- When there is a collision, we look forward / ahead (or backwards, but it's easier to look forward) for the *next* empty slot.
- Unlike with separate chaining, this allows us to store a single key-value at each index.

![Linear Probing](https://i.imgur.com/nzkKfhz.png)

So we're going to be implementing *separate chaining*. It allows us to have more data than the length of our table (buckets).

When we talk about *linear probing* though, this ONLY (sort of... 🫤) allows us to store 10 things.

## Hash Table Set and Get:

#### A HashTable Class
```js
class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i=0; i<Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
```

#### Set / Get

*Set pseudocode*
1. Accepts a key and a value ("pink", "#blehblehbleh")
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining. Basically, we're **NOT** storing the data there ALONE, we're storing it in a **NESTED** structure.

*Get pseudocode*
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns **undefined**

<details>
<summary>
Hash Table Set Solution
</summary>
<hr>

```js
class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i=0; i<Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // Set solution:
  set(key, value) {
    let index = this._hash(key);
    return index;
  }
}

let btyHashTable = new HashTable();
btyHashTable.set("hello world", "goodbye!!")
```

It's giving us the index, but we don't want to just return the index. We want to insert the **key and value** at that index TOGETHER. But there's a problem. We need to do the whole **separate chaining** thing. 

```js
  // Set solution:
  set(key, value) {
    let index = this._hash(key);
    [ , , , , , , , , , ]
    // if there's nothing there, we'll put an empty array and NEST the key-value
    [ , , ,[ [key, value] ] , , , , , , ]
    // if there's already something there, we just add in our NEXT key-value and NEST IT.
    [ , , ,[ [key, value], [key, value] ] , , , , , , ]
  }
```

SO here we go.

```js
// OUR SET SOLUTION:
set(key, value) {
  let index = this._hash(key);
  if (!this.keyMap[index]) {
    this.keyMap[index] = [];
  }
  this.keyMap[index].push([key, value])
}
```

Want to run some tests to see if it works?

```js
class HashTable {
  // Changed size to something smaller so we force collisions
  constructor(size=4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i=0; i<Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // Set solution:
   set(key, value) {
     let index = this._hash(key);
     if (!this.keyMap[index]) {
       this.keyMap[index] = [];
     }
     this.keyMap[index].push([key, value])
   }
}

let btyHashTable = new HashTable();
btyHashTable.set("hello world", "goodbye!!")
btyHashTable.set("dogs", "woof woof woof")
btyHashTable.set("cats", "meow meow meow")
btyHashTable.set("brogrammers", "the jokers in room 8")
btyHashTable.set("d1 athlete", "Justin Snorlax")
// printing btyHashTable
btyHashTable
// let's insert something else in. Go ahead and take shots at me here and get creative. 
```

<hr>
</details>

<hr>

<details>
<summary>
Hash Table Get Solution
</summary>
<hr>

First thing we need to do is hash that key.

```js
get(key) {
  let index = this._hash(key);
  // Is there something at that index? 
  if (this.keyMap[index]) {
    // something at that index exists
    // testing it out.
    return this.keyMap[index];
  }
  // There is nothing at that index
  return undefined
}

btyHashTable.get("brogrammers") // returns a subarray
// [
//   [ 'dogs', 'woof woof woof' ],
//   [ 'brogrammers', 'the jokers in room 8' ]
// ]
```

So let's do a for loop

```js
get(key) {
  let index = this._hash(key);
  if (this.keyMap[index]) {
    for (let i=0; i<this.keyMap[index].length; i++) {
      // this is the subarray of dogs-woofwoofwoof and brogrammers-room8jokers
      if(this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i]
      }
    }
  }
  return undefined
}
```

Testing it out:

```js
class HashTable {
  // Changed size to something smaller so we force collisions
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // Set solution:
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
  }
  // Get solution:
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // this is the subarray of dogs-woofwoofwoof and brogrammers-room8jokers
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i]
        }
      }
    }
    return undefined
  }
}

let btyHashTable = new HashTable();
btyHashTable.set("hello world", "goodbye!!")
btyHashTable.set("dogs", "woof woof woof")
btyHashTable.set("cats", "meow meow meow")
btyHashTable.set("brogrammers", "the jokers in room 8")
btyHashTable.set("d1 athlete", "Justin Snorlax")

console.log(btyHashTable.get("brogrammers"))
console.log(btyHashTable.get("d1 athlete"))
```

Looks good to me. But what if we just wanted the VALUE in our get solution?

```js
return this.keyMap[index][i][1]
```

<hr>
</details>

## Hash Table Keys and Values:

**key**
1. Loops through the hash table array and returns an array of keys in the table

**value**
1. Loops through the hash table array and returns an array of values in the table

What if we have duplicate values? For instance, students and their grades? We can have multiple As and Multiple Bs. MOST OF THE TIME, it's just the unique values. FYI: Keys are supposed to be unique anyways.

<details>
<summary>
Keys and Values Solution
</summary>
<hr>

Values:

```js
values() {
  let valuesArr = [];
  // loop over entire keymap:
  for (let i=0; i<this.keyMap.length; i++) {
    if (this.keyMap[i]) {
      console.log(this.keyMap[i])
    }
  }
}
```

Okay. It's skipping over the empty slots. We need to iterate over the nested arrays.

```js
values() {
  let valuesArr = [];
  for (let i=0; i<this.keyMap.length; i++) {
    if (this.keyMap[i]) {
      for (let j=0; j<this.keyMap[i].length; j++) {
        valuesArr.push(this.keyMap[i][j])
      }
    }
  }
  // Almost there. 
  return valuesArr;
}

// [
//   [ 'hello world', 'goodbye!!' ],
//   [ 'd1 athlete', 'Justin Snorlax' ],
//   [ 'cats', 'meow meow meow' ],
//   [ 'dogs', 'woof woof woof' ],
//   [ 'brogrammers', 'the jokers in room 8' ]
// ]
```

So we only want the **index of one** (values) for each one of those items.
```js
valuesArr.push(this.keyMap[i][j][1])
```

What about duplicates? 

```js
let btyHashTable = new HashTable();
btyHashTable.set("hello world", "goodbye!!")
btyHashTable.set("dogs", "woof woof woof")
btyHashTable.set("cats", "meow meow meow")
btyHashTable.set("brogrammers", "the jokers in room 8")
btyHashTable.set("d1 athlete", "Justin Snorlax")
btyHashTable.set("kendall tried to impersonate ken", "the jokers in room 8")

btyHashTable.values()
```

Easiest way is to check if the value is in the results before pushing.
```js
if (!valuesArr.includes(this.keyMap[i][j][1])) {
  valuesArr.push(this.keyMap[i][j][1])
}
```

What about keys()?

```js
keys() {
  // similar to values
}
```

<hr>
</details>

Right now, if we set with duplicate KEYS, it'll return our first item set. However, most built in languages will give us a warning saying we have duplicate keys. 

## BIG O of Hash Table (average case):

- Insert: O(1)
Comes down to how good your hash function is and how evenly it distributes things (minimizes the number of collisions). General Trend is O(1)

- Deletion: O(1)
- Access: O(1) Key = constant Value = O(n)

## RECAP:
- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-values quickly
- Hash tables store data in a large array, and work by hashing the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic
(talking about hash table, hash map, hash functions) NOT cryptographically secure hash functions (go by different rules).
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
