import React, { Component } from 'react';

import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Item from "./conponents/product/ProductItem";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Item productName="set1" price="60"/>
        <Item productName="set2" price="80"/>
        <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
      </div>
    );
  }
}

export default App;
