import Image from "next/image";
import Link from "next/link";
import React from "react";

const FinanzierungSection = ({ Finanzierung }) => {
  return (
    <section className="py-32 md:py-50 xl:py-100 relative">
      <div className="container">
        <div className="inner space-y-24 xl:space-y-48">
          <div className="heading space-y-16">
            <span
              className="block"
              dangerouslySetInnerHTML={{ __html: Finanzierung.SubHeading }}
            ></span>
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{ __html: Finanzierung.Heading }}
            ></h2>
          </div>
          <div className="content flex gap-24 xl:gap-64 justify-start flex-col xl:flex-row">
            <div className="left-block w-full xl:w-[55%]">
              <div className="inn space-y-24 xl:space-y-32">
                <div className="para">
                  {Finanzierung.richText.root.children &&
                    Finanzierung.richText.root.children.length > 0 &&
                    Finanzierung.richText.root.children.map((child, index) => {
                      return <p key={index}>{child.children[0].text}</p>;
                    })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {Finanzierung.Finanzierung_carousel.map((item, index) => (
                    <div
                      className="bg-primary_light p-16 xl:p-48 rounded-xl space-y-16 md:space-y-32 flex flex-col justify-start items-start text-center"
                      key={index}
                    >
                      <div className="*:block space-y-8 mx-auto">
                        <span
                          className="text-base"
                          dangerouslySetInnerHTML={{ __html: item.SubHeading }}
                        ></span>
                        <span className="text-h3_28 font-bold text-primary">
                          4.180 €
                        </span>
                      </div>
                      <div className="*:block space-y-16">
                        <span
                          className="text-h3/snug font-medium"
                          dangerouslySetInnerHTML={{ __html: item.Heading }}
                        ></span>
                        <div>
                          {item.richText.root.children &&
                            item.richText.root.children.length > 0 &&
                            item.richText.root.children.map((child, index) => {
                              return (
                                <span key={index}>
                                  {child.children[0].text}
                                </span>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right-block w-full xl:w-[45%] rounded-xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={Finanzierung.FinanzierungImage.url}
                alt="Treppenlift Finanzierung Bild"
                role="img"
                width={626}
                height={544}
                fetchPriority="high"
              />
            </div>
          </div>
          {Finanzierung.Finanzierung_link.label != "" && (
            <Link
              href={Finanzierung.Finanzierung_link.url}
              role="button"
              className="btn-secondary mx-auto"
              aria-label="Jetzt Beratungstermin Buchen"
            >
              <span className="relative z-10">
                {Finanzierung.Finanzierung_link.label}
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinanzierungSection;
