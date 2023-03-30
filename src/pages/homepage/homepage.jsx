import React from 'react'
import { CompanyProfile } from './comapnyprofile'
import snap from "../../assets/snap2.png"
import aws from "../../assets/aws.png"
import roku from "../../assets/roku.png"
import dropbox from "../../assets/dropbox.png"
import mongoDB from "../../assets/mongoDB.png"
import OCI from "../../assets/OCI.png"
import SVN from "../../assets/servicenow.png"
import SNFLK from "../../assets/snflk.png"
import paypal from "../../assets/payapl.png"
import microsoft from "../../assets/microsoft.png"

export const HomePage = () => {
  
  return (
    <div className="homepage">
      <div className="companies">
        {COMPANIES.map((company) => (
          <CompanyProfile 
            data={company} 
          />
        ))}
      </div>
    </div>
  )
}

const COMPANIES = [
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
  },
  {
    id:5,
    companyname: "MongoDB",
    rating: "7/10",
    companyimage: mongoDB
  },
  {
    id:6,
    companyname: "Oracle Cloud Infrastructure",
    rating: "7/10",
    companyimage: OCI
  },
  {
    id:7,
    companyname: "ServiceNow",
    rating: "5/10",
    companyimage: SVN
  },
  {
    id:8,
    companyname: "Snowflake",
    rating: "6/10",
    companyimage: SNFLK
  },
  {
    id:9,
    companyname: "PayPal",
    rating: "5/10",
    companyimage: paypal
  },
  {
    id:10,
    companyname: "Microsoft",
    rating: "6/10",
    companyimage: microsoft
  },
];