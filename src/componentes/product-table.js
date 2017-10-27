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
    return (
      <div>
        <Col xs = {6} md = {4}>
          <ControlLabel> Name </ControlLabel>
        </Col>
        <Col xs = {6} md = {4}>
          <ControlLabel> Price </ControlLabel>
        </Col>
        {
          this.props.categories.map(category => {
            <ProductCategoryHeader name = {category} />
                this.props.products.map( (product, category) => {
                  if(product.category === category){
                    <ProductRow product = {product} />
                  }
              })
          })
        }
      </div>
    );
  }
}

export default ProductTable;
