import React, { Component } from 'react';
import '../../styles/Products/Products.css';
import ProductModal from './ProductModal';
import ReactModal from 'react-modal';
ReactModal.setAppElement('*');

class Products extends Component {
    state = {
        product: ""
    };

    openModal = (product) => {
        this.setState({ product })
    }

    closeModal = () => this.setState({ product: false })

    render() {
        return (
            <div className='productsWrapper'>
                {
                    this.props.products.map(product => (
                        <div key={product.id} className='productItem'>
                            <div className='productImg'>
                                <a href="#" onClick={() => this.openModal(product)}>
                                    <img src={product.imageUrl} alt={product.title} />
                                </a>
                            </div>
                            <div className='productDesc'>
                                <h4>{product.title}</h4>
                                <span>${product.price}</span>
                            </div>
                            <button onClick={() => this.props.handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    ))
                }

                <ProductModal product={this.state.product} closeModal={this.closeModal} />
            </div>
        )
    }
}

export default Products;