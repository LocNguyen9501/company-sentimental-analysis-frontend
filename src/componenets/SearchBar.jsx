import React from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export const SearchBar = () => {
    const [filteredData, setFilteredData] = React.useState([]);
    const [wordEntered, setWordEntered] = React.useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      
  
    //   if (searchWord === "") {
    //     setFilteredData([]);
    //   } else {
    //     setFilteredData(newFilter);
    //   }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
    return (
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder='Search...'
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </div>
    )
}
