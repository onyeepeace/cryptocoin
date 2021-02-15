import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="coin-container">
            <div className="coin-row">
                <table>
                    <tbody>
                        <tr>
                            <td className="sticky-col first-col">
                                <div className="flex">
                                    <img src={image} alt="coin logo" />
                                    <p>{name}</p>
                                </div>
                            </td>
                            <td className="small-width">{symbol}</td>
                            <td className="price">${price}</td>
                            <td>${volume.toLocaleString()}</td>
                            <td className="small-width">{priceChange < 0 ? (
                                <p className="coin-percent red">{priceChange?.toFixed(2)}%</p>
                            ) : (
                                    <p className="coin-percent green">{priceChange?.toFixed(2)}%</p>
                                )}</td>
                            <td>${marketcap.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Coin