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
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className = 'container-fluid searchbar'>
        <form className = 'container-fluid'>
          <Col xs = {10}>
            <FormControl type = 'text' placeholder = 'product name' onChange = {this.props.onTextChange} />
            <Checkbox onChange = {this.props.onCheckboxChange} >Only show products in stock</Checkbox>
          </Col>
        </form>
      </div>
    );
  }
}

export default Seacrhbar;
