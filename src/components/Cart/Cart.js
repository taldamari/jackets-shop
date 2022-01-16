import CartProduct from "../cartProduct/CartProduct";
import "./Cart.css";

export default function Cart({ cartProducts }) {
  let total = 0;
  cartProducts.map(({ price, counter }) => (total += price * counter));

  return (
    <section className="products">
      {cartProducts.map((product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          counter={product.counter}
        />
      ))}
      <div className="total">Total price: {total} $</div>
    </section>
  );
}
