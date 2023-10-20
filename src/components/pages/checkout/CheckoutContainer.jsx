import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [user, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...user, [e.target.name]: e.target.value });
  };

  return <Checkout setUser={handleChange} user={user} />;
};

export default CheckoutContainer;
