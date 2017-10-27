import React from 'react';

import {ControlLabel} from 'react-bootstrap';

class ProductCategoryHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <ControlLabel>{this.props.name}</ControlLabel>
      </div>
    );
  }
}

export default ProductCategoryHeader;
