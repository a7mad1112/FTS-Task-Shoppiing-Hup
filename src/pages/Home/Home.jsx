import React, { useContext, useEffect, useState } from 'react';
import Helmet from '../component/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero2.svg';
import './home.css';
import Categories from './component/cagegories/Categories';
// data for features section
import featureImg01 from '../../assets/images/fastShipping.svg';
import featureImg03 from '../../assets/images/week.svg';
import { productsContext } from '../../context/productsContext';
import ProductCard from '../component/productCard/ProductCard';

const featureData = [
  {
    title: 'توصيل سريع',
    imgUrl: featureImg01,
    desc: 'احصل على طلبك بسرعة وكفاءة مع خيارات الشحن السريعة التي نقدمها.',
    key: 1,
  },
  {
    title: 'دعم العملاء على مدار الساعة',
    imgUrl: featureImg03,
    desc: 'هل لديك سؤال أو قلق؟ فريق دعم العملاء لدينا متاح على مدار الساعة لمساعدتك.',
    key: 2,
  },
];
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { products } = useContext(productsContext);
  // let productsToShow ; // create a copy of products array
  const [productsToShow, setProductsToShow] = useState([]);
  const [category, setCategory] = useState('all');
  function filterProducts() {
    if (category === 'all') {
      setProductsToShow(products);
    } else {
      setProductsToShow(products.filter((prod) => prod.category === category));
    }
  }
  useEffect(() => {
    filterProducts();
  }, [category]);
  const hotProducts = [products[12], products[16], products[19], products[5]];
  const scrollToNextSection = () => {
    const productsSection = document.querySelector('.products-section');
    // Scroll to the next section
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Helmet title="Home">
      {/* === hero section === */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <h5 className="mb-3 text-blue">اكتشف أحدث المنتجات</h5>
                <h2 className="mb-4 hero_title text-blue">
                  <span>قم</span> بترقية أجهزتك&nbsp;
                  <span>بتقنياتنا</span>
                </h2>
                <p>
                  ابحث عن أحدث المنتجات والأجهزة في متجرنا عبر الإنترنت. من
                  الهواتف الذكية والأجهزة المحمولة إلى أجهزة منزل ذكية وأجهزة
                  ألعاب، لدينا كل ما تحتاجه للبقاء على اتصال والاستمتاع.
                </p>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button
                    className="shop_btn d-flex align-items-center justify-content-between gap-2"
                    onClick={scrollToNextSection}
                  >
                    تسوق الان <i className="ri-arrow-left-line"></i>
                  </button>

                  <button className="all-products-btn">
                    <Link to="/products">مشاهدة جميع المنتجات</Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" className="mt-5">
              <div className="hero_img">
                <img className="w-100" src={heroImg} alt="hero img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* === Categories Section === */}
      <section>
        <Categories />
      </section>
      {/* === Popular Products Section === */}
      <section className="products-section">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>المنتجات الشائعة</h2>
            </Col>
            {productsToShow.slice(0, 8).map((item) => (
              <Col
                className="mt-5"
                xl="3"
                lg="4"
                md="4"
                sm="6"
                xs="12"
                key={item.id}
              >
                <ProductCard item={item} />
              </Col>
            ))}
            <Col lg="12" className="text-center mt-5">
              <Link className="more-products" to={'/products'}>
                اضغط هنا لتصفح المزيد من المنتجات
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* === Features Section === */}
      <section>
        <Container>
          <Row>
            <Col className="text-center" lg="12">
              <h5 className="feature_subtitle mb-4">اكتشف أحدث المنتجات</h5>
              <h2 className="feature_title">استرخ واستمتع سنقوم بالتوصيل</h2>
              <p className="mb-1 mt-4 feature_text">
                هناك العديد من البدائل التي يمكن استخدامها في العربية للنص
                الوهمي مثل "النص العربي المؤقت" أو "النص البديل المؤقت".
              </p>
            </Col>

            {featureData.map((item) => (
              <Col className="mt-5" lg="6" md="6"  key={item.key}>
                <div className="feature_item text-center px-5 py-3">
                  <img className="mb-3" src={item.imgUrl} alt="feature-img" />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
