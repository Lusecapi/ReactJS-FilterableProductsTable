import React from 'react';

import {Col} from 'react-bootstrap';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Col xs = {6} md = {4}>
          {this.props.product.name}
        </Col>
        <Col xs = {6} md = {4}>
          {this.props.product.price}
        </Col>
      </div>
    );
  }
}

export default ProductRow;
