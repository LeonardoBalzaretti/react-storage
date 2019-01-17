import React from 'react';
import Header from './Header/Header'
import Content from './Content/Content'

class Product extends React.Component {
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