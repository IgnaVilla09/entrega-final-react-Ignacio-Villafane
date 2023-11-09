import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let obj = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(obj);
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
