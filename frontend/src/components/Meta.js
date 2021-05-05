import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "Find all your electronic needs solved in a single click",
  keyword: "quantatech, quality electronic, cheap electronic buy electronic",
};
export default Meta;
