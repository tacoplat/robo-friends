import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <i className='fa fa-search w3-large mr2 icowh'></i>
            <input
                className='pa2 ph3 mb3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;