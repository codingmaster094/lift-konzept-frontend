import React from 'react'
import GetSinglePosts from '../../untils/GetSinglePost'
import HeroBanner from '../../../components/HeroBanner';
import SingleDetails from '../../../components/SingleDetails';

const page = async({params}) => {
    const { slug } = await params;
    let RatgeberSingleData
    try {
        RatgeberSingleData = await GetSinglePosts(slug);
      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading data.</div>;
      }
    
      if (!RatgeberSingleData) {
        return <div>No data available.</div>;
      }

  return (
    <>
     <HeroBanner
        image="/images/home_hero-bg.png"
        images_1="/images/hero-btm-bg.png"
        heroData={RatgeberSingleData?.hero}
      />
      <SingleDetails title={RatgeberSingleData.title} SingleData={RatgeberSingleData}/>

    </>
  )
}

export default page