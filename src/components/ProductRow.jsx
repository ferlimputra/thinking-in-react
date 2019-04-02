import React from "react";
import PropTypes from "prop-types";

const ProductRow = ({ name, price, available }) => {
  const style = available ? {} : { color: "red" };
  return (
    <tr className="ProductRow">
      <td>
        <span style={style}>{name}</span>
      </td>
      <td>{price}</td>
    </tr>
  );
};

ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export default ProductRow;
