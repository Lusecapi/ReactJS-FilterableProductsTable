import React from 'react';

import
{
  form,
  FromGroup,
  FormControl,
  Checkbox
} from 'react-bootstrap';

class Seacrhbar extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <form>
          <FormControl type = 'text' placeholder = 'product name' />
          <Checkbox>Only show products in stock</Checkbox>
        </form>
      </div>
    );
  }
}

export default Seacrhbar;
