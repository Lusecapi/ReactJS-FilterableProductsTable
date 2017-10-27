import React from 'react';

import
{
  Col,
  ControlLabel
}from 'react-bootstrap';

import ProductCategoryHeader from './product-category-header';
import ProductRow from './product-row';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let categories = [];
    let rows = [];
    this.props.products.map(product => {
      if(!categories.includes(product.category)){
        categories.push(product.category);
      }
    });

    categories.map(category => {
      rows.push(<ProductCategoryHeader name = {category} />);
      this.props.products.map(product => {
        if(product.category === category){
          rows.push(<ProductRow product = {product} />);
        }
      });
    });

    return (
      <div className = 'container-fluid product-table'>
        <div className = 'container-fluid columns'>
          <Col xs = {6} md = {4}>
            <ControlLabel> Name </ControlLabel>
          </Col>
          <Col xs = {6} md = {4}>
            <ControlLabel> Price </ControlLabel>
          </Col>
        </div>
        {
          rows
        }
      </div>
    );
  }
}

export default ProductTable;
