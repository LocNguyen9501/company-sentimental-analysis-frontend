import React, { useState } from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { setWordEntered } from '../store/companyList-slice';
import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  const [userInput, setUserInput] = useState(); 
  const dispatch = useDispatch();
  const [searchIconActive, setSearchIconActive] = useState(true);

  const handleSearchIconClicked = () => {
    dispatch(setWordEntered(userInput));
    setSearchIconActive(false);
  };

  const handleWordChange = (event) => {
    const searchWord = event.target.value;
    setUserInput(searchWord);
    setSearchIconActive(true);
    if (searchWord ==="") {
      handleClearInput();
    }
  }

  const handleClearInput = () => {
    setUserInput("");
    dispatch(setWordEntered(""));
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
