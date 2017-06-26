// Store Picker

import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				{ /* This is whack */ }
				<h2>Please do the thing</h2>
				<input type="text" required placehodler="Store Name" />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;
