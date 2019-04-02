import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({
  searchText,
  showAvailableOnly,
  onSearchTextInput,
  onShowAvailableOnlyChange,
}) => (
  <form className="SearchBar">
    <input
      type="text"
      className="searchField"
      placeholder="Search..."
      value={searchText}
      onChange={e => onSearchTextInput(e.target.value)}
    />
    <p>
      <input
        type="checkbox"
        className="toggleStock"
        checked={showAvailableOnly}
        onChange={e => onShowAvailableOnlyChange(e.target.checked)}
      />
      {" Only show products in stock"}
    </p>
  </form>
);

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  showAvailableOnly: PropTypes.bool.isRequired,
  onSearchTextInput: PropTypes.func.isRequired,
  onShowAvailableOnlyChange: PropTypes.func.isRequired,
};

export default SearchBar;
