import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LatestProducts from "./components/LatestProducts";
import Rates from "./components/Rates";
import TopNav from "./components/TopNav";
import IconPage from "./IconPage";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import CartIcon from "./components/CartIcon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
          <TopNav />
          <BottomNav />
          <Landing />
          <Categories />
          <LatestProducts />
          <Rates />
          <Footer />
          <CartIcon />
          </>
        }>           
        </Route>

        <Route path="/:productId" element={<ProductPage />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/products" element={
          <>
          <TopNav />
          <BottomNav />
          <LatestProducts />
          <Footer />
          <CartIcon />
          </>
        }>           
        </Route>
      </Routes>
    </div>
  );
}

export default App;
