import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [getAllProducts, setgetAllProducts] = useState([]);
  const [filterCat, setFilter] = useState([]);
  const [cart, setCart] = useState([]);
  // const [sort, setSort] = useState(products);
  const categories = [
    "All",
    ...getAllProducts
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products/");
      const products = await response.json();
      setgetAllProducts(products);
      setFilter(products);
    }
    getProducts();
  }, []);

  const filterCaregories = (cat) => {
    setFilter(
      cat === "All"
        ? getAllProducts
        : getAllProducts.filter((product) => product.category === cat)
    );
  };

  return (
    <>
      <Header categories={categories} filter={filterCaregories} />
      <Products list={filterCat} />
      <Cart />
    </>
  );
}

export default App;
