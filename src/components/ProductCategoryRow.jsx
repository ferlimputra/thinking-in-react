import React from "react";
import PropTypes from "prop-types";

const ProductCategoryRow = ({ category }) => (
  <tr className="ProductCategoryRow">
    <th>{category}</th>
  </tr>
);

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategoryRow;
