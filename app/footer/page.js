import React from 'react'
import Alldata from '../untils/AllDataFatch';
import Footer from '../../components/Footer';

const page = async() => {
     let FooterData;
     let MenusData;
      try {
        FooterData = await Alldata("/footer");
        MenusData = await Alldata("/menus");
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!FooterData || !MenusData) {
        return <div>No data available.</div>;
      }

  return (
    <Footer FooterData={FooterData} MenusData={MenusData}/>
  )
}

export default page