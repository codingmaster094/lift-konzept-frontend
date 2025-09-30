import React from "react";

const FaqSection = ({SectionShow , FaqSectionData }) => {
  return (
    SectionShow &&
    <section className="pt-32 md:pt-48 pb-32 md:pb-50 xl:pb-100" id="faq">
      <div className="container">
        <div className="inner space-y-16">
          <div className="heading text-base space-y-16 text-center">
            <span
              className="block"
              dangerouslySetInnerHTML={{ __html: FaqSectionData.SubHeading }}
            ></span>
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{ __html: FaqSectionData.Heading }}
            ></h2>
          </div>

          <div
            className="accordion space-y-16"
            aria-label="Frequently Asked Questions"
          >
            {FaqSectionData.FaqContent && FaqSectionData.FaqContent.length > 0
              ? FaqSectionData.FaqContent.map((item, index) => {
                  return (
                    <div
                      className="acc-item border border-solid border-[#01152729] p-24 rounded-2xl"
                      key={index}
                    >
                      <div
                        className="acc-title text-[#101840]"
                        id="accordion-header-1"
                        role="button"
                        tabIndex={0}
                        aria-expanded="true"
                        aria-controls="accordion-panel-1"
                      >
                        <h3
                          className="font-medium text-h5"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                      </div>
                      <div
                        className="acc-text text-[#011527B2] mt-16"
                        id="accordion-panel-1"
                        role="region"
                        aria-labelledby="accordion-header-1"
                      >
                        {item.richText.root.children &&
                          item.richText.root.children.length > 0 &&
                          item.richText.root.children.map((child, index) => {
                            return <p key={index}>{child.children[0].text}</p>;
                          })}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
