import React from "react";
import "./homepage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setWordEntered } from "../../store/companyList-slice";

export const CompanyProfile = (props) => {
  const { companyname, rating, companyimage } = props.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearPageHistory = () => {
    dispatch(setWordEntered(""))
  }

  return (
    <div 
      className="company"
      onClick={() => {
        clearPageHistory();
        navigate('/company-details/'+companyname) 
      }}
    >
      <img className="companyImage" src={companyimage} />
      <div className="description">
        <p>
          <b>{companyname}</b>
        </p>
        <p>Our Rating: {rating}</p>
      </div>
    </div>
  );
};