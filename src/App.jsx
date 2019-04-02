import React, { Component } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    available: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    available: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    available: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    available: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    available: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    available: true,
    name: "Nexus 7",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

export default App;
