import { Badge, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
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
          <ul
            style={{
              display: "flex",
              gap: 20,
              fontSize: 18,
              listStyle: "none",
            }}
          >
            <Link to="/">
              <li
                style={{
                  borderBottom: 3,
                  borderBottomStyle: "solid",
                  borderColor: "white",
                }}
              >
                Inicio
              </li>
            </Link>
            <Link to="/category/procesador">
              <li
                style={{
                  borderBottom: 3,
                  borderBottomStyle: "solid",
                  borderColor: "white",
                }}
              >
                Procesadores
              </li>
            </Link>
            <Link to="/category/graficas">
              <li
                style={{
                  borderBottom: 3,
                  borderBottomStyle: "solid",
                  borderColor: "white",
                }}
              >
                GPU´s
              </li>
            </Link>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
