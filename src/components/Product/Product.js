import "./Product.css";

export default function Product({ title, price, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="img" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price} $</h6>
      </div>
    </div>
  );
}
