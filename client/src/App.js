import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { messages } from './messages';
import data from './data.json';
import './App.css';
import Products from './components/Products/Products';

class App extends Component {
  state = {
    products: data
  }
  render() {
    // console.log(data);
    return (
      <div className="layout">
        <Header />
        <main>
          <Products products={this.state.products} />
          <div className='filterWrapper'>Filter Area</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
