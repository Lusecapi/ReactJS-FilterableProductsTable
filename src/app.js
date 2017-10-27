import React from 'react';

import './app.css';
import FilterableProductsTable from './componentes/filterable-products-table';

const productList = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className = 'container app'>
        <h1> Filterable Products Table </h1>
        <FilterableProductsTable products = {productList} />
      </div>
    );
  }
}

export default App;
