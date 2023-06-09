import React, {useState}from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import './item.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chart from "../../componenets/Chart";
import Dropdown from '../../componenets/Dropdown';

export const Item = () => {
  const { name } = useParams();
  const companyInfo = useSelector((state) => state.companyList.filter(c => c.companyName === name)[0]);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('day');

  const handleOptionChange = option => {
    setSelectedOption(option);
  }

  return (
    <div className="item-container">
      <div className='backButtonContainer' onClick={() => navigate(-1)}>
        <ArrowBackIcon className='backButtonIcon'/>
        <div className='textGoBack'>See All Companies</div>
      </div>
     
      <div className='company-overview'> 
        <img className='company-image' src={companyInfo.companyimage}/>
        <p className="overview">
          We will update the description of company very soon. Coming soon!
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