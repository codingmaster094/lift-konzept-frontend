import Image from "next/image";
import React from "react";

const TreppenliftAdvisor = ({ TreppenliftAdvisorData }) => {
  return (
    <section
      className="pt-32 md:pt-50 pb-32 md:pb-50 xl:pb-100"
      aria-label="Schritte zur Auswahl des passenden Treppenlifts"
    >
      <div className="container">
        <div className="inner space-y-24 md:space-y-32 lg:space-y-64">
          <div className="heading space-y-16 flex flex-col justify-center items-center text-center">
            <span
              className="block text-base"
              dangerouslySetInnerHTML={{
                __html: TreppenliftAdvisorData.SubHeading,
              }}
            ></span>
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{
                __html: TreppenliftAdvisorData.Heading,
              }}
            ></h2>
            <div className="para w-[97%] mx-auto">
              {TreppenliftAdvisorData.richText.root.children &&
                TreppenliftAdvisorData.richText.root.children.length > 0 &&
                TreppenliftAdvisorData.richText.root.children.map(
                  (child, index) => {
                    return <p key={index}>{child.children[0].text}</p>;
                  }
                )}
            </div>
          </div>
          <div>
            <div className="steps flex gap-18 md:gap-32 lg:gap-64 items-stretch flex-col lg:flex-row">
              <div className="step-left w-full lg:w-1/2 flex flex-col gap-16">
                <div className="rounded-xl overflow-hidden h-326">
                  <Image
                    className="w-full h-full object-cover"
                    src={TreppenliftAdvisorData.Stairlift_advisor_image1.url}
                    alt="Berater berät einen Kunden zu Treppenliften"
                    role="img"
                    width={680}
                    height={335}
                    fetchPriority="high"
                  />
                </div>

                <div className="flex gap-16 flex-col sm:flex-row">
                  <div className="rounded-xl overflow-hidden h-326">
                    <Image
                      className="w-full h-full object-cover"
                      src={TreppenliftAdvisorData.Stairlift_advisor_image2.url}
                      alt="Berater misst eine Treppe für die Treppenlift-Installation"
                      role="img"
                      width={332}
                      height={335}
                      fetchPriority="high"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden h-326">
                    <Image
                      className="w-full h-full object-cover"
                      src={TreppenliftAdvisorData.Stairlift_advisor_image3.url}
                      alt="Berater zeigt einem Kunden verschiedene Treppenlift-Optionen"
                      role="img"
                      width={332}
                      height={335}
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>
              <div className="step-right w-full lg:w-1/2">
                <div className="inn flex flex-col gap-26">
                  {TreppenliftAdvisorData.TreppenliftAdvisor &&
                    TreppenliftAdvisorData.TreppenliftAdvisor.length > 0 &&
                    TreppenliftAdvisorData.TreppenliftAdvisor.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="stepitem flex justify-start items-center gap-20"
                        >
                          <span className="block w-32 h-32 border border-solid border-black rounded-full">
                            <span className="ml-8 bg-border w-32 h-32 rounded-full flex justify-center items-center text-white">
                              {i+1}
                            </span>
                          </span>
                          <div className="para">
                            <p>
                              {item.title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="step-right w-full xl:w-[48%] mt-32">
               {TreppenliftAdvisorData.decription.root.children &&
                  TreppenliftAdvisorData.decription.root.children.length > 0 &&
                  TreppenliftAdvisorData.decription.root.children.map((child, index) => {
                    return <p key={index}>{child.children[0].text}</p>;
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreppenliftAdvisor;
