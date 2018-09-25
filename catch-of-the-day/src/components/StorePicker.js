/**
 * StorePicker.js
 */

import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.handleSubmit}>
        <h2>Please Select A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
