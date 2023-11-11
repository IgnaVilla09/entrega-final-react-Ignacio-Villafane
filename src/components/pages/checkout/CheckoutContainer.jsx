import React, { useContext, useState } from "react";
import Checkout from "./Checkout";
import {
  collection,
  serverTimestamp,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { dataBase } from "../../../firebaseConfig";
import CheckoutConfirmation from "./CheckoutConfirmation";

const CheckoutContainer = () => {
  const [user, setUserInfo] = useState({
    name: "",
    cellphone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, clearCartBuyed } = useContext(CartContext);
  let totalOrder = totalPrice();

  const handleChange = (e) => {
    setUserInfo({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: user,
      items: cart,
      total: "$" + totalOrder,
      date: serverTimestamp(),
    };
    let ordersCollection = collection(dataBase, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
    });
    cart.forEach((element) => {
      updateDoc(doc(dataBase, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
    clearCartBuyed();
  };

  return (
    <>
      {orderId ? (
        <CheckoutConfirmation orderId={orderId} />
      ) : (
        <Checkout
          setUser={handleChange}
          user={user}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default CheckoutContainer;
