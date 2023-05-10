import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import './item.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chart from "../../componenets/Chart";

export const Item = () => {
  const { name } = useParams();
  const companyInfo = useSelector((state) => state.companyList.list.filter(c => c.companyname == name))[0];
  const companyRating = useSelector((state) => state.companyRate.filter(c => c.companyName == "Dropbox"))[0];
  const navigate = useNavigate();

  console.log(companyRating)
  return (
    <div className="item-container">
      <div className='backButtonContainer' onClick={() => navigate(-1)}>
        <ArrowBackIcon className='backButtonIcon'/>
        <div className='textGoBack'>See All Companies</div>
      </div>
     
      <div className='company-overview'> 
        <img className='company-image' src={companyInfo.companyimage}/>
        <p className="overview">
          {companyInfo.description}
        </p>
      </div>
      
      <div className='analysis'>
        <p className='header'>
          <b>Our Sentimental Analysis:</b>
        </p>
        <Chart data={companyRating}/>
      </div>
      
    </div>
  )
}