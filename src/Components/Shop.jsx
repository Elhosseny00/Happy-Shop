import { useDispatch, useSelector } from "react-redux";
import "../Style-files/shop.css";
import { useEffect, useState } from "react";
import { fetchShopProducts } from "../RTK/Slices/ProductHomeSlice";
import { addToCart } from "../RTK/Slices/Cart";
import ScrollBtn from "./ScrollBtn";

export default function Shop() {
  const [selectedCateg, setSelectedCateg] = useState("all");
  const [activeCateg, setActiveCateg] = useState("all");
  const [popUpMessage, setPopUpMessage] = useState("");
  const dispatch = useDispatch();
  const shopProducts = useSelector((state) => state.products.shopProducts);
  const status = useSelector((state) => state.products.shopStatus);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShopProducts());
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

  const hundleFilterCate = (category) => {
    setSelectedCateg(category);
    setActiveCateg(category);
  };

  const filterProducts =
    selectedCateg === "all"
      ? shopProducts
      : shopProducts.filter((product) => product.category === selectedCateg);
  return (
    <>
      <ScrollBtn />
      <div className="shop">
        <div className="container">
          <div className="header">
            <h3>our shop</h3>
          </div>
          <div className="intro">
            <div className="one">
              <div className="text">
                <h3>Stylish Clothes</h3>
              </div>
            </div>
            <div className="two">
              <div className="text">
                <h3>Electronics</h3>
              </div>
            </div>
            <div className="three">
              <div className="text">
                <h3>Sneakers & classic</h3>
              </div>
              <div className="img-box"></div>
            </div>
          </div>
          <div className="shop-products">
            <div className="buttons">
              <button
                className={activeCateg === "all" ? "active" : ""}
                onClick={() => hundleFilterCate("all")}
              >
                All
              </button>
              <button
                className={activeCateg === "clothes" ? "active" : ""}
                onClick={() => hundleFilterCate("clothes")}
              >
                Clothes
              </button>
              <button
                className={activeCateg === "electronics" ? "active" : ""}
                onClick={() => hundleFilterCate("electronics")}
              >
                Electronics
              </button>
            </div>
            <div className="cards">
              {filterProducts.map((product) => (
                <div className="card" key={product.id}>
                  <div className="img-box">
                    <div className="cart-icon-fav-icon">
                      <i
                        className="fa-solid fa-cart-shopping"
                        onClick={() => hundeleAddToCart(product)}
                      ></i>
                    </div>
                    <img src={product.image} alt="" />
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
        {popUpMessage && (
          <div className="popup">
            <p>{popUpMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}
