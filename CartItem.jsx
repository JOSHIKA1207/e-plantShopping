import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="100"
              />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>

                  <button
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  dispatch(removeItem(item.id))
                }
              >
                Delete
              </button>
            </div>
          ))}

          <div className="total-section">
            <h2>Total Cost: ${totalCost.toFixed(2)}</h2>

            <button
              className="shopping-btn"
              onClick={() =>
                alert("Continue Shopping")
              }
            >
              Continue Shopping
            </button>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
