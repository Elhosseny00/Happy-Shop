import { useDispatch, useSelector } from "react-redux";
import "../Style-files/cart.css";
import {
  clearCart,
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../RTK/Slices/Cart";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return cart.length === 0 ? (
     <div className="empty">Cart IS Empty</div>
  ) : (
    <div className="cart">
      <div className="container">
        <div className="header">
          <h3>Your Products are here</h3>
        </div>
        <div className="cart-wrapper">
          {cart.map((product) => (
            <div className="cart-card" key={product.id}>
              <div className="cart-img-box">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="cart-product-info">
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
              <div className="butns">
                <div className="quantity-butns">
                  <button
                    onClick={() => dispatch(increaseQuantity(product.id))}
                  >
                    +
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                  >
                    -
                  </button>
                </div>
                <div className="remove-btn">
                  <button onClick={() => dispatch(deleteProduct(product.id))}>
                    Remove Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <div>${getTotalPrice()}</div>
          <div>Total</div>
        </div>
        <div className="clear">
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}
