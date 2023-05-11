import React, { useEffect } from "react";
import "./homepage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setWordEntered } from "../../store/companySearch-slice";
import { useSelector } from "react-redux";

export const CompanyProfile = (props) => {
  const { companyName, companyimage, normalize } = props.data;
  const isSearchResultActive = useSelector((state) => state.companySearch.isActive);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const altImage = "https://logo.clearbit.com/"+companyName+".com";
  
  const clearPageHistory = () => {
    dispatch(setWordEntered(""))
  }

  return (
    <div 
      className="company"
      onClick={() => {
        clearPageHistory();
        if (!isSearchResultActive) {
          navigate('/company-details/'+companyName) 
        } else {
          navigate('/company-search-details/'+companyName) 
        }
        
      }}
    >
      <img className="companyImage" src={companyimage ? companyimage : altImage} />
      <div className="description">
        <p>
          <b>{companyName}</b>
        </p>
        <p>{`Our Rating: ${(normalize *10).toFixed(1)}/10`}</p>
      </div>
    </div>
  );
};