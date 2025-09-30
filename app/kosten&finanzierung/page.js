import CtaSection from "../../components/CtaSection";
import FinanzierungSection from "../../components/FinanzierungSection";
import HeroBanner from "../../components/HeroBanner";
import KostenEinesSection from "../../components/KostenEinesSection";
import Logos from "../../components/Logos";
import React from "react";
import Alldata from "../untils/AllDataFatch";

const page = async () => {
  let kosten_finanzierungData;
  try {
    kosten_finanzierungData = await Alldata("/kosten-finanzierung");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!kosten_finanzierungData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <HeroBanner
        image="/images/home_hero-bg.png"
        images_1="/images/hero-btm-bg.png"
        heroData={kosten_finanzierungData?.hero}
      />

      <Logos CompanyLogo={kosten_finanzierungData.companyLogo.logos} />
      <KostenEinesSection KostenEines={kosten_finanzierungData.KostenEinesSection} />
      <FinanzierungSection Finanzierung={kosten_finanzierungData.FinanzierungSection}/>
      <CtaSection CtaSectionData={kosten_finanzierungData.CtaSection} />
    </>
  );
};

export default page;
