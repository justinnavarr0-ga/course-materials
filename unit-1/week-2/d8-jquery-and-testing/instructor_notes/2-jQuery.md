# jQuery 

[jQuery Class Repo Lecture](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-1/week-2/d8-jquery-and-testing/8.1-jquery.md)

- Create a connectFourStarterCode folder
- Does the starter code work? 

## 1. Setup

`null`

## 2. What is jQuery?

jQuery is an open-source JavaScript library that simplifies client-side scripting of HTML. 

It provides a set of methods and utilities that make it easier to perform common tasks such as event handling, AJAX calls, animation, and DOM manipulation. 

jQuery has become a widely used library and is known for its ease of use, cross-browser compatibility, and extensibility through plugins.

### Library vs Framework:

- [x] For an analogy - think of libraries as the tools and frameworks as the construction crew.

The main difference between a library and a framework is in how they are used and who controls the flow of the application.

A library is a collection of reusable code that provides specific functionality, such as DOM manipulation or AJAX calls. When using a library, the developer controls the flow of the application and decides when to call the library functions to achieve a desired result.

A framework, on the other hand, provides a structure for building an application and controls the flow of the application. A framework often provides a set of rules and guidelines that developers must follow in order to use the framework effectively. The developer provides the specifics of the application, but the framework provides the overall structure and controls the application flow.

In summary, a library is a collection of code that provides specific functionality that can be used by a developer, while a framework provides an overall structure and controls the flow of an application.

### Why (or Why Not) Use jQuery?

- jQuery's use in new projects is in steep decline.

- However, there are tons of legacy projects that continue to use jQuery so there are tons of jobs where jQuery is a required skill.

- Therefore, you want to be able to include jQuery on your resume - so on with the lesson!

#### Browser Incompatibility

`Then John, the genius that he is, created jQuery to provide a level of abstraction above these incompatibilities so that jQuery, not the developer had to deal with incompatibility issues. This is the main reason jQuery became so popular!`

#### Productivity

jQuery's Motto: `"write less, do more"`

#### Satisfaction

Some developers consider using jQuery to be more "fun" than writing plain vanilla JS.

#### AJAX

I call it AJAJ. Why?

#### What Can jQuery Do?

There is nothing jQuery can do that can't be accomplished with vanilla JavaScript.

#### jQuery Documentation

`null`

## 3. Adding jQuery to a Project

[jQuery to Human Eyes](https://code.jquery.com/jquery-3.6.1.js)
[jQuery Minified](https://code.jquery.com/jquery-3.6.1.min.js)

```html
  <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script defer src="script.js"></script>
```

- Talk about saving jQuery locally compared to using a CDN

- 👀 There's no reason to use defer when loading libraries because they themselves do not access the DOM

## 4. Selecting DOM Elements with jQuery

- [x] Quiz Time: ❓ What vanilla JS methods have we used to select elements in the DOM?

#### The jQuery Function, aka - $()

```js
> const $msgEl = $('h1');
< undefined
> $msgEl
< S.fn.init [h1, prevObject: S.fn.init(1)]
```

`$msgEl` is holding a jQuery Object

- [x] Is a jQuery Object different than Javascript object? Let's find out.

## 5. Selecting DOM Elements with jQuery

- Yes, a jQuery object is different than a regular JavaScript object.

- The jQuery Object "wraps" the selected DOM elements and provides them with jQuery's super-power methods:

- Although jQuery objects are still JavaScript objects, and inherit from the base Javascript Object class, they have additional properties and methods that are specific to jQuery. For example, jQuery objects have methods like `addClass`, `removeClass`, `attr`, `css`, and **many others** that are **not** available on regular JavaScript objects.

### ❓ Review Questions (1 min)

- [x] Pop Quiz Time


## 6. Changing the Content of Elements Using jQuery

#### 👉 YOU DO - Select an Element (1 min)

- Refactor
```js
/*----- cached elements  -----*/
// const messageEl = document.querySelector('h1');

const $messageEl = $('h1')
```

### The html() Method

- Imagine they gave us no examples. How would we go about this?

- Gamble between text and html?

`null`

Do this in CONSOLE ONLY!
```console
$('#board > div').html('SEI')
```


### Getters & Setters

```html
<div id="bestBurgerJoint">
  Shake Shack is the best burger spot in the entire United States of America.
</div>
```

```js
// Get the current HTML content of the element
const blasphemy = $('#bestBurgerJoint').html();
console.log(blasphemy); // Output: This is the initial content.

// Set new HTML content for the element
$('#bestBurgerJoint').html('In and Out pays their workers better.');

```

In the example above, we first use the `.html()` method to `get` the current HTML content of the `#bestBurgerJoint` element and log it to the console. We then use the same method to `set` new HTML content for the same element.

Note that if you use `.html()` to set new content, any previous content of the element will be replaced with the new content. If you want to `append` new content to the existing content of an element, you can use the `.append()` method instead.

```js
$('#bestBurgerJoint').append('But In and Out is so BASIC!')
$('#bestBurgerJoint').html()
```

- **Important** Talk about Method Overloading. Our `.html()` is a perfect example of Method Overloading. 

## 7. Modifying the CSS of Elements Using jQuery

`null`

- 👀 You can also use kebob-casing for the CSS property if you quote the key name, e.g., `'border-color'`.

### 👉 YOU DO - Refactor Rendering the Board (2 mins)

1. Refactor the following two lines within the renderBoard function to use jQuery instead:

```js
// const cellEl = document.getElementById(cellId);
// cellEl.style.backgroundColor = COLORS[cellVal];
const $cellEl = $('#' + cellId).css({'background-color': COLORS[cellVal]})
```

## 8. Event Handling Using jQuery

#### Basic Event Handling

`null`

### 👉 YOU DO - [Play Again] Button Refactor (3 mins)

👉 YOU DO - [Play Again] Button Refactor (3 mins)

#### 1. In the "cached elements" code section, select the button using jQuery instead.

```js
// const playAgainBtn = document.querySelector('button');
const $playAgainBtn = $('button')
```

#### 2. With step 1 completed, it's necessary to refactor the following line of code in the renderControls function:

DOM:::
```js
playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

// Hint: Put jQuery's .css() method to work!
```

jQuery:::
```js
$playAgainBtn.css('visibility', winner ? 'visible' : 'hidden');
```

#### Refactor Adding an Event Listener to the [Play Again] Button

Let's uncomment the line of code in step 3 above and make the minor refactor to jQuery:

```js
$playAgainBtn.on('click', init);
```

### Event Delegation Using jQuery

#### ❓ What is Event Delegation?

Event Delegation uses a single event listener to listen for events on any number of nested elements.

1. Refactor the following line of code in the "event listeners" code section:

DOM
```js
document.getElementById('markers').addEventListener('click', handleDrop);
```

jQuery
```js
$('#markers').on('click', handleDrop)
```

2. Refresh and verify that the game still works.

#### Remove the Current "Guard" Code:

Let's comment out the follow line of code in handleDrop that guards against a missed click:

```js
   // Guards...
   // if (colIdx === -1) return;
```

#### 👉 YOU DO - Evaluate the Error (1 min)

```js
/*----- event listeners -----*/
$('#markers').on('click', 'div', handleDrop);
```

Explain...

## 9. Should I Use jQuery?

`null`

## 10. Summary

`null`

## 11. Further Study

`null`

- Code Minification

[Uncompressed jQuery](https://code.jquery.com/jquery-3.6.3.js)

[Minified jQuery](https://code.jquery.com/jquery-3.6.3.min.js)

