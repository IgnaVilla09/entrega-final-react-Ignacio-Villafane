import { Box, Button } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemListAdmin = ({ items, recargarDB }) => {
  return (
    <>
      <Box sx={{ margin: "20px", display: "flex", gap: "20px" }}>
        <Button variant="outlined" onClick={recargarDB}>
          ACTUALIZAR BASE DE DATOS
        </Button>
        <h2>
          Agregar datos en productsMock.js, guardar cambios y hacer click en el
          botón de arriba
        </h2>
      </Box>
      <div>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 20,
            paddingTop: "20px",
          }}
        >
          {items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </section>
      </div>
      ;
    </>
  );
};

export default ItemListAdmin;
