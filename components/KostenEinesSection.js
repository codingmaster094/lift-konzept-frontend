import Image from "next/image";
import React from "react";
const KostenEinesSection = ({ KostenEines }) => {
  return (
    <section className="pt-32 md:pt-50 pb-32 md:pb-50 xl:pb-100">
      <div className="container">
        <div className="inner space-y-24 md:space-y-32 lg:space-y-48">
          <div className="heading space-y-16 flex flex-col justify-center items-center text-center max-w-lg mx-auto">
            <span
              className="block text-base"
              dangerouslySetInnerHTML={{ __html: KostenEines.SubHeading }}
            ></span>
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{ __html: KostenEines.Heading }}
            ></h2>
            <div className="para w-[97%] mx-auto">
              {KostenEines.richText.root.children &&
                KostenEines.richText.root.children.length > 0 &&
                KostenEines.richText.root.children.map((child, index) => {
                  return <p key={index}>{child.children[0].text}</p>;
                })}
            </div>
          </div>

          <div
            className="costs xxl:mx-150"
            aria-label="Kostenübersicht Treppenlifte"
          >
            <div className="inn grid grid-col-1 md:grid-cols-2 gap-16 md:gap-32">
              {KostenEines.KostenEines_carousel.map((item, index) => (
                <div
                  className="relative group rounded-2xl overflow-hidden h-458"
                  key={index}
                >
                  <Image
                    src={item.KostenEines_carouselImage.url}
                    alt="Sitzlift für kurvige Treppen"
                    className="w-full h-full object-cover object-top"
                    role="img"
                    width={item.KostenEines_carouselImage.width}
                    height={item.KostenEines_carouselImage.height}
                    fetchPriority="high"
                  />

                  <div className="absolute flex justify-center items-start h-110 sm:h-80 md:h-110 lg:h-80 bottom-0 left-0 w-full transition-all duration-500 ease-linear bg-[#F2F2F2E5] py-32 px-16 xl:px-32 group-hover:h-500 group-hover:items-center group-hover:bg-[linear-gradient(0deg,rgba(0,173,239,0.1),rgba(0,173,239,0.1)),linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.9))]">
                    <div className="flex flex-col text-base group-hover:gap-16 transition-all duration-500 ease-linear">
                      <div className="text-h5 font-medium flex justify-between gap-10 sm:gap-20 flex-col sm:flex-row">
                        <h3>{item.title}</h3>
                        <span>{item.euro}</span>
                      </div>
                      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-full group-hover:opacity-100">
                        {item.richText.root.children &&
                          item.richText.root.children.length > 0 &&
                          item.richText.root.children.map((child, index) => {
                            return <p key={index}>{child.children[0].text}</p>;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center max-w-lg mx-auto">
            {KostenEines?.description?.root.children &&
              KostenEines.description.root.children.length > 0 &&
              KostenEines.description.root.children.map((child, index) => {
                return <p key={index}>{child.children[0].text}</p>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KostenEinesSection;
