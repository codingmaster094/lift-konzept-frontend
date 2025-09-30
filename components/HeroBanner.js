import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = ({ image, images_1, heroData }) => {
  const points = heroData.richText?.root?.children?.[0]?.children || [];
  return (
    <section className="pt-16">
      <div className="inn max-w-[1720px] mx-auto px-16">
        <div className="main-inner flex gap-24 items-stretch h-full flex-col xlg:flex-row">
          <div className="hero-left p-16 sm:p-24 xl:p-64 bg-light rounded-[12px] w-full xlg:w-1/2 xl:w-2/5 flex justify-start items-center relative">
            <div className="content w-full text-base/relaxed">
              <span
                className="block"
                dangerouslySetInnerHTML={{ __html: heroData.SubHeading }}
              ></span>
              <h1
                className="text-h1/normal text-primary"
                dangerouslySetInnerHTML={{ __html: heroData.Heading }}
              ></h1>
              {heroData.showParagraph && (
                <div className="mt-20 md:mt-24 mb-20 md:mb-32 flex flex-col space-y-12">
                <p >
                  {points[0].text}
                </p>
                </div>
              )}
              {heroData.showPoints && (
                <ul className="mt-20 md:mt-24 mb-20 md:mb-32 flex flex-col space-y-12 [&>li]:pl-40 [&>li]:relative [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:-top-1 [&>li]:before:w-32 [&>li]:before:h-32 [&>li]:before:bg-[url('/images/right-arrow-li.svg')] [&>li]:before:bg-no-repeat [&>li]:before:bg-cover ">
                  {points?.map((item, i) => (
                    <li key={i}>{item?.children?.[0]?.text}</li>
                  ))}
                </ul>
              )}

              {heroData.hero_link && (
                <Link
                  href={heroData.hero_link.url}
                  role="button"
                  className="btn-secondary"
                >
                  <span className="relative z-10">
                    {heroData.hero_link.label}
                  </span>
                </Link>
              )}
            </div>
            <Image
              className="absolute top-0 left-0 z-10"
              src={image}
              alt="background image for Hero Section"
              role="img"
              width={249}
              height={249}
              fetchPriority="high"
            />
            <Image
              className="absolute bottom-0 right-0 z-10 hidden xlg:block"
              src={images_1}
              alt="background image for Hero Section"
              role="img"
              width={249}
              height={249}
              fetchPriority="high"
            />
          </div>
          <div className="relative hero-right rounded-[12px] overflow-hidden w-full xlg:w-1/2 xl:w-3/5 min-h-450 md:min-h-550 xl:min-h-750 flex justify-end items-end">
            <Image
              className="absolute top-0 w-full h-full object-cover"
              src={heroData.heroImage.url}
              alt="Image for Hero Section"
              role="img"
              width={heroData.heroImage.width}
              height={heroData.heroImage.height}
              fetchPriority="high"
            />
            {heroData.isHeroformSection && (
              <div className="form-content bg-[linear-gradient(186.17deg,rgba(0,0,0,0.2)_8.81%,rgba(0,0,0,0)_100.03%)] backdrop-blur-sm p-32 rounded-2xl z-10 w-full h-auto ">
                <div className="main-form flex justify-center items-center text-center flex-col">
                  <span
                    className="block text-white font-medium text-center text-h4"
                    role="heading"
                    aria-level={2}
                    dangerouslySetInnerHTML={{
                      __html: heroData.heroformsection_Heading,
                    }}
                  ></span>

                  <div
                    className="flex gap-24 justify-center items-center mt-24 mb-24 md:mb-60"
                    role="group"
                    aria-label="Treppenlift Installationsort auswählen"
                  >
                    {heroData.heroformsection_items.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="bg-white p-24 rounded-[12px] w-120 text-h4"
                        >
                          <Link
                            href={item.heroformsection_main_link.url}
                            className="flex flex-col gap-10 justify-center items-center"
                            role="button"
                            aria-label="Treppenlift innen installieren"
                          >
                            <Image
                              src={item.heroformsection_main_Image.url}
                              alt="Haus Symbol"
                              role="img"
                              width={48}
                              height={48}
                              fetchPriority="high"
                            />
                            <span>{item.heroformsection_main_link.label}</span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>

                  {/* Next Step */}
                  <Link
                    href={heroData.heroformsection_redirect_link.url}
                    role="button"
                    aria-label="Weiter zur nächsten Frage"
                    className="inline-flex items-center gap-24 mt-8 md:mt-24 text-white text-h5"
                  >
                    <span>{heroData.heroformsection_redirect_link.label}</span>
                    <Image
                      src="/images/Right.svg"
                      alt="icon for next step"
                      role="presentation"
                      width={48}
                      height={48}
                      fetchPriority="high"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
