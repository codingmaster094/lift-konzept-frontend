import Image from "next/image";
import Link from "next/link";
import React from "react";
const CtaSection = ({ CtaSectionData }) => {
  return (
    <section className="">
      <div className="container">
        <div className="inner p-16 sm:p-32 lg:p-64 relative overflow-hidden rounded-xl">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={CtaSectionData.CtaImage.url}
            alt="Treppenlift Beratung Hintergrundbild"
            role="img"
            width={1440}
            height={476}
            fetchPriority="high"
          />

          <div className="content rounded-xl bg-[#0065A3CC] bg-blur-md relative z-10 h-full p-20 md:p-48 max-w-650 w-full">
            <div className="heading text-white space-y-16">
              <h2
                className="text-h2/normal"
                dangerouslySetInnerHTML={{ __html: CtaSectionData.Heading }}
              ></h2>
              <div className="para text-base/normal">
                {CtaSectionData.richText.root.children &&
                  CtaSectionData.richText.root.children.length > 0 &&
                  CtaSectionData.richText.root.children.map((child, index) => {
                    return <p key={index}>{child.children[0].text}</p>;
                  })}
              </div>
            </div>
            <div className="btns flex justify-start items-start md:items-center gap-16 md:gap-32 mt-32 md:flex-row flex-col">
              {CtaSectionData.cta_link1.label != "" && (
                <Link
                  href={CtaSectionData.cta_link1.url}
                  role="button"
                  className="btn-secondary  before:!bg-white hover:!text-primary"
                  aria-label="Jetzt Beratungstermin buchen"
                >
                  <span className="relative z-10">
                    {CtaSectionData.cta_link1.label}
                  </span>
                </Link>
              )}
              {CtaSectionData.cta_link2.label != "" && (
                <Link
                  href={CtaSectionData.cta_link2.url}
                  role="button"
                  className="btn-link text-white text-base"
                  aria-label="Kostenlose Beratung starten"
                >
                  <span className="relative z-10">
                    {CtaSectionData.cta_link2.label}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
