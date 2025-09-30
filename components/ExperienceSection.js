import Image from "next/image";
import React from "react";
const ExperienceSection = ({ Experience }) => {
  const pairs = [];
  for (let i = 0; i < Experience.experiance.length; i += 2) {
    pairs.push(Experience.experiance.slice(i, i + 2));
  }

  return (
    <section
      className="pt-32 md:pt-50 pb-32 md:pb-50 xl:pb-100"
      aria-label="Erfahrungsbereich – Treppenlift Beratung und Service"
    >
      <div className="container">
        <div className="inner flex justify-start items-start gap-24 md:gap-32 xxl:gap-64 flex-col lg:flex-row">
          <div className="left-block w-full lg:w-1/2 space-y-16">
            <div className="rounded-3xl overflow-hidden h-326">
              <Image
                className="w-full h-full object-cover"
                src={Experience.experiance_image1.url}
                alt="Kunde erhält Beratung zum Treppenlift"
                role="img"
                width={Experience.experiance_image1.width}
                height={Experience.experiance_image1.height}
                fetchPriority="high"
              />
            </div>
            <div className="rounded-3xl overflow-hidden h-326">
              <Image
                className="w-full h-full object-cover"
                src={Experience.experiance_image2.url}
                alt="Treppenlift wird im Haus montiert"
                role="img"
                width={Experience.experiance_image2.width}
                height={Experience.experiance_image2.height}
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="right-block w-full lg:w-1/2">
            <div className="content w-full text-base/relaxed space-y-20 lg:space-y-32">
              <div className="space-y-16">
                <span
                  className="block"
                  dangerouslySetInnerHTML={{ __html: Experience.SubHeading }}
                ></span>
                <h2
                  className="text-h2/normal text-primary"
                  dangerouslySetInnerHTML={{ __html: Experience.Heading }}
                ></h2>
              </div>

              <div className="para space-y-12">
                {Experience.richText.root.children &&
                  Experience.richText.root.children.length > 0 &&
                  Experience.richText.root.children.map((child, index) => {
                    return <p key={index}>{child.children[0].text}</p>;
                  })}
              </div>
              <div role="list" aria-label="Treppenlift Leistungen">
                {pairs.map((pair, rowIndex) => (
                  <div key={rowIndex}>
                    <div
                      className="flex py-16 flex-col md:flex-row gap-16 md:gap-0"
                      role="listitem"
                    >
                      {/* Left Item */}
                      {pair[0] && (
                        <div className="icon-block1 flex justify-start items-center gap-12 w-1/2 pr-0 md:pr-32">
                          <Image
                            src={pair[0].experianceImage.url}
                            alt={pair[0].experianceImage.alt || pair[0].title}
                            width={pair[0].experianceImage.width || 48}
                            height={pair[0].experianceImage.height || 48}
                          />
                          <span>{pair[0].title}</span>
                        </div>
                      )}

                      {/* Right Item */}
                      {pair[1] && (
                        <div className="flex justify-start items-center gap-12 pl-0 md:pl-32">
                          <Image
                            src={pair[1].experianceImage.url}
                            alt={pair[1].experianceImage.alt || pair[1].title}
                            width={pair[1].experianceImage.width || 48}
                            height={pair[1].experianceImage.height || 48}
                          />
                          <span>{pair[1].title}</span>
                        </div>
                      )}
                    </div>

                    {/* Divider except after last row */}
                    {rowIndex < pairs.length - 1 && (
                      <div className="border-b border-b-[#DFDFDF] border-solid"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
