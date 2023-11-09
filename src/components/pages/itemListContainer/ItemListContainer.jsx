import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
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
