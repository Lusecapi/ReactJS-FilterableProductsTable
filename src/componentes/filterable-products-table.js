import React from 'react';

import Searchbar from './searchbar';
import ProductTable from './product-table';

class FilterableProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Searchbar />
        <ProductTable products = {this.props.products} categories = {['Sporting Goods', 'Electronics']} />
      </div>
    );
  }
}


export default FilterableProductsTable;
