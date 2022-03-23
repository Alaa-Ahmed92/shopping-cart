import React, { Component } from 'react';
import '../../styles/Products/Products.css';
import ProductModal from './ProductModal';
import ReactModal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProductsAction } from '../../actions/productActions';
import { addToCart } from '../../actions/cartActions';
import { filteredProducts, getProductsError, getProductsPending } from '../../selectors/productsSelector';
ReactModal.setAppElement('*');

class Products extends Component {
    state = {
        product: ""
    };

    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
    }

    closeModal = () => this.setState({ product: false });

    render() {
        const { errors, pending, products, addToCart } = this.props;
        const loadingElement = pending === true && <div>Loading</div>;
        const errorsElements = errors && <div>{errors}</div>;
        return (
            <div className='productsWrapper'>
                {loadingElement}
                {errorsElements}
                {products && products.length !== 0 && products.map(product => (
                    <div key={product._id} className='productItem'>
                        <div className='productImg'>
                            <a href="#" onClick={() => this.openModal(product)}>
                                <img src={product.imageUrl} alt={product.title} />
                            </a>
                        </div>
                        <div className='productDesc'>
                            <h4>{product.title}</h4>
                            <span>${product.price}</span>
                        </div>
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                ))}
                <ProductModal product={this.state.product} closeModal={this.closeModal} />
            </div>
        )
    }
};


const mapStateToProps = state => ({
    products: filteredProducts(state),
    errors: getProductsError(state),
    pending: getProductsPending(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchProducts: fetchProductsAction,
    addToCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);