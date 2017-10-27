import React from 'react';

import {Col} from 'react-bootstrap';

import './styles/product-row.css';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className = 'container-fluid product-row'>
        <Col xs = {6} md = {4}>
          { this.props.product.stocked ? <p>{this.props.product.name}</p> : <p className = 'not-stocked'>{this.props.product.name}</p>}
        </Col>
        <Col xs = {6} md = {4}>
          {this.props.product.stocked ? <p>{this.props.product.price}</p> : <p className = 'not-stocked'>{this.props.product.price}</p>}
        </Col>
      </div>
    );
  }
}

export default ProductRow;
