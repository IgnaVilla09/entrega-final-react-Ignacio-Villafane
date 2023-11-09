import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = itemExist(product.id);
    if (exist) {
      let newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const itemExist = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const getStockProduct = (id) => {
    let productFound = cart.find((elemento) => elemento.id === id);
    return productFound?.quantity;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (id) => {
    let CartCleaned = cart.filter((product) => product.id !== id);
    setCart(CartCleaned);
  };

  const totalPrice = () => {
    let total = cart.reduce((i, elemento) => {
      return i + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const totalQuantity = () => {
    let total = cart.reduce((i, item) => {
      return i + item.quantity;
    }, 0);
    return total;
  };

  const data = {
    cart,
    addToCart,
    getStockProduct,
    clearCart,
    deleteProduct,
    totalPrice,
    totalQuantity,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
