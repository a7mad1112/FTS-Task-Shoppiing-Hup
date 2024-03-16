import React, { useState, useContext, useEffect } from 'react';
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/commom-section/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import { productsContext } from '../../context/productsContext';
import './all-products.css';
import ProductCard from '../component/productCard/ProductCard';
import ReactPaginate from 'react-paginate';
const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortTerm, setSortTerm] = useState('az');
  const { products } = useContext(productsContext);
  const [pageNumber, setPageNumber] = useState(0);

  const sortProducts = (products) => {
    if (sortTerm === 'az' || sortTerm === 'default')
      return products.slice().sort((a, b) => a.title.localeCompare(b.title));
    if (sortTerm === 'za')
      return products.slice().sort((a, b) => b.title.localeCompare(a.title));
    if (sortTerm === 'hp')
      return products.slice().sort((a, b) => b.price - a.price);
    if (sortTerm === 'lp')
      return products.slice().sort((a, b) => a.price - b.price);
    return products;
  };

  const searchedProduct = sortProducts(
    products.filter((item) => {
      if (searchTerm.value === '') return item;
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
  );

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const productsToShow = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = [
    {
      name: 'ملابس',
      subcategories: [{ name: 'احذية' }, { name: 'طواقي' }, { name: 'بلايز' }],
    },
    {
      name: 'الكترونيات',
      subcategories: [{ name: 'كفرات هواتف' }, { name: 'ملصق لابتوب' }],
    },
  ];

  const brands = [
    { name: 'Nike' },
    { name: 'Puma' },
    { name: 'Adidas' },
    { name: 'Biba' },
  ];
  return (
    <Helmet title="جميع المنتجات">
      <CommonSection title={'جميع المنتجات'} />
      <section>
        <Container>
          <Row>
            {/* Side bar */}
            <Col lg="3" md="4" sm="12" xs="12">
              <div className="sidebar">
                {/* categories filter */}
                <h4>الفئات</h4>
                <div className="accordion" id="categoriesAccordion">
                  {categories.map((category, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`categoryHeading${index}`}
                      >
                        <button
                          className="accordion-button"
                          style={{ outline: 'none', boxShadow: 'none' }}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#categoryCollapse${index}`}
                          aria-expanded="true"
                          aria-controls={`categoryCollapse${index}`}
                        >
                          {category.name}
                        </button>
                      </h2>
                      <div
                        id={`categoryCollapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`categoryHeading${index}`}
                        data-bs-parent="#categoriesAccordion"
                      >
                        <div className="accordion-body">
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <div className="form-check" key={subIndex}>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`categorySubcategory-${index}-${subIndex}`}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`categorySubcategory-${index}-${subIndex}`}
                                >
                                  {subcategory.name}
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* brands filter */}
                <div className="accordion mt-4" id="brandsAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="brandsHeading">
                      <button
                        className="accordion-button"
                        type="button"
                        style={{ outline: 'none', boxShadow: 'none' }}
                        data-bs-toggle="collapse"
                        data-bs-target="#brandsCollapse"
                        aria-expanded="true"
                        aria-controls="brandsCollapse"
                      >
                        العلامات التجارية
                      </button>
                    </h2>
                    <div
                      id="brandsCollapse"
                      className="accordion-collapse collapse show"
                      aria-labelledby="brandsHeading"
                      data-bs-parent="#brandsAccordion"
                    >
                      <div className="accordion-body">
                        {brands.map((brand, index) => (
                          <div className="form-check" key={index}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`brand-${index}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`brand-${index}`}
                            >
                              {brand.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* price filter */}
                <div className="my-4">
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      id="maxPrice"
                      style={{ outline: 'none', boxShadow: 'none' }}
                      name="maxPrice"
                      // value={maxPrice}
                      // onChange={(e) => setMaxPrice(e.target.value)}
                      placeholder="ادخل اعلى سعر"
                    />
                  </div>
                </div>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button
                    className="shop_btn d-flex align-items-center justify-content-between gap-2"
                    // onClick={scrollToNextSection}
                  >
                    بحث
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="9" md="8" sm="12" xs="12">
              {/* Product display section */}
              <div className="products">
                <div className="search_widget d-flex align-items-center justify-content-between gap-2">
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                  <input
                    type="search"
                    placeholder="أنا ابحث عن..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Row>
                  {productsToShow.map((item) => (
                    <Col
                      className="mt-5"
                      xl="4"
                      lg="6"
                      md="6"
                      sm="6"
                      xs="12"
                      key={item.id}
                    >
                      <ProductCard item={item} />
                    </Col>
                  ))}
                </Row>
                <div className="pagination-container">
                  <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel="Prev"
                    nextLabel="Next"
                    containerClassName="paginationBtns"
                    activeClassName="active_pagination"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllProducts;
