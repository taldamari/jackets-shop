import Product from "../Product/Product";
import "./Products.css";

export default function Products({ list }) {
  return (
    <section className="products">
      {list.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          counter={product.counter}
        />
      ))}
    </section>
  );
}
