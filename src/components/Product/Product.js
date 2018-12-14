import React, { Component } from 'react';
import Header from './Header/Header'
import Content from './Content/Content'

class Product extends Component {
    render() {
        const { product } = this.props; // ES6 destructuring
        return (
            <div className="product">
                <Header name={product.name}/>
                <Content product={product} />
            </div>
        )
    }
}

export default Product;