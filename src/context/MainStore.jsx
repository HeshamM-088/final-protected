import { createContext } from "react";

const MainStore = createContext({
  products: [],
  cartItems: [],
});

export default MainStore;
