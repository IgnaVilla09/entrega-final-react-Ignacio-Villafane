import { useState, useEffect } from "react";
import ItemListAdmin from "./ItemListAdmin";
import { useParams } from "react-router-dom";
import { getDocs, collection, where, query, addDoc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { products } from "../../../productsMock";

const ItemListContainerAdmin = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  const recargarDB = () => {
    const prodCollection = collection(dataBase, "products");
    products.forEach((elemento) => {
      addDoc(prodCollection, elemento);
    });
  }; //Funcion que permite agregar productos a la base de datos

  useEffect(() => {
    let productsCollection = collection(dataBase, "products");
    let consult;

    if (!categoryName) {
      consult = productsCollection;
    } else {
      consult = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consult).then((res) => {
      let newList = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setItems(newList);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div>
        <div
          style={{
            height: "120px",
            backgroundColor: "#acacac33",
            margin: "35px",
          }}
        ></div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "25vw",
              height: "500px",
              backgroundColor: "#acacac33",
              margin: "35px",
              borderRadius: "25px",
            }}
          ></div>

          <div
            style={{
              width: "25vw",
              height: "500px",
              backgroundColor: "#acacac33",
              margin: "35px",
              borderRadius: "25px",
            }}
          ></div>

          <div
            style={{
              width: "25vw",
              height: "500px",
              backgroundColor: "#acacac33",
              margin: "35px",
              borderRadius: "25px",
            }}
          ></div>

          <div
            style={{
              width: "25vw",
              height: "500px",
              backgroundColor: "#acacac33",
              margin: "35px",
              borderRadius: "25px",
            }}
          ></div>
        </div>
      </div>
    );
  }

  return <ItemListAdmin items={items} recargarDB={recargarDB} />;
};

export default ItemListContainerAdmin;
