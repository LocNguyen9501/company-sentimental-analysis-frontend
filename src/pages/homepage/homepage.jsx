import React from 'react'
import { CompanyProfile } from './comapnyprofile'
import snap from "../../assets/snap2.png"
import aws from "../../assets/aws.png"
import roku from "../../assets/roku.png"
import dropbox from "../../assets/dropbox.png"

export const HomePage = () => {
  
  return (
    <div className="homepage">
      <div className="companies">
        {PRODUCTS.map((company) => (
          <CompanyProfile 
            data={company} 
          />
        ))}
      </div>
    </div>
  )
}

const PRODUCTS = [
  {
    id:1,
    companyname: "DropBox",
    rating: "8/10",
    companyimage: dropbox
  },
  {
    id:2,
    companyname: "Snap Inc.",
    rating: "9/10",
    companyimage: snap
  },
  {
    id:3,
    companyname: "Amazon Web Services",
    rating: "7/10",
    companyimage: aws
  },
  {
    id:4,
    companyname: "Roku",
    rating: "5/10",
    companyimage: roku
  }
];