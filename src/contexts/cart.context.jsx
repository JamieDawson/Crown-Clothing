import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //Find if cartItems contains productToAdd
  //if found, increment quantity
  //return new array with modified cart items / new cart item
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = { isCartOpen, setIsCartOpen };

  const AddItemToCart = (productToAdd) => {};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
