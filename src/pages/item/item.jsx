import { CompareArrows } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import './item.css'

export const Item = () => {
  const { id } = useParams();
  const companyInfo = useSelector((state) => state.companyList.filter(c => c.id == id))[0];

  return (
    <div className="item-container">
      <div className='company-overview'> 
        <img className='company-image' src={companyInfo.companyimage}/>
        <p className="overview">
          {companyInfo.description}
        </p>
        
      </div>

      <div className='analysis'>
        <p className='header'>
          <b>Our Analysis:</b>
        </p>
        <p className="rating-text">
          {companyInfo.rating}
        </p>
      </div>
      
    </div>
  )
}