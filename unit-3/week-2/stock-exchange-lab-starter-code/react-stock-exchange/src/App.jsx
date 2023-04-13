  
import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './pages/StockContainer';
import PortfolioContainer from './pages/PortfolioContainer';
import './index.css'

export default function App() {

  //define state for stocks
  //define state for myStocks
  
  //fetch all stocks upon page loading and set state for stocks

  //create a buyOrSell function to handle whether stocks are being bought or sold
  //function should have two params, newStock and action 
  //if action equals sell, filter stocks state to not include the newStock
  //if action equal buy, add the newStock to myStocks state 

  //pass stocks down to StocksContainer
  //pass myStocks down to PortfolioContainer 
  //pass buyOrSell function down to stockContainer and PortfolioContainer 

  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer />
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}

