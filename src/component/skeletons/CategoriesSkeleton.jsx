import { Col } from 'reactstrap';
import Skeleton from './Skeleton';
import './skeleton.css';
const CategoriesSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <Col className="mb-4" lg="3" md="6" sm="6" xs="6" key={item}>
          <Skeleton classes="text width-100" />
          <Skeleton classes="text width-100" />
          <Skeleton classes="text width-100" />
          <Skeleton classes="text width-100" />
        </Col>
      ))}
    </>
  );
};

export default CategoriesSkeleton;
