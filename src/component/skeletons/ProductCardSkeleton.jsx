import Skeleton from './Skeleton';
import './skeleton.css';
const ProductCardSkeleton = () => {
  return (
    <>
      <Skeleton classes="image width-100" />
      <Skeleton classes="text width-50" />
      <Skeleton classes="text width-100" />
    </>
  );
};

export default ProductCardSkeleton;
