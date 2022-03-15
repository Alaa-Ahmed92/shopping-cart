import React, { Component } from 'react';
import '../../styles/Checkout/Checkout.css';
import Input from '../Input/Input';

class Checkout extends Component {
    render() {
        const { showForm, handleCheckoutForm, handleFormValue, handleFormSubmit } = this.props;
        return (
            <>
                {showForm && (
                    <form className='checkoutForm' onSubmit={handleFormSubmit}>
                        <div
                            className='close-icon'
                            onClick={() => handleCheckoutForm(false)}>&times;</div>
                        <Input
                            label="Name"
                            type="text"
                            name="name"
                            handleFormValue={handleFormValue}
                        />
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            handleFormValue={handleFormValue}
                        />
                        <button type='submit'>Checkout</button>
                    </form>
                )}
            </>
        )
    }
}

export default Checkout;