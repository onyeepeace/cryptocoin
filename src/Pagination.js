import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ listStyle: 'none', display: 'flex', margin: '1rem' }}>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a href="!#" style={{ textDecoration: 'none', padding: '0 1rem' }} onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
