import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { CompanyProfile } from './companyprofile'
import { SearchBar } from '../../componenets/SearchBar'

export const HomePage = () => {
  const companyList = useSelector((state) => state.companyList.list);
  const wordEntered = useSelector((state) => state.companyList.wordSearch);
  const [filteredData, setFilteredData] = React.useState(companyList);
  
  useEffect(() => {
    let newFilterData = companyList.filter((companyInfo) => {
      return companyInfo.companyname.toLowerCase().includes(wordEntered.toLowerCase())
    });
    setFilteredData(newFilterData);
  },[wordEntered])

  return (
    <div className="homepage">
      <SearchBar />
      <div className="companies">
        {filteredData.length == 0 
          ? <p className='no-found'>Sorry we don't have the data about this company</p>
          :
          filteredData.map((company) => (
            <CompanyProfile data={company} />
        ))}
      </div>
    </div>
  )
}
