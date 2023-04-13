const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema')

const lineItemSchema = new Schema({
  // Set default qty to 1 when pushed into lineItems
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  // Add this to ensure virtuals are serialized
  toJSON: { virtuals: true }
})

// Add an extPrice to the line item
lineItemSchema.virtual('extPrice').get(function () {
  // 'this' is bound to the lineItem subdocument
  return this.qty * this.item.price
})

const orderSchema = new Schema({
  // Inform the populate method which model we would like to use the ObjectId with --> (ref: 'User')
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // Embedding the lineItemsSchema or an order
  lineItems: [lineItemSchema],
  // A user's unpaid order is their "cart"
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  // Serialize the virtual properties/virtuals
  toJSON: { virtuals: true }
});

// Add the following helpful virtuals to order documents
// Virtuals are fields that are not stored in the database but can be accessed as if they were part of the model instance.
orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

// statics are callable on the model, not an instance (document)
orderSchema.statics.getCart = function (userId) {
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
