import React, { useEffect, useState, useMemo, useContext } from 'react';
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/commom-section/CommonSection';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './product-details.css';
import ProductCard from '../component/productCard/ProductCard';
import { useQuery } from 'react-query';
import { fetchData } from './../../utils/fetchData';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import { toastifyContext } from '../../context/toastifyContext';
import Skeleton from './../../component/skeletons/Skeleton';
import ProductCardSkeleton from '../../component/skeletons/ProductCardSkeleton';
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => fetchData(`products/${id}`),
    queryKey: [`products/${id}`],
  });

  const product = useMemo(() => data?.product || {}, [data]);

  const [currentImage, setCurrentImage] = useState(
    product.mainImage?.secure_url
  );

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setCurrentImage(product.mainImage?.secure_url);
  }, [product.mainImage]);

  const imagesArray = useMemo(() => {
    const images = [];
    if (product.mainImage) {
      images.push(product.mainImage.secure_url);
    }
    if (product.subImages && product.subImages.length > 0) {
      for (let i = 0; i < Math.min(product.subImages.length, 2); i++) {
        images.push(product.subImages[i].secure_url);
      }
    }
    return images;
  }, [product]);
  const { toast } = useContext(toastifyContext);
  const addToCart = () => {
    dispatch(cartActions.addItem({ ...product }));
    toast.success('تمت اضافة ' + product.name + ' الى السلة', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  // related products
  const subCategoryId = product.subCategoryId?._id;
  const { data: relatedProducts, isLoading: relatedProductsLoading } = useQuery(
    {
      queryFn: () =>
        fetchData(`products?subcategoryIds=${subCategoryId}&limit=4`),
      queryKey: ['related-product'],
      enabled: !!subCategoryId,
    }
  );
  return (
    <Helmet title={product?.name}>
      <CommonSection title={product?.name} />
      <section>
        <Container>
          {isLoading ? (
            <Row>
              <Col lg="3" md="2" sm="4" xs="4">
                <div className="product__images">
                  <Skeleton classes="image width-50" />
                  <Skeleton classes="image width-50" />
                  <Skeleton classes="image width-50" />
                </div>
              </Col>
              <Col lg="6" md="6" sm="8" xs="8">
                <div className="single_product_img">
                  <Skeleton classes="image width-100" />
                </div>
              </Col>
              <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <div className="single_product">
                  <Skeleton classes="text width-50" />
                  <Skeleton classes="text width-100" />
                  <Skeleton classes="text width-100" />
                  <Skeleton classes="text width-100" />
                  <Skeleton classes="text width-100" />
                  <Skeleton classes="text width-100" />
                  <Skeleton classes="text width-50" />
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              {imagesArray.length > 0 && (
                <Col lg="3" md="2" sm="4" xs="4">
                  <div className="product__images">
                    {imagesArray.map((image, index) => (
                      <div className="img__item mb-3" key={index}>
                        <img
                          className="w-50"
                          src={image}
                          alt={`product-img-${index}`}
                          onClick={() => handleImageClick(image)}
                        />
                      </div>
                    ))}
                  </div>
                </Col>
              )}
              <Col lg="6" md="6" sm="8" xs="8">
                <div className="single_product_img">
                  <img src={currentImage} alt={product.name + ' image'} />
                </div>
              </Col>
              <Col lg="3" md="4" sm="12" xs="12" className="mt-4">
                <div className="single_product">
                  <h2 className="product_title mb-3">{product.name}</h2>
                  <p className="product_price">
                    السعر: <span>NIS {product.price}</span>
                  </p>
                  <p className="category">
                    الفئة: <span>{product.subCategoryId?.name}</span>
                  </p>
                  {product.brandId && (
                    <p className="category">
                      العلامة التجارية: <span>{product.brandId?.name}</span>
                    </p>
                  )}
                  {product?.colors.length && (
                    <p className="category">
                      الالوان المتوفرة:
                      {product?.colors.map((color) => (
                        <span key={color}>{color}</span>
                      ))}
                    </p>
                  )}
                  {product?.sizes.length && (
                    <p className="category">
                      الأحجام المتوفرة:
                      {product?.sizes.map((size) => (
                        <span key={size}>{size?.toUpperCase()}</span>
                      ))}
                    </p>
                  )}
                  <p className="mb-4">{product.description}</p>
                  <button className="addToCart_btn" onClick={addToCart}>
                    اضف الى السلة
                  </button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="mb-5 mt-4" lg="12">
              <h2>ربما يعجبك ايضا</h2>
            </Col>
            {relatedProductsLoading
              ? [1, 2, 3, 4].map((i) => (
                  <Col
                    className="mb-4"
                    xl="3"
                    lg="4"
                    md="4"
                    sm="6"
                    xs="12"
                    key={i}
                  >
                    <ProductCardSkeleton key={i} />
                  </Col>
                ))
              : Array.isArray(relatedProducts?.products) &&
                relatedProducts?.products
                  ?.filter((item) => item._id !== product._id)
                  .map((item) => (
                    <Col
                      className="mb-4"
                      xl="3"
                      lg="4"
                      md="4"
                      sm="6"
                      xs="12"
                      key={item._id}
                    >
                      <ProductCard item={item} />
                    </Col>
                  ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
