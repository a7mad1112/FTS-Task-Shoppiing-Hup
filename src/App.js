import { useState } from "react";
import Layout from "./component/Layout/Layout";
import { productsContext } from "./context/productsContext";
import productsFromFakeData from "./assets/fake-data/products";
const App = () => {
  const [products, setProducts] = useState(productsFromFakeData);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <Layout />
    </productsContext.Provider>
  );
};

export default App;
