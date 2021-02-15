import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './Coin.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Router>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ listStyle: 'none', display: 'flex', margin: '1rem' }}>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <NavLink to="/!#" className="nav" onClick={() => paginate(number)}>
                                {number}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </Router>
    )
}

export default Pagination
