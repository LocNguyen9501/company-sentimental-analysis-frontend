import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CompanyProfile } from './companyprofile'
import { SearchBar } from '../../componenets/SearchBar'
import axios from 'axios';


export const HomePage = () => {
  const companyInitialList = useSelector((state) => state.companyList);
  const companySearchInfo = useSelector((state) => state.companySearch);
  const isSearchResultActive = useSelector((state) => state.companySearch.isActive);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const url = "https://csds351-flask-backend.herokuapp.com/api/";
  
  useEffect(() => {
    const fetchSearchData = async () => {
      // const response = await axios({
      //   method: 'get',
      //   url:url+companySearchInfo.wordEntered,
      // });
      const response = await fetch(url+companySearchInfo.wordEntered+"/", {
        method:"GET",
        
      });

      console.log(response.body);
      setFilteredData([companySearchInfo.company]);
    };

    if (isSearchResultActive == 1) {
      fetchSearchData();
    }
  },[isSearchResultActive]);

  return (
    <div className="homepage">
      <SearchBar />
      <div className="companies">
        {isSearchResultActive == 0
        ?
          companyInitialList.map((company) => (
            <CompanyProfile data={company} />
          ))
        :
          filteredData.length == 0 
            ? <p className='no-found'>Sorry we don't have the data about this company</p>
            :
            filteredData.map((company) => (
              <CompanyProfile data={company} />
          ))}
      </div>
    </div>
  )
}
