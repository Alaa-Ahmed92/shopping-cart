import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import { messages } from './messages';
import data from './data.json';
import './App.css';

class App extends Component {
  state = {
    productsData: data,
    products: data,
    size: "",
    sort: ""
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
  }

  render() {
    return (
      <div className="layout">
        <Header />
        <main>
          <Products products={this.state.products} />
          <Filter
            {...this.state}
            handleChangeSize={this.handleChangeSize}
            handleChangeSort={this.handleChangeSort} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
