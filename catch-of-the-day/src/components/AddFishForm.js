/**
 * AddFishForm.js
 */

import React, { Component, createRef } from 'react';

class AddFishForm extends Component {
  nameRef = createRef();
  priceRef = createRef();
  statusRef = createRef();
  descRef = createRef();
  imageRef = createRef();

  createFish = (e) => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    };
    console.log(fish);
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
