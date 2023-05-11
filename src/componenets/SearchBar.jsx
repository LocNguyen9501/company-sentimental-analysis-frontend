import React, { useState, useEffect } from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { setWordEntered } from '../store/companySearch-slice';
import { setSearchActive } from '../store/companySearch-slice';
import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  const [userInput, setUserInput] = useState(); 
  const [searchIconActive, setSearchIconActive] = useState(true);
  const dispatch = useDispatch();

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearchIconClicked();
    }
  };

  const handleSearchIconClicked = () => {
    dispatch(setWordEntered(userInput));
    dispatch(setSearchActive(1));
    setSearchIconActive(false);
  };

  const handleWordChange = (event) => {
    const searchWord = event.target.value;
    setUserInput(searchWord);
    dispatch(setSearchActive(0));
    setSearchIconActive(true);
  }

  const handleClearInput = () => {
    setUserInput("");
    dispatch(setWordEntered(""));
    dispatch(setSearchActive(0));
    setSearchIconActive(true);
  }
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder='Search name of company...'
          value={userInput}
          onChange={handleWordChange}
          onKeyDown={handleKeyDown}
        />
        <div className="searchIcon">
          {!searchIconActive
          ? <CloseIcon onClick={handleClearInput}/>
          : <SearchIcon onClick={handleSearchIconClicked}/>
          }
        </div>
      </div>
    </div>
  )
}
