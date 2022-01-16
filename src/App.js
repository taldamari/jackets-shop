import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import "./App.css";
import { useEffect, useState } from "react";
import ProductContext from "./context/ProductContext";

function App() {
  const [getAllProducts, setgetAllProducts] = useState([]);
  const [filterCat, setFilter] = useState([]);
  const [cart, setCart] = useState([
    getAllProducts.filter((p) => p.counter > 0),
  ]);
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
      products.map((prodact) => (prodact.counter = 0));
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

  const handleCart = (boolean, id) => {
    // console.log("handlecart", boolean, id);

    setgetAllProducts(
      getAllProducts.map((product) => {
        boolean && product.id === id
          ? product.counter++
          : !boolean && product.id === id && product.counter--;
        return product;
      })
    );
    setCart(getAllProducts.filter((p) => p.counter > 0));
  };

  return (
    <>
      <Header categories={categories} filter={filterCaregories} />

      <ProductContext.Provider value={{ handleCart: handleCart }}>
        <Cart cartProducts={cart} />
        <Products list={filterCat} />
      </ProductContext.Provider>
    </>
  );
}

export default App;
