import React from "react";

const Helmet = (props) => {
  document.title = "شهاب ستور - " + props.title;
  return <>{props.children}</>;
};

export default Helmet;
