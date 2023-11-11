import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const { addToCart, getStockProduct } = useContext(CartContext);

  let totalQuantity = getStockProduct(id);

  useEffect(() => {
    let itemCollection = collection(dataBase, "products");

    let refDoc = doc(itemCollection, id);

    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(obj);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userEmail", email);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Email registrado correctamente!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <ItemDetail
      email={email}
      handleEmailChange={handleEmailChange}
      handleFormSubmit={handleFormSubmit}
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};

export default ItemDetailContainer;
