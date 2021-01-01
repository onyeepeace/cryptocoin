import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap, coins }) => {

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto logo" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange?.toFixed(2)}%</p>
                    ) : (
                            <p className="coin-percent green">{priceChange?.toFixed(2)}%</p>
                        )};
                    <p className="coin-marketcap">
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
            {/* <ul className='list-group mb-4'>
                {coins.map(coin => (
                    <li key={coin.id} className='list-group-item'>
                        {coin.title}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Coin