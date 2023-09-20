import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LatestProducts from "./components/LatestProducts";
import Rates from "./components/Rates";
import TopNav from "./components/TopNav";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import CartIcon from "./components/CartIcon";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <TopNav />
      <BottomNav />
      <Routes>
        <Route path="/" element={
          <>
          <Landing />
          <Categories />
          <LatestProducts />
          <Rates />
          </>
        }>           
        </Route>

        <Route path="/:productId" element={<ProductPage />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/products" element={<LatestProducts />}></Route>

        <Route path="/products/:category" element={<Category/>}></Route>
      </Routes>
      <Footer />
      <CartIcon />
    </div>
  );
}

export default App;
