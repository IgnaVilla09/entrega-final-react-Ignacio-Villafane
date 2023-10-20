import HomeContainer from "../components/pages/Home/HomeContainer";
import Cart from "../components/pages/cart/Cart";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const menu = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "products",
    path: "/products",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "cardDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
