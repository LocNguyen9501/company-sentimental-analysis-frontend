import React, {useState}from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './item.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chart from "../../componenets/Chart";
import Dropdown from '../../componenets/Dropdown';

export const ItemSearch = () => {
  const companyInfo = useSelector((state) => state.companySearch.company)
  const [selectedOption, setSelectedOption] = useState('day');
  const navigate = useNavigate();
  const altImage = "https://logo.clearbit.com/"+companyInfo.companyName+".com";

  function handleOptionChange(option) {
    setSelectedOption(option);
  }

  return (
    <div className="item-container">
      <div className='backButtonContainer' onClick={() => navigate(-1)}>
        <ArrowBackIcon className='backButtonIcon'/>
        <div className='textGoBack'>See All Companies</div>
      </div>
     
      <div className='company-overview'> 
        <img className='company-image' src={companyInfo.companyimage ? companyInfo.companyimage : altImage}/>
        <p className="overview">
          We will update description very soon soon!
        </p>
      </div>
      
      <div className='analysis'>
        <p className='header'>
          <b>Our Sentimental Analysis:</b>
        </p>
        <div className='interval'>
          <b className='label'>Select Interval: </b>
          <Dropdown options={['day', 'week', 'month', 'year', 'allTime']} onOptionChange={handleOptionChange} />
        </div>
        <Chart data={companyInfo.rating} selectedOption={selectedOption}/>
      </div>
      
    </div>
  )
}