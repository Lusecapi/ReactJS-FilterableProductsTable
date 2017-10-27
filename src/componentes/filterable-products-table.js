import React from 'react';

import Searchbar from './searchbar';
import ProductTable from './product-table';

class FilterableProductsTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.searchProduct = this.searchProduct.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.state = {
      searchString: null,
      searchInStock: false
    };
  }

  render(){

    return (
      <div className = 'filterable-products-table'>
        <Searchbar onTextChange = {this.searchProduct} onCheckboxChange = {this.onCheckboxChange} />
        <ProductTable products = {this.props.products} searchString = {this.state.searchString} searchInStock = {this.state.searchInStock} />
      </div>
    );
  }

  searchProduct(ev){
    this.setState({
      searchString: ev.target.value.toLowerCase()
    });
  }

  onCheckboxChange(ev){
    this.setState({
      searchInStock: ev.target.checked
    });
  }

}


export default FilterableProductsTable;
