import React from 'react'

//bring in stocks, myStocks and buyOrSell function

export default function StockCard() {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{/* Company Name */}</h5>
            <p className="card-text">{/* stock price */}</p>
            { /* Use a ternary to display a BUY or SELL button 
            If there is value in the myStocks state and myStocks includes
            the stock prop being passed in, render a sell button, 
            otherwise render a buy button 
            Each button should have an onClick that calls the buyOrSell 
            function, passing two params, the stock prop and a 'buy' 
            or 'sell' string*/}
        </div>
        </div>
    );
}