import React from 'react'
import SearchSVG from '../searchsvg';
import {useState, useEffect} from 'react'
import './style.css'


/**
* @author
* @function SearchButton
**/

const SearchButton = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) =>
    {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch =()=>
    {
        setSearch(true);


    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <a href = '/search' rel = 'search' className = "search" style = {props.style}>
            
            <SearchSVG/>
            
            
    </a>
   )

 }

export default SearchButton