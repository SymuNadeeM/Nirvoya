import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

import MyAccount from "./User/MyAccount";
import MyOrders from "./User/MyOrders";
import Layout from "./Layout";


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singledetails" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/layout"  element={<Layout />}>
             <Route path="/layout/my-account"  element={<MyAccount />} />
             <Route path="/layout/my-orders" element={<MyOrders />} />
         </Route>
        </Routes>
    </>
  );
}

export default App;
