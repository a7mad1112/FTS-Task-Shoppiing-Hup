import Header from '../Header/Header';
import Routers from '../../routes/Routers';
import Footer from '../Footer/Footer';
import Carts from '../carts/Carts';
import { useSelector } from 'react-redux';
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisiable);
  return (
    <>
      <Header />
      {showCart && <Carts />}
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
