# MERN-Stack Infrastructure

[SHOPPING CART PART 1 Video](https://generalassembly.wistia.com/medias/whg8z89nsk)

[MERN Shopping Cart Part 1](https://git.generalassemb.ly/SEI-Standard-Curriculum/SEIR-Course-Materials/tree/main/Unit_4/3-mern-shopping-cart/3.2.1-mern-shopping-cart-part-1)

## 1. Setup:

1. Clone starter code. 
2. `npm install`
3. Create a .env file
4. Create a terminal for Express
5. Create a terminal for React
6. Run `nodemon server` for Express
7. Run `npm run start` for React

## 2. Review the Starter Code

The `<OrderDetail>` component's JSX is now ready and waiting for an order to render!  However, we will have to refactor to accept some event handlers as props later when we code them. Conveniently, `<OrderDetail>` is used to render BOTH the "cart" (a user's unpaid order) as well as previously placed orders - allowing it to be reused in the `<OrderHistoryPage>`!

<hr>

</details>

<details>
<summary>

  What is the `<OrderDetail>` Component doing?
</summary>
<hr>

The `OrderDetail` component renders the details of an order, including the list of line items in the order and the order total. If the order object is falsy, the component returns null.

The component creates an array of LineItem components by mapping over the order.lineItems array. Each LineItem component is passed three props: lineItem, isPaid, and key.

The OrderDetail component then renders a heading section that displays the order ID (if the order has been paid for) or the text "NEW ORDER", as well as the date the order was last updated.

Next, the component renders a container for the line items, which are displayed using the line-item-container and flex-ctr-ctr CSS classes. If there are line items in the order, the component renders a list of LineItem components, followed by a total section that displays the total quantity and total price of the order. If the order has not been paid for, the component also renders a "CHECKOUT" button, which is disabled if there are no line items in the order.

If there are no line items in the order, the component displays the text "Hungry?".

<hr>
</details>
<hr>

## 2. Review the Starter Code:

A `<LineItem>` component used to render an order's line items has been included.

<hr>
</details>

<details>
<summary>

What is `<LineItem />` component doing?
</summary>
<hr>

This code defines a React functional component called LineItem, which takes two props: lineItem and isPaid. It exports this component as the default export of this module.

The LineItem component renders a single line item in an order, including its emoji, name, price, quantity, and extended price.

The component renders the emoji of the item in the first column, the name and price of the item in the second column, the quantity of the item in the third column, and the extended price of the item in the fourth column.

The quantity of the item is displayed in a separate column with two buttons (minus and plus) on either side of it. These buttons are only displayed if the isPaid prop is falsy. If the isPaid prop is truthy, the buttons are not displayed, and the quantity is centered in the column.

The component uses CSS classes to style its elements, which are imported from the LineItem.css file.

<hr>
</details>
<hr>

## 2. Review the Starter Code:

<hr>
</details>

<details>
<summary>

An `orders-api.js` API module is ready to rock! No new concepts, but we'll review each endpoint when we implement each feature.

</summary>
<hr>

This module exports four functions that interact with an API to manage a user's order.

The getCart() function sends a GET request to the server to retrieve an unpaid order (cart) for the logged-in user.

The addItemToCart(itemId) function sends a POST request to the server to add an item to the cart. It only sends the itemId parameter for security reasons (not pricing).

The setItemQtyInCart(itemId, newQty) function sends a PUT request to the server to update the quantity of an item in the cart. If the item is not currently in the cart, it will be added to the order. The function sends the itemId and newQty parameters as a data payload instead of as part of the URL.

The checkout() function sends a POST request to the server to update the isPaid property of the order (cart) to true.

<hr>
</details>
<hr>

## 2. Review the Starter Code:

A route module for the orders resource has been coded and mounted in `server.js` with a starts with path of `/api/orders`.

<hr>
</details>

<details>
<summary>

Where is this `server.js` code for `/api/orders` at?
</summary>
<hr>

```js
// server.js
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
```

<hr>
</details>
<hr>

## 2. Review the Starter Code:

<hr>
</details>

A controller module for the orders resource has been stubbed up but there's no code in the controller actions.

<details>
<summary>

Where is this controller module for orders resource? 
</summary>
<hr>

```js
// controllers/api/orders.js

// A cart is the unpaid order for a user
async function cart(req, res) {

}

// Add an item to the cart
async function addToCart(req, res) {

}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
}

// Update the cart's isPaid property to true
async function checkout(req, res) {

}
```
<hr>
</details>

<hr>
</details>

A new `<Route>` has been added to App.jsx that performs a client-side redirect using a `<Navigate>` component from react-router-dom.

<details>
<summary>
What is this new Route in App.jsx they're talking about?
</summary>
<hr>

```js
// src/pages/App.jsx

{/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
<Route path="/*" element={<Navigate to="/orders/new" />} />
```

<hr>
</details>

## Define the **Order** Model

![ERD Diagram](https://i.imgur.com/weiVjYB.png)

As you can see, we'll need an `Order` model.

We won't need a model for `LineItem` because line items will be embedded within the order it belongs to.

<details><summary>❓ But we still need to create something for <code>LineItem</code> - what is it?</summary>
<p>

**A `lineItemSchema`**

</p>
</details>

<hr>

## 💪 Practice Exercise - Stub Up the Order Model (3 minutes)

1. Create the module for the model.

2. Stub up the `Order` model all the way up to exporting the compiled model, however, don't define any properties.

3. Include the `timestamps: true` option.

> Hint: If you get stuck, take a look at another model.

<hr>
</details>

<details>
<summary>
Solution to Stubbing Up the Order Model
</summary>
<hr>

1. Create a new file in models folder  `models/orders.js`.
2. Inside `orders.js`
```js
// models/order.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({

}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema)
```
<hr>
</details>

<hr>

Let's go ahead and define our properties for our **order schema**

```js
// models/order.js

const orderSchema = new Schema({
  // Inform the populate method which model we would like to use the ObjectId with --> (ref: 'User')
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // Embed an order's line items is logical
  lineItems: [lineItemSchema],
  // A user's unpaid order is their "cart"
  isPaid: { type: Boolean, default: false },
}, {
  timestamps: true
});

```

Of course, if this were a real e-commerce application, there certainly would be additional properties like shipping and payments.

## 4. Define the lineItemSchema

Where should we define the `lineItemSchema`? Below or above the `orderSchema`❓❓❓ Why❓❓❓

```js
// models/order.js

// Require the itemSchema below
const itemSchema = require('./itemSchema');

// Add schema below
const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  // Why is this not item: [itemSchema] ???
  item: itemSchema
}, {
  timestamps: true
});
```

Do a check to make sure our code is compiling. 

**Note (SUMMARY):** Creating a virtual field in Mongoose can add additional synchronous actions when fetching data, so it's important to keep virtual fields simple to avoid adding substantial load to each request, and consider using Mongoose's lean feature when performing queries to avoid generating unnecessary virtual fields.

## 5. Define the Virtual Properties for orderSchema and lineItemSchema: 

### What are Virtuals?

In Mongoose, virtuals are fields that are not stored in the database but can be accessed as if they were part of the model instance. 

Simply put, Virtuals are computed properties that are not persisted in the document/database.

### Defining are Virtuals

CODE NOT RELATED TO SEI-CAFE!!! DO NOT MEMORIZE!!!
```js
const personSchema = new Schema({
  firstName: String,
  lastName: String
}, {
  timestamps: true
});
```
It's likely that any application using this model would want to regularly use the "full name" of a person.

Without virtuals, the following code snippet would be commonplace:

CODE NOT RELATED TO SEI-CAFE!!! DO NOT MEMORIZE!!!
```js
const fullName = `${person.firstName} ${person.lastName}`;
```

There are downsides to computing values like the above:

- It's dull and boring code.
- It's not DRY, it's likely we would have to repeat the calculation multiple times throughout the app.
- It's inconvenient because the computed value is not attached to the document itself - it would be more convenient to encapsulate such logic within the document itself, and that's what virtuals do!

CODE NOT RELATED TO SEI-CAFE!!! DO NOT MEMORIZE!!!
```js
const personSchema = new Schema({
  firstName: String,
  lastName: String
}, {
  timestamps: true
});

// Define a getter function for the fullName virtual
personSchema.virtual('fullName').get(function() {
  // The this keyword is the document
  return `${this.firstName} ${this.lastName}`;
});
```

With the `fullName` virtual now defined, any person document can access it as `personDoc.fullName`!

❓ Could we have used an arrow function above?
ANswer: No! Mongoose is setting the `this` keyword to be the document - it's binding it explicitly. 

### Serializing Virtuals

What is serializing in Mongooose?

In Mongoose, serializing a document means converting a document instance, which includes all of its properties and methods, into a plain JavaScript object so that it can be easily transmitted over the network or stored in a data store that does not support Mongoose models or methods. This is typically done using the `.toObject()` or `.toJSON()` methods provided by Mongoose.

Serializing can be compared to packing items in a suitcase before a trip - just as items need to be organized and packed in a way that makes them easily transportable, serializing a document involves organizing and converting its data into a format that is easily transferable and usable in different contexts.


Virtual properties are not automatically included when the document is serialized. 

If want the virtuals to be included, and all that takes is another schema option:
```js
  // Include virtuals when doc is serialized to JSON
  toJSON: { virtuals: true }
```

## Adding an extPrice Virtual to lineItemSchema

```js
// models/order.js

...
const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  // adding timestamps
  timestamps: true,
  // Add this to ensure virtuals are serialized
  toJSON: { virtuals: true }
});

// Add an extPrice to the line item
lineItemSchema.virtual('extPrice').get(function () {
  // 'this' is bound to the lineItem subdocument
  return this.qty * this.item.price;
});
...

```

## Adding Virtuals to the orderSchema

```js
// models/order.js

...
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false },
}, {
  timestamps: true,
  // Serialize those virtuals!
  toJSON: { virtuals: true }
});

// Add the following helpful virtuals to order documents
orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
  // .id is the stringified version of the ._id so that we can call slice()
  return this.id.slice(-6).toUpperCase();
});
...

```

- [x] Before moving on to implementing code in the React app, now would be a good time to uncomment the Order model in `crud-helper.js`.

## 6. Get the User's Cart - Client-Side

AAU, when viewing the new order page, I want to see my current cart

### What is a "Cart"

Basically, don't define a separate model.

One of the biggest mistakes made by developers when implementing an e-commerce app is thinking a user's shopping cart requires a separate Cart model.

Actually, the cart is nothing more than the **user's current unpaid order!**

As usual, we'll start with the client when implementing "viewing the cart".

### Add the cart State

```jsx
// src/pages/NewOrderPage.jsx

const [cart, setCart] = useState(null);
```

### Fetching the User's Cart:

```jsx
// src/pages/NewOrderPage.jsx

...
useEffect(function() {
  async function getItems() {
    const items = await itemsAPI.getAll();
    categoriesRef.current = items.reduce((cats, item) => {
      const cat = item.category.name;
      return cats.includes(cat) ? cats : [...cats, cat];
    }, []);
    setMenuItems(items);
    setActiveCat(items[0].category.name);
  }
  getItems();

  // Load cart (a cart is the unpaid order for the logged in user)
  async function getCart() {
    // It's okay to write/call code that doesn't exist yet
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
  getCart();
}, []);
```

### 💪 Practice Exercise - Add the Missing import (1 minute)

```jsx
// src/pages/NewOrderPage.jsx

import * as itemsAPI from '../../utilities/items-api';
// Add the following import
import * as ordersAPI from '../../utilities/orders-api';
```

Are the servers happy?

![Happy Servers?](https://i.imgur.com/FTup22f.png)

## 7. Define the getCart Static Model Method

### What are Mongoose Static Methods?
In Mongoose, static methods are methods that are defined on the model and can be called directly on the model itself, rather than on a model instance. 

These methods are typically used for operations that involve the entire collection or a subset of documents within the collection, such as creating, querying, or updating multiple documents at once. 

Static methods can be thought of as analogous to static methods in traditional object-oriented programming languages, which are also called on the class rather than on an instance of the class.

### Add a getCart Static on the Order Model

> Note: **Upserting** in database lingo means to insert (create) a record/document if it doesn't already exist when attempting an update.

```js
// models/order.js

// At the bottom.
...
// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function(userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model('Order', orderSchema);
```

## 8. Get the User's Cart - Server-Side

Uncomment the first line where the Order model is required:

```js
// controllers/api/orders.js

const Order = require('../../models/order');
// const Item = require('../../models/item');

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}
```

- [x] React Developer Tools confirms that we have our cart state!

## 9. Render the <OrderDetail> Component

In `src/pages/NewOrderPage.jsx`, our `<OrderDetail />` component is being rendered. But if we check out our `<OrderDetail />`...
```js
// OrderDetail.jsx
if (!order) return null;
```
It look slike our OrderDetail needs a prop called `{order}`

```js
// src/pages/NewOrderPage.jsx

<OrderDetail order={order} />
// OR???
<OrderDetail order={cart} />
```
