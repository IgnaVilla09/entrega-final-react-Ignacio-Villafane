import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, where, query } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

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

  return <ItemList items={items} />;
};

export default ItemListContainer;
