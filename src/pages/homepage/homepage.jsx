import React from 'react'
import { useSelector } from "react-redux";
import { CompanyProfile } from './companyprofile'
import { SearchBar } from '../../componenets/SearchBar'

export const HomePage = () => {
  const companyList = useSelector((state) => state.companyList);
  return (
    <div className="homepage">
      <SearchBar />
      <div className="companies">
        {companyList.map((company) => (
          <CompanyProfile data={company} />
        ))}
      </div>
    </div>
  )
}
