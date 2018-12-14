import React, { Component } from 'react';
import Product from './components/Product/Product'

import './App.css';

class App extends Component {
	render() {
    return (
			<div className="productList">
				<Product />
			</div>
    )
  }
}

export default App;