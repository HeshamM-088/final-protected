import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Foter from "./components/Foter";
import MainStore from "./context/MainStore";
import axios from "axios";
import MainPage from "./pages/MainPage";
import CheckUser from "./context/UserContext";
import Admin from "./pages/Admin";
import CheckAdmin from "./CheckAdmin";
import Cart from "./pages/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [productToCart, setProductToCart] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://dataapi-tygq.onrender.com/products",
    }).then((data) => setProducts(data.data));
  }, []);

  useEffect(() => {
    const checkLocal = localStorage.cartItems;

    if (checkLocal) {
      setCartItems(JSON.parse(localStorage.cartItems));
    }
  }, [productToCart]);

  const increment = (item) => {
    // console.log(item);
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.count++;
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    localStorage.cartItems = JSON.stringify(cartItems);
    setProductToCart(!productToCart);
  };

  const decrement = (item) => {
    // console.log(item);
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.count > 1) {
          cartItem.count--;
        }
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    localStorage.cartItems = JSON.stringify(cartItems);
    setProductToCart(!productToCart);
  };

  const addToCart = (product) => {
    // console.log(product);
    const checkProduct = cartItems.some((item) => {
      return item.id === product.id;
    });
    if (checkProduct) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          item.count++;
        }
        return item;
      });
      setCartItems(newCartItems);
      setProductToCart(!productToCart);
    } else {
      product.count = 1;
      setCartItems([...cartItems, product]);
      setProductToCart(!productToCart);
    }
  };

  return (
    <CheckUser>
      <MainStore.Provider
        value={{
          products,
          cartItems,
          addToCart,
          increment,
          decrement,
          setProductToCart,
          productToCart,
          setCartItems,
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin"
            element={
              <CheckAdmin>
                <Admin />
              </CheckAdmin>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Foter />
      </MainStore.Provider>
    </CheckUser>
  );
};

export default App;
