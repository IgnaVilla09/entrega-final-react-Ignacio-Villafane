import React, { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [user, setUserInfo] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del usuario:", user);
    // Aquí puedes realizar acciones adicionales con los datos, como enviarlos a un servidor
  };

  return (
    <Checkout setUser={handleChange} user={user} handleSubmit={handleSubmit} />
  );
};

export default CheckoutContainer;
