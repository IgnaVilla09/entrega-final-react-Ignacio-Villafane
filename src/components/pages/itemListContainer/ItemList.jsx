import { Button } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, recargarDB }) => {
  return (
    <>
      {/* <Button variant="outlined" onClick={recargarDB}> 
        RECARGAR
      </Button> */}
      {/* Botón que ejecuta la función de agregar productos a la base de datos */}
      <div>
        <h1 style={{ textAlign: "center", fontSize: "4.2em" }}>PRODUCTOS</h1>
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

export default ItemList;
