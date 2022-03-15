import React, { Component } from 'react';
import '../../styles/Cart/Cart.css';

class Cart extends Component {
    render() {
        const { cartItems, handleRemoveFromCart } = this.props;
        return (
            <div className='cartWrapper'>
                <hr />
                <div className='cartTitle'>
                    {cartItems.length == 0 ? 'Cart Empty' : `There is ${cartItems.length} in your basket.`}
                </div>
                <div className='cartList'>
                    {cartItems.map(item => (
                        <div key={item.id} className='cartItem'>
                            <div className='itemImg'>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className='itemHead'>
                                <h5>{item.title}</h5>
                                <div>${item.price}</div>
                                <div>{item.qty}</div>
                            </div>
                            <button onClick={() => handleRemoveFromCart(item)}>&times;</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default Cart;
