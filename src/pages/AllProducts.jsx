import React, { useState, useContext } from "react";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/commom-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { productsContext } from "../context/productsContext";
import "./pagesStyle/all-products.css";
import ProductCard from "./../component/UI/productCard/ProductCard";
import ReactPaginate from "react-paginate";
const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("az");
  const { products } = useContext(productsContext);
  const [pageNumber, setPageNumber] = useState(0);

  const sortProducts = (products) => {
    if (sortTerm === "az" || sortTerm === "default")
      return products.slice().sort((a, b) => a.title.localeCompare(b.title));
    if (sortTerm === "za")
      return products.slice().sort((a, b) => b.title.localeCompare(a.title));
    if (sortTerm === "hp")
      return products.slice().sort((a, b) => b.price - a.price);
    if (sortTerm === "lp")
      return products.slice().sort((a, b) => a.price - b.price);
    return products;
  };

  const searchedProduct = sortProducts(
    products.filter((item) => {
      if (searchTerm.value === "") return item;
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
  return (
    <Helmet title="All-Products">
      <CommonSection title={"All Products"} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search_widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm Looking for..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" xs="12">
              <div className="sorting_widget text-end">
                <select
                  className="w-50"
                  onChange={(e) => setSortTerm(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="az">Alphabetically, A-Z</option>
                  <option value="za">Alphabetically, Z-A</option>
                  <option value="hp">High Price</option>
                  <option value="lp">Low Price</option>
                </select>
              </div>
            </Col>
            {productsToShow.map((item) => (
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
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
                activeClassName="active_pagination"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllProducts;
