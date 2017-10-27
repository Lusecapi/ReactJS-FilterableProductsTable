import React from 'react';

import Searchbar from './searchbar';
import ProductTable from './product-table';

class FilterableProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className = 'filterable-products-table'>
        <Searchbar />
        <ProductTable products = {this.props.products} />
      </div>
    );
  }
}


export default FilterableProductsTable;
