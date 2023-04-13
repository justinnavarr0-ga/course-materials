[MERN Shopping Cart Part 2 REPO](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/tree/main/unit-3/week-2/d9-mern-shopping-cart/9.2-mern-shopping-cart-part-2)

We want to be able to click the `add` button and have the item be added to the cart. 

We want to be able to add the `+` and `-` buttons and have the qty increment or decrement accordingly. 

Finally, we'll implement the `checkout` feature.

**Change Client-Side Routes Programmatically** means when we hit `checkout`, we get re-routed to our `orders history` page. 

## 1. Setup

`null`

## 2. Review MERN-Stack CRUD Logic & Code Flow

`useEffect` is a hook provided by React that allows you to perform side effects in function components. Side effects are actions that affect things outside the scope of the component, such as fetching data from an API, subscribing to events, manipulating the DOM, etc.

The `useEffect` hook lets you specify a function that will be called after the component has been rendered and the DOM has been updated. You can use this function to perform any side effects that you need. 

Explain Diagram for `A` only and have students look at `B` in their free time.

## 3. Adding Items to the Cart

If we take a look we'll see that `<OrderDetail>` is already mapping the order's line items into an array of `<LineItem>` components to be rendered in its JSX:

```jsx
// src/components/OrderDetail.jsx

const lineItems = order.lineItems.map(item =>
  <LineItem
    lineItem={item}
    isPaid={order.isPaid}
    key={item._id}
  />
);
```

❓ Why is the isPaid prop there? In other words, why would a line item need to know if the order is paid or not?

### Adding Items - Start with the UI

Each `<MenuListItem>` component is already rendering an [ADD] button that `console.logs` when clicked, so our work is done here...

Test this out. Is this working for y'all?

### Stub Up a **`handleAddToOrder`** Function

```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

...
/*--- Event Handlers --- */
async function handleAddToOrder(itemId) {
  // Baby step
  alert(`add item: ${itemId}`);
}

return (
  ...

```

So, the above function has to find its way to the `<MenuListItem />` component. 

### 💪 Practice Exercise - handleAddToOrder (5 minutes)

1. Step One
```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx
<MenuList
  menuItems={menuItems.filter(item => item.category.name === activeCat)}
  // Pass the handleAddToOrder function as a prop of the same name through the component hierarchy to the <MenuListItem> component.
  handleAddToOrder={handleAddToOrder}
/>

```

2. Step Two: Destructure that prop.
```jsx
// src/components/MenuList/MenuList.jsx

export default function MenuList({ menuItems, handleAddToOrder }) {
```

3. Step Three: Pass that prop `MenuListItem`

```jsx
// src/components/MenuList/MenuList.jsx

    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
```

4. Replace the `console.log('clicked')` with a call to `handleAddToOrder` with an argument of `menuItem._id`

```jsx
// src/components/MenuListItem/MenuListItem.jsx
export default function MenuListItem({ menuItem, handleAddToOrder}) {

<button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
```

5. Check that it works. Add an item. Does an alert pop up? 

### Adding Items - The Remaining Flow:

`null`

### Finish Coding the **`handleAddToOrder`** Function:

<hr>
</details>

<details>
<summary>
💪 Practice Exercise - Code handleAddToOrder (2 minutes)
</summary>
<hr>

Solution: 
```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

async function handleAddToOrder(itemId) {
  // alert(`add item: ${itemId}`);
  
  // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.

  // addItemToCart coming from src/utilities/orders-api.js
  // sending price hacker to get 90% off products. 
  // sending itemId as a router parameter
  const updatedCart = await ordersApi.addItemToCart(itemId);
  
  // 2. Update the cart state with the updated cart received from the server
  setCart(updatedCart);
}
```

<hr>
</details>



`addItemToCart` is callable on the existing order document itself:

```js
// models/order.js

// At the BOTTOM
...
// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    // It already exists, so increase the qty
    lineItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const item = await mongoose.model('Item').findById(itemId);
    // The qty of the new lineItem object being pushed in defaults to 1
    cart.lineItems.push({ item });
  }
  // return the save() method's promise
  return cart.save();
};
```

### Code the **`addToCart`** Controller Action

```js
// controllers/api/orders.js

// Add the item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...

  // Inside routes/api/orders.js, ordersCtrl.addToCart route param is :id
  await cart.addItemToCart(req.params.id); 
  res.json(cart);
}
```

Try logging out and logging back in. Test our cart. 

## 4. Changing the Quantity Ordered

```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

/*--- Event Handlers --- */
async function handleAddToOrder(itemId) {
  const updatedCart = await ordersAPI.addItemToCart(itemId);
  setCart(updatedCart);
}

// Add this function
async function handleChangeQty(itemId, newQty) {
  const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  setCart(updatedCart);
}
```

### Invoke the **`handleChangeQty`** Function

1. Pass `handleChangeQty`  down through the hierarchy...
```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

      <OrderDetail 
        order={cart}
        handleChangeQty={handleChangeQty}
      />
```

2. Destructure it in the `OrderDetail` components and pass prop into `LineItem` component
```jsx
// src/components/OrderDetail/OrderDetail.jsx

export default function OrderDetail({ order, handleChangeQty }) {

...

    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />

}  
```

3. Destructure handleChangeQty in LineItem component and refactor alerts in our buttons.
```jsx
// src/components/LineItem/LineItem.jsx

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {

// Refactor
onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}

// Refactor
onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
```

### Add the **`setItemQty`** Instance Method to the **`orderSchema`**

The `setItemQty` instance method is very similar to the `addItemToCart` we coded a bit ago:

```jsx
// models/order.js

// At the BOTTOM!!!

// Instance method to set an item's qty in the cart
orderSchema.methods.setItemQty = function(itemId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    // Sub-documents have the remove method on it. 
    lineItem.remove();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);
```

### Code the **`setItemQtyInCart`** Controller Action

```jsx
// controllers/api/orders.js

// Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  // check setItemQtyInCart from src/utilities/orders-api.js. See itemId, newQty?
  await cart.setItemQty(req.body.itemId, req.body.newQty); 
  res.json(cart);
}
```

This should now be persisted in the database. If we change a 6 pack of beers to 4 beers and refresh the page, it should come back as 4 beers. 

## 5. Checking Out an Order

One last feature!

**AAU, I want to click a [CHECKOUT] button that pays the order and sends me to the Order History Page.**


```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

...
async function handleCheckout() {
  // We're optimistic that this will succeed. 
  await ordersAPI.checkout();
  // We don't have this navigate function yet.
  navigate('/orders');
}

return (
  ...

```

Pass that `handleCheckout` to our `OrderDetail` component

```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

      <OrderDetail 
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
```

Now we have to destructure our `handleCheckout` prop in `OrderDetail.jsx` component

```jsx
// src/components/OrderDetail/OrderDetail.jsx 

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
```

Now we're ready to call it. For our checkout button, update the alert to the following:

```jsx
// src/components/OrderDetail/OrderDetail.jsx 

...
<button
  className="btn-sm"
  // Why don't we have to wrap this in an arrow function? 
  // Handlecheckout takes no arguments being passed in. 
  onClick={handleCheckout}
  disabled={!lineItems.length}
>CHECKOUT</button>
...

```

### Programmatic Routing Using the useNavigate Hook

React Router gives us a `useNavigate` hook...

```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

// Update this import
import { Link, useNavigate } from 'react-router-dom';
```

The `useNavigate` hook is a function like all hooks are - invoking it returns a `navigate` function:
```jsx
// src/pages/NewOrderPage/NewOrderPage.jsx

...
const categoriesRef = useRef([]);

// Use the navigate function to change routes programmatically
// Can now be used in our async function handleCheckout()
const navigate = useNavigate();
...
```

### Code the checkout Controller Action

```jsx
// controllers/api/orders.js

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save(); 
  res.json(cart);
}

```

<hr>
</details>

<details>
<summary>
What are Hash Tables?
</summary>
<hr>

Hash Tables

<hr>
</details>
