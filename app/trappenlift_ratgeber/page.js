import CtaSection from '../../components/CtaSection'
import HeroBanner from '../../components/HeroBanner'
import SingleBlog from '../../components/SingleBlog'
import React from 'react'
import Alldata from '../untils/AllDataFatch'
import GetPosts from '../untils/GetRatgeber'

const page = async() => {
  let Treppenlifte_RatgeberData;
  let RatgeberData;
  try {
    Treppenlifte_RatgeberData = await Alldata("/treppenlifte-ratgeber");
    RatgeberData = await GetPosts('ratgeber');
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!Treppenlifte_RatgeberData || !RatgeberData) {
    return <div>No data available.</div>;
  }
  return (
    <>
    <HeroBanner 
    heroformsection={false}
    image="/images/home_hero-bg.png"
    images_1="/images/hero-btm-bg.png"
    heroData={Treppenlifte_RatgeberData?.hero}
    />
    <SingleBlog RatgeberData={RatgeberData}/>
    <CtaSection CtaSectionData={Treppenlifte_RatgeberData.CtaSection} />
    </>
    
  )
}

export default page