import React from "react";

const Helmet = (props) => {
  document.title = "ShoppingHup - " + props.title;
  return <>{props.children}</>;
};

export default Helmet;
