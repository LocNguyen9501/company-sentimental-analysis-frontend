import React from "react";
import "./homepage.css"
import { useNavigate } from 'react-router-dom';

export const CompanyProfile = (props) => {
  const { id, companyname, rating, companyimage } = props.data;
  const navigate = useNavigate();
  return (
    <div 
        className="company"
        onClick={() =>{
            navigate('/company-details/'+id) 
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