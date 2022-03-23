import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';
import '../../styles/Cart/Cart.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';

class Cart extends Component {
    state = {
        showForm: false,
        user: ""
    };

    handleCheckoutForm = (value) => this.setState({ showForm: value });

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    handleFormValue = (e) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [e.target.name]: e.target.value
            }
        }));
    }

    render() {
        const { showForm } = this.state;
        const { cartItems, removeFromCart } = this.props;
        return (
            <div className='cartWrapper'>
                <hr />
                <div className='cartTitle'>
                    {cartItems.length == 0 ? 'Cart Empty' : `There is ${cartItems.length} in your basket.`}
                </div>
                <div className='cartList'>
                    {cartItems.map(item => (
                        <div key={item._id} className='cartItem'>
                            <div className='itemImg'>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className='itemHead'>
                                <h5>{item.title}</h5>
                                <div>${item.price}</div>
                                <div>{item.qty}</div>
                            </div>
                            <button onClick={() => removeFromCart(item)}>&times;</button>
                        </div>
                    ))}
                </div>
                {
                    cartItems.length != 0 && (
                        <div className='checkoutWrapper'>
                            <div className='totalPrice'>
                                Total {cartItems.reduce((acc, p) => {
                                    return acc + (p.qty * p.price)
                                }, 0)}
                            </div>
                            <button
                                className='selectProducts'
                                onClick={() => this.handleCheckoutForm(true)}
                            >selectProducts</button>
                        </div>
                    )
                }
                <Checkout
                    showForm={showForm}
                    handleCheckoutForm={this.handleCheckoutForm}
                    handleFormValue={this.handleFormValue}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
