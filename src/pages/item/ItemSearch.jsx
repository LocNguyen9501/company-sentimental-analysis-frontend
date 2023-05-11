import React, {useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './item.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Chart from "../../componenets/Chart";
import Dropdown from '../../componenets/Dropdown';
import { setSearchActive, setWordEntered } from '../../store/companySearch-slice';

export const ItemSearch = () => {
  const companyInfo = useSelector((state) => state.companySearch.company)
  const [selectedOption, setSelectedOption] = useState('day');
  const navigate = useNavigate();
  const altImage = "https://logo.clearbit.com/"+companyInfo.companyName+".com";
  const dispatch = useDispatch();

  function handleOptionChange(option) {
    setSelectedOption(option);
  }

  return (
    <div className="item-container">
      <div className='backButtonContainer' onClick={() => {
        dispatch(setSearchActive(0))
        navigate(-1)
      }}>
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