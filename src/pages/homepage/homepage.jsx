import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CompanyProfile } from './companyprofile'
import { SearchBar } from '../../componenets/SearchBar'
import { fetchCompanyInfo } from '../../store/companySearch-slice';
import ClipLoader from "react-spinners/ClipLoader";
import './homepage.css'

export const HomePage = () => {
  const companyInitialList = useSelector((state) => state.companyList);
  const companySearchInfo = useSelector((state) => state.companySearch);
  const isSearchResultActive = useSelector((state) => state.companySearch.isActive);
  const [filteredData, setFilteredData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const url = "https://csds351-flask-backend.herokuapp.com/api/";
  
  useEffect(() => {
    const fetchSearchData = async () => {
      setLoading(true);
      const response = await fetch(url+companySearchInfo.wordEntered+"/", {
        method:"GET",
      });
      const data = await response.json();
      dispatch(fetchCompanyInfo(data));
      setFilteredData(data);
      setLoading(false);
    };

    if (isSearchResultActive == 1) {
      fetchSearchData();
    }
  },[isSearchResultActive]);

  return (
    <div className="homepage">
        <SearchBar />
        {isLoading
        ?
          <div className="centerContainer">
            <ClipLoader color="black" />
          </div>
        :
        <div className="companies">
          {isSearchResultActive == 0
          ?
            companyInitialList.map((company) => (
              <CompanyProfile data={company} />
            ))
          :
            filteredData.normalize == null 
              ? <p className='no-found'>Sorry we don't have the data about this company</p>
              :<CompanyProfile data={filteredData} />
          }
        </div>}
    </div>
  )
}
