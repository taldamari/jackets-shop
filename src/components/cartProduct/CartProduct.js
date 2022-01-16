import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import "./CartProduct.css";

export default function CartProduct({ id, title, price, image, counter }) {
  const { handleCart } = useContext(ProductContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="img" />
      </div>
      <div className="product-info">
        <h4>{counter}</h4>
        <h5>{title}</h5>
        <h6>{price} $</h6>
      </div>
      <button
        onClick={() => {
          handleCart(true, id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter && handleCart(false, id);
        }}
      >
        -
      </button>
    </div>
  );
}
