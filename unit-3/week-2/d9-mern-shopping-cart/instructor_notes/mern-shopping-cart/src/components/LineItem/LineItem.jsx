import './LineItem.css';

export default function LineItem({ lineItem, isPaid }) {
  return (
    // The LineItem component renders a single line item in an order, including its emoji, name, price, quantity, and extended price.
    <div className="LineItem">
      <div className="flex-ctr-ctr">{lineItem.item.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.name}</span>
        <span>{lineItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {/* The quantity of the item is displayed in a separate column with two buttons (minus and plus) on either side of it. These buttons are only displayed if the isPaid prop is falsy. If the isPaid prop is truthy, the buttons are not displayed, and the quantity is centered in the column. */}

        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >−</button>
        }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => alert('clicked')}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}