import React from "react";
import Header from "../Header/Header";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* {"Show cart here if its context is true"} */}
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
