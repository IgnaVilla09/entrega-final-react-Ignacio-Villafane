import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
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
  );
};

export default ItemList;
