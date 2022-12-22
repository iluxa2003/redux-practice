import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const cardIsShown = useSelector((state) => state.quant.isQuantityShown);
  return (
    <Layout>
      {cardIsShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
