import React from "react";
import PropTypes from "prop-types";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, searchText, showAvailableOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach(({
    category, name, price, available,
  }) => {
    if (name.indexOf(searchText) === -1) {
      return;
    }
    if (showAvailableOnly && !available) {
      return;
    }
    if (category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={category} />);
    }
    rows.push(<ProductRow name={name} price={price} available={available} key={name} />);
    lastCategory = category;
  });

  return (
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  showAvailableOnly: PropTypes.bool.isRequired,
};

export default ProductTable;
