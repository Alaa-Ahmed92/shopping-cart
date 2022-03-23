import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';
import '../../styles/Cart/Cart.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import { createOrder, clearOrder } from '../../actions/orderActions';
import { CartModal } from './CartModal';

class Cart extends Component {
    state = {
        showForm: false,
        user: "",
        showOrder: false
    };

    handleCheckoutForm = (value) => this.setState({ showForm: value });

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { user } = this.state;
        const { createOrder } = this.props;
        const order = {
            name: user.name,
            email: user.email
        }
        createOrder(order);
        if (order) { this.setState({ showOrder: true }) }
    }

    handleFormValue = (e) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [e.target.name]: e.target.value
            }
        }));
    }

    closeModal = () => {
        this.props.clearOrder();
        this.handleCheckoutForm(false);
        this.setState({ showOrder: false });
    }

    render() {
        const { showForm, user, showOrder } = this.state;
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
                <CartModal user={user} showOrder={showOrder} closeModal={this.closeModal} cartItems={cartItems} />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    order: state.order.order,
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { removeFromCart, createOrder, clearOrder })(Cart);
