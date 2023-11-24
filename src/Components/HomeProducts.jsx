import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/Slices/ProductHomeSlice";
import { addToCart } from "../RTK/Slices/Cart";

export default function HomeProducts() {
  const [popUpMessage, setPopUpMessage] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  if (status === "loading") {
    return <span>...Loading</span>;
  }
  if (status === "failed") {
    return <span>Error{error}</span>;
  }

  const hundeleAddToCart = (product) => {
    dispatch(addToCart(product));
    setPopUpMessage(`${product.name} added to cart `);
    setTimeout(() => {
      setPopUpMessage("");
    }, 2000);
  };
  return (
    <div className="home-product">
              {popUpMessage && (
          <div className="popup">
            <p>{popUpMessage}</p>
          </div>
        )}
      <div className="container">
        <div className="header">
          <h3>Best seller products</h3>
        </div>
        <div className="wrapper">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="img-box">
                <div className="cart-icon-fav-icon">
                  <i
                    className="fa-solid fa-cart-shopping"
                    onClick={() => hundeleAddToCart(product)}
                  ></i>
                </div>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
