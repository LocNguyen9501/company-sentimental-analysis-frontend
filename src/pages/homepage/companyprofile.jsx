import React from "react";
import "./homepage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setWordEntered } from "../../store/companyList-slice";
import { useSelector } from "react-redux";

export const CompanyProfile = (props) => {
  const { companyname, rating, companyimage } = props.data;
  const normalize = useSelector((state) => state.companyRate.filter((c) => c.companyName == "Dropbox"))[0].normalize;
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
        <p>{`Our Rating: ${(normalize *10).toFixed(1)}/10`}</p>
      </div>
    </div>
  );
};