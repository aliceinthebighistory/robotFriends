import React  from 'react';
// import React,{ componemt } from 'react;'

const SearchBox = ({searchField,searchChange}) =>{
    return(
        <div className="tc f4 mb4 ">
            <input className=" courier pa2 bg-light-blue ba" type='search' placeholder='enter robot name' onChange={searchChange}/>
        </div>
    )
}

export default SearchBox; 