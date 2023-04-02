import React, { useState } from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { setWordEntered } from '../store/companyList-slice';
import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  const [userInput, setUserInput] = useState(); 
  const dispatch = useDispatch();
  const [isSearched, setIsSearched] = useState(false);

  const handleSearchIconClicked = () => {
    dispatch(setWordEntered(userInput));
    setIsSearched(true);
  };

  const handleWordChange = (event) => {
    const searchWord = event.target.value;
    setUserInput(searchWord);
    if (searchWord ==="") {
      handleClearInput();
    }
  }

  const handleClearInput = () => {
    setUserInput("");
    dispatch(setWordEntered(""));
    setIsSearched(false);
  }
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder='Search name of company...'
          value={userInput}
          onChange={handleWordChange}
        />
        <div className="searchIcon">
          {isSearched
          ? <CloseIcon onClick={handleClearInput}/>
          : <SearchIcon onClick={handleSearchIconClicked}/>
          }
        </div>
      </div>
    </div>
  )
}
