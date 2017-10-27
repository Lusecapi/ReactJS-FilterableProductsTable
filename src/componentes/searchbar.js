import React from 'react';

import
{
  form,
  FromGroup,
  FormControl,
  Checkbox,
  Col,
  Button
} from 'react-bootstrap';

class Seacrhbar extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className = 'searchbar'>
        <form>
          <Col xs = {10}>
            <FormControl type = 'text' placeholder = 'product name' />
            <Checkbox>Only show products in stock</Checkbox>
          </Col>
          <Col xs = {2} md = {2} className = 'container'>
            <Button bsStyle = 'primary'> Search </Button>
          </Col>
        </form>
      </div>
    );
  }
}

export default Seacrhbar;
