import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useQuery } from 'react-query';
import './categories.css';
import { fetchData } from '../../../../utils/fetchData';
import CategoriesSkeleton from '../../../../component/skeletons/CategoriesSkeleton';
const Categories = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchData('categories?limit=4'),
    queryKey: ['categories'],
  });
  if (isError)
    return <h1>Error loading categories. Please try again later.</h1>;
  const categories = data?.categories || [];
  return (
    <Container>
      <Row>
        {isLoading ? (
          <CategoriesSkeleton />
        ) : (
          categories?.map((item) => (
            <Col className="mb-4" lg="3" md="6" sm="6" xs="6" key={item._id}>
              <div className="category_item d-flex align-items-center justify-content-center gap-3">
                <h6>{item.name}</h6>
                <div className="category_img">
                  <img src={item.image?.secure_url} alt={item.name} />
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Categories;
