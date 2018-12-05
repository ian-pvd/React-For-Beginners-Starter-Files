/**
 * Edit Fish Form
 */

import React, { Component } from 'react';

class EditFishForm extends Component {
  handleChange = (e) => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange} placeholder="Desc"
        />
        <input
          type="text"
          value={this.props.fish.text}
          onChange={this.handleChange} name="image"
        />
      </div>
    );
  }
}

export default EditFishForm;
