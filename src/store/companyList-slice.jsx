import { createSlice} from "@reduxjs/toolkit";
import snap from "../assets/snap2.png"
import aws from "../assets/aws.png"
import roku from "../assets/roku.png"
import dropbox from "../assets/dropbox.png"
import mongoDB from "../assets/mongoDB.png"
import OCI from "../assets/OCI.png"
import SVN from "../assets/servicenow.png"
import SNFLK from "../assets/snflk.png"
import paypal from "../assets/payapl.png"
import microsoft from "../assets/microsoft.png"

const initialState = [
    {
      id:1,
      companyname: "DropBox",
      rating: "8/10",
      companyimage: dropbox,
      description: "Dropbox is a popular cloud file storage or file hosting service. It enables individual users and businesses to store, locate, manage, and share digital assets from a centralized location. Dropbox allows users to save files within online folders and sync them across devices."
    },
    {
      id:2,
      companyname: "Snap Inc.",
      rating: "9/10",
      companyimage: snap,
      description: "Snapchat is an app that empowers people to express themselves, live in the moment, learn about the world, and have fun together. It's the easiest and fastest way to communicate the full range of human emotions with your friends without pressure to be popular, pretty, or perfect."
    },
    {
      id:3,
      companyname: "Amazon Web Services",
      rating: "7/10",
      companyimage: aws,
      description: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally."
    },
    {
      id:4,
      companyname: "Roku",
      rating: "5/10",
      companyimage: roku,
      description: "Roku is a streaming video player, which means it streams video content over the Internet to your home, in real time. Streaming video works with computers, smartphones, tablets, and dedicated streaming media devices, such as those offered by Roku."
    },
    {
      id:5,
      companyname: "MongoDB",
      rating: "7/10",
      companyimage: mongoDB,
      description: "MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs"
    },
    {
      id:6,
      companyname: "Oracle Cloud Infrastructure",
      rating: "7/10",
      companyimage: OCI,
      description: "Oracle Cloud Infrastructure (OCI) is a set of complementary cloud services that enable you to build and run a range of applications and services in a highly available hosted environment."
    },
    {
      id:7,
      companyname: "ServiceNow",
      rating: "5/10",
      companyimage: SVN,
      description: "ServiceNow is a software company that provides a cloud-based platform for automating IT management workflows. The company specializes in IT service management, IT operations management and IT business management."
    },
    {
      id:8,
      companyname: "Snowflake",
      rating: "7/10",
      companyimage: SNFLK,
      description: "Snowflake Inc (Snowflake) is a provider of cloud based data warehousing solutions. Its services include data warehouse modernization, analytics, data exchange and engineering, data science, and others."
    },
    {
      id:9,
      companyname: "PayPal",
      rating: "5/10",
      companyimage: paypal,
      description: "PayPal Holdings Inc (PayPal) is a technology platform and digital payments company. It provides technology and payment solutions that facilitate mobile, in-app, and online payments for merchants and consumers."
    },
    {
      id:10,
      companyname: "Microsoft",
      rating: "6/10",
      companyimage: microsoft,
      description: "Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, video games, computer and gaming hardware, search and other online services. Microsoft's corporate headquarters is located in Redmond, Wash., and it has offices in more than 60 countries."
    },
];

const companyListSlice = createSlice({
    name:"companyDetails",
    initialState,
    reducers:{}
});

export default companyListSlice.reducer;