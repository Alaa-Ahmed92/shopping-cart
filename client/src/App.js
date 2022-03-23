import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';
import { messages } from './messages';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="layout">
        <Header />
        <main>
          <div className='layoutWrapper'>
            <Products />
            <Filter />
          </div>
          <Cart />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
