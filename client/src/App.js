import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import { messages } from './messages';
import data from './data.json';
import './App.css';

class App extends Component {
  state = {
    productsData: data,
    products: data,
    size: "",
    sort: "",
    cartItems: []
  }

  componentDidMount() {
    let getCartItems = JSON.parse(window.localStorage.getItem(('cartItems')));
    this.setState({ cartItems: getCartItems })
  }

  handleChangeSize = (e) => {
    if (e.target.value == 'ALL') {
      this.setState({ products: data });
    } else {
      const { productsData } = this.state;
      let filterdProducts = productsData.filter(product => product.sizes.indexOf(e.target.value) != -1);
      this.setState({ products: filterdProducts });
    }
    this.setState({ size: e.target.value });
  };

  handleChangeSort = (e) => {
    let sortValue = e.target.value;
    this.setState({ sort: sortValue });
    const { products } = this.state;
    let sortedProducts = products.sort((a, b) => {
      if (sortValue == 'lowest') {
        return a.price - b.price;
      } else if (sortValue == 'highest') {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    this.setState({ products: sortedProducts })
  };

  handleAddToCart = (product) => {
    let cartProducts = [...this.state.cartItems];
    let isProductExist = false;
    cartProducts.forEach(p => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartProducts.push({ ...product, qty: 1 })
    };
    window.localStorage.setItem('cartItems', JSON.stringify(cartProducts));
    this.setState({ cartItems: cartProducts })
  };

  handleRemoveFromCart = (product) => {
    let cartProducts = [...this.state.cartItems];
    let newProducts = cartProducts.filter(p => p.id != product.id);
    window.localStorage.setItem('cartItems', JSON.stringify(newProducts));
    this.setState({ cartItems: newProducts })
  }

  render() {
    return (
      <div className="layout">
        <Header />
        <main>
          <div className='layoutWrapper'>
            <Products products={this.state.products} handleAddToCart={this.handleAddToCart} />
            <Filter
              {...this.state}
              handleChangeSize={this.handleChangeSize}
              handleChangeSort={this.handleChangeSort} />
          </div>
          <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
