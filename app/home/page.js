import CtaSection from "../../components/CtaSection";
import ExperienceSection from "../../components/ExperienceSection";
import FaqSection from "../../components/FaqSection";
import HeroBanner from "../../components/HeroBanner";
import Logos from "../../components/Logos";
import StepsSection from "../../components/StepsSection";
import VideoSection from "../../components/VideoSection";
import VorteileSection from "../../components/VorteileSection";
import Alldata from "../untils/AllDataFatch";

export default async function Home() {
  let HomePageData;
  try {
    HomePageData = await Alldata("/home");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!HomePageData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <HeroBanner
        image="/images/home_hero-bg.png"
        images_1="/images/hero-btm-bg.png"
        heroData={HomePageData?.hero}
      />

      <Logos CompanyLogo={HomePageData.companyLogo.logos}/>
      <ExperienceSection Experience={HomePageData.Experience} />
      <VideoSection VideoSectionData={HomePageData.VideoSection}/>
      <VorteileSection VorteileSectionData={HomePageData.VorteileSection} />
      <StepsSection StepsSectionData={HomePageData.StepsSection} />
      <FaqSection SectionShow={HomePageData.FaqSection.enableFAQ} FaqSectionData={HomePageData.FaqSection} />
      <CtaSection CtaSectionData={HomePageData.CtaSection}/>
    </>
  );
}
