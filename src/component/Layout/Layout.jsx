import React, { useContext } from "react";
import Header from '../Header/Header'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import { cartContext } from "../../context/cartContext";
import Carts from "../carts/Carts";
const Layout = () => {
  const { cartUiShow } = useContext(cartContext);
  return (
    <>
      <Header />
      {/* {"Show cart here if its context is true"} */}
      {
        cartUiShow && <Carts />
      }
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
