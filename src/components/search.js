import React from 'react';
import '../assets/css/search.css';

function Search() {
    return  (
            <div className="position-relative">
                <div className="position-absolute">
                    <svg  className="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input type="text" className="input_search" placeholder="search"/>
            </div>
    );
}

export default Search;