import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      showAvailableOnly: false,
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleShowAvailableChange = this.handleShowAvailableChange.bind(this);
  }

  handleSearchText(searchText) {
    this.setState({
      searchText,
    });
  }

  handleShowAvailableChange(showAvailableOnly) {
    this.setState({
      showAvailableOnly,
    });
  }

  render() {
    const { products } = this.props;
    const { searchText, showAvailableOnly } = this.state;
    return (
      <div className="FilterableProductTable">
        <SearchBar
          searchText={searchText}
          showAvailableOnly={showAvailableOnly}
          onSearchTextInput={this.handleSearchText}
          onShowAvailableOnlyChange={this.handleShowAvailableChange}
        />
        <ProductTable
          products={products}
          searchText={searchText}
          showAvailableOnly={showAvailableOnly}
        />
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterableProductTable;
