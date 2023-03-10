import React, { useState} from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord) 
        const newFilter = 
        //finds match in the array of element properties
            data.filter(item => {return Object.keys(item).some(key => item[key].toLowerCase().includes(searchWord.toLowerCase()));});
        
        if(searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.slice(0,15).map((value, key) => {
                    return (
                        <Link to={`/dress/${value.style}`}>
                        <p className="dataItem" target="_blank" rel="noreferrer"><span id="styleName">{value.style}</span></p>
                        </Link>
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default SearchBar;