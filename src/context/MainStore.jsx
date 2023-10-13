import { createContext } from "react";

const MainStore = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  increment: () => {},
  decrement: () => {},
  setProductToCart: () => {},
  productToCart: false,
});

export default MainStore;
