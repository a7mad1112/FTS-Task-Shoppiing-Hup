import React, { useEffect, useReducer, useCallback, useMemo } from 'react';
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/commom-section/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import './all-products.css';
import ProductCard from '../component/productCard/ProductCard';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import { fetchData } from './../../utils/fetchData';
import ProductCardSkeleton from '../../component/skeletons/ProductCardSkeleton';
import { reducer } from './sideBarReducer';
import AccordionSkeleton from '../../component/skeletons/AccordionSkeleton';
import { useLocation } from 'react-router-dom';

const initialState = {
  search: '',
  page: 1,
  subcategoryIds: [],
  categoryId: '',
  brandIds: [],
  'max-price': 0,
  limit: 6,
  fields: 'mainImage,price,name,_id',
};

const AllProducts = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  const categoryId = searchParams.get('categoryId') || '';
  const [queries, dispatchQueries] = useReducer(reducer, {
    ...initialState,
    search: initialSearch,
    categoryId,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const queryString = useMemo(() => {
    return (
      '?' +
      Object.keys(queries)
        .filter((key) => {
          const value = queries[key];
          if (Array.isArray(value)) return value.length;
          return value;
        })
        .map((key) => {
          const value = queries[key];
          if (Array.isArray(value)) {
            return `${key}=${value.join(',')}`;
          }
          return `${key}=${value}`;
        })
        .join('&')
    );
  }, [queries]);
  let clonedQueryString = queryString.slice();
  const productsQuery = useQuery({
    queryFn: () => fetchData(`products${clonedQueryString}`),
    queryKey: ['products'],
  });
  const refetchProducts = (queryString) => {
    productsQuery.refetch({
      queryFn: () => fetchData(`products${queryString}`),
    });
  };

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryFn: () => fetchData('categories'),
    queryKey: ['categories'],
  });

  const { data: brandsData, isLoading: brandsLoading } = useQuery({
    queryFn: () => fetchData('brands'),
    queryKey: ['brands'],
  });

  const handleChange = useCallback((e) => {
    const { value, name } = e.target;
    dispatchQueries({
      type: 'SET_SEARCH_OR_MAX_PRICE',
      payload: { value, name },
    });
  }, []);

  const handleCategoriesChange = useCallback((e) => {
    const { value } = e.target;
    dispatchQueries({ type: 'TOGGLE_SUBCATEGORY', payload: value });
  }, []);

  const handleBrands = useCallback((e) => {
    const { value } = e.target;
    dispatchQueries({ type: 'TOGGLE_BRAND', payload: value });
  }, []);

  const handleSubmit = () => {
    refetchProducts(queryString);
  };
  const changePage = ({ selected }) => {
    dispatchQueries({ type: 'SET_PAGE_NUMBER', payload: selected + 1 });
    clonedQueryString =
      '?' +
      Object.keys(queries)
        .filter((key) => {
          const value = queries[key];
          if (key === 'page') return 0;
          if (Array.isArray(value)) return value.length;
          return value;
        })
        .map((key) => {
          const value = queries[key];
          if (Array.isArray(value)) {
            return `${key}=${value.join(',')}`;
          }
          return `${key}=${value}`;
        })
        .join('&') +
      '&page=' +
      (selected + 1);
    refetchProducts(clonedQueryString);
  };
  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <Helmet title="جميع المنتجات">
      <CommonSection title={'جميع المنتجات'} />
      <section>
        <Container>
          <Row>
            {/* Side bar */}
            <Col lg="3" md="4" sm="12" xs="12">
              <div className="sidebar">
                {/* search filter */}
                <div className="search_widget d-flex align-items-center justify-content-between gap-2 mb-4">
                  <span>
                    <i className="ri-search-line" onClick={handleSubmit}></i>
                  </span>
                  <input
                    type="search"
                    name="search"
                    placeholder="أنا ابحث عن..."
                    value={queries?.search || ''}
                    onChange={handleChange}
                    onKeyDown={handleSearchEnter}
                  />
                </div>
                {/* categories filter */}
                <h4>الفئات</h4>
                <div className="accordion" id="categoriesAccordion">
                  {categoriesLoading ? (
                    <AccordionSkeleton />
                  ) : (
                    categoriesData?.categories?.map((category) => (
                      <div className="accordion-item" key={category._id}>
                        <h2
                          className="accordion-header"
                          id={`categoryHeading${category._id}`}
                        >
                          <button
                            className="accordion-button"
                            style={{ outline: 'none', boxShadow: 'none' }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#categoryCollapse${category._id}`}
                            aria-expanded="true"
                            aria-controls={`categoryCollapse${category._id}`}
                          >
                            {category.name}
                          </button>
                        </h2>
                        <div
                          id={`categoryCollapse${category._id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`categoryHeading${category._id}`}
                          data-bs-parent="#categoriesAccordion"
                        >
                          <div className="accordion-body">
                            {category.SubCategory?.map((subcategory) => (
                              <div className="form-check" key={subcategory._id}>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`categorySubcategory-${subcategory._id}`}
                                  name="categories"
                                  value={subcategory._id}
                                  checked={
                                    queries.subcategoryIds?.includes(
                                      subcategory._id
                                    ) || subcategory.categoryId === categoryId
                                  }
                                  onChange={handleCategoriesChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`categorySubcategory-${subcategory._id}`}
                                >
                                  {subcategory.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {/* brands filter */}
                <div className="accordion mt-4" id="brandsAccordion">
                  {brandsLoading ? (
                    <AccordionSkeleton />
                  ) : (
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
                          {brandsData?.brands.map((brand, index) => (
                            <div className="form-check" key={index}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`brand-${index}`}
                                value={brand._id}
                                checked={queries.brandIds?.includes(brand._id)}
                                onChange={handleBrands}
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
                  )}
                </div>
                {/* price filter */}
                <div className="my-4">
                  <div className="input-group">
                    <input
                      type="number"
                      value={queries?.['max-price'] || ''}
                      onChange={handleChange}
                      className="form-control"
                      id="maxPrice"
                      style={{ outline: 'none', boxShadow: 'none' }}
                      name="max-price"
                      placeholder="ادخل اعلى سعر"
                    />
                  </div>
                </div>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4 mb-5">
                  <button
                    className="shop_btn d-flex align-items-center justify-content-between gap-2"
                    onClick={handleSubmit}
                  >
                    بحث
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="9" md="8" sm="12" xs="12">
              {/* Product display section */}
              <div className="products">
                <Row>
                  {productsQuery.isLoading
                    ? // render loading skeletons
                      [1, 2, 3, 4, 5, 6].map((item) => (
                        <Col
                          className="mt-5"
                          xl="4"
                          lg="6"
                          md="6"
                          sm="6"
                          xs="12"
                          key={item}
                        >
                          <ProductCardSkeleton />
                        </Col>
                      ))
                    : // Render actual product cards
                      productsQuery?.data.products?.map((item) => (
                        <Col
                          className="mb-5"
                          xl="4"
                          lg="6"
                          md="6"
                          sm="6"
                          xs="12"
                          key={item._id}
                        >
                          <ProductCard item={item} />
                        </Col>
                      ))}
                </Row>
                <div className="pagination-container">
                  <ReactPaginate
                    pageCount={productsQuery?.data?.totalPages || 0}
                    onPageChange={changePage}
                    previousLabel="السابق"
                    nextLabel="التالي"
                    containerClassName="paginationBtns"
                    activeClassName="active_pagination"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    disabledClassName="disabled"
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
