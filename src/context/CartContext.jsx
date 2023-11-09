import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let exist = itemExist(product.id);
    if (exist) {
      console.log("Ya esta en el carrito");
    } else {
      console.log("Item unico");
    }
    setCart([...cart, product]);
  };

  const itemExist = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const clearCart = () => {};

  const deleteProduct = () => {};

  const data = { cart, addToCart, clearCart, deleteProduct };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
