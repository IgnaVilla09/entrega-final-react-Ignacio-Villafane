import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { menu } from "./menuRouter";
import Error from "../components/pages/Error/Error";
import ProtectedRoutes from "./ProtectedRoutes";
import ItemListContainerAdmin from "../components/pages/itemListContainerAdmin/itemListContainerAdmin";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menu.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<ItemListContainerAdmin />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
