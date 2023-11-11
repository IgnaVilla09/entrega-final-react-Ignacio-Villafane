import { Box } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [itemsCategories, setItemsCategories] = useState([]);

  let navBar = collection(dataBase, "categories");

  useEffect(() => {
    getDocs(navBar).then((res) => {
      let newList = res.docs.map((item) => {
        return { id: item.id, ...item.data() };
      });
      setItemsCategories(newList);
    });
  }, []);

  return (
    <>
      <Box className={"containerNavbar"} sx={{ height: 110 }}>
        <Link to="/" className="logoNav">
          <img
            style={{ width: 70, height: 70, marginTop: 5 }}
            src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
            alt="Logo"
          />
          <h3 style={{ fontSize: 20, textAlign: "center", color: "white" }}>
            React Store Gaming
          </h3>
        </Link>
        <ul className="categories">
          <Link to="/products">
            <li>Productos</li>
          </Link>
          {itemsCategories.map((category) => (
            <Link key={category.id} to={category.path}>
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>

        <CartWidget />
      </Box>
    </>
  );
};
