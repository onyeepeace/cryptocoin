import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Pagination from './Pagination';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      setCoins(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = currentPosts.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h2>Live Cryptocurrency Prices & Coin Market Caps</h2>
        <h3 className="coin-text">Search a currency</h3>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      <div className="main">
        <table>
          <thead>
            <tr>
              <th className="sticky-col first-col">Coin</th>
              <th className="small-width">Symbol</th>
              <th className="price">Price</th>
              <th>Volume</th>
              <th className="small-width">Price Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
        </table>
        {filteredCoins.map(coin => {
          return (
            <Coin
              coins={currentPosts}
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketcap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              loading={loading}
            />
          )
        })}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={coins.length} paginate={paginate} />
    </div>
  )
}

export default App;