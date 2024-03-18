import Skeleton from './Skeleton';
import React from 'react';
import './skeleton.css';
const AccordionSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <React.Fragment key={item}>
          <Skeleton classes="text width-100" />
          <Skeleton classes="text width-100" />
        </React.Fragment>
      ))}
    </>
  );
};

export default AccordionSkeleton;
