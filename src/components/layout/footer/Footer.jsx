import { Badge, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

const Footer = () => {
  const [itemsCategories, setItemsCategories] = useState([]);

  let navBar = collection(dataBase, "categories");

  useEffect(() => {
    getDocs(navBar).then((res) => {
      let newList = res.docs.map((item) => {
        return { id: item.id, ...item.data() };
      });
      setItemsCategories(newList);
    });
  });
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "#150681", height: "15vh" }}>
        <Badge
          component="h2"
          sx={{
            display: "flex",
            width: "100%",
            color: "white",
            justifyContent: "center",
            padding: 2,
          }}
        >
          Todos los derechos Reservados
        </Badge>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ul className="categories">
            <Link to="/products">
              <li style={{ borderBottom: "2px solid #fff", margin: "0 10px" }}>
                Productos
              </li>
            </Link>
            {itemsCategories.map((category) => (
              <Link key={category.id} to={category.path}>
                <li
                  style={{ borderBottom: "2px solid #fff", margin: "0 10px" }}
                >
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
