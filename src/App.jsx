import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Error from "./components/pages/Error/Error";
import HomeContainer from "./components/pages/Home/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
