"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const StepsSection = ({ StepsSectionData }) => {
  const duplicatedSlides = StepsSectionData.Steps_carousel?.concat(
    StepsSectionData.Steps_carousel
  );
  return (
    <section>
      <div className="container">
        <div className="inner space-y-24 md:space-y-48">
          <div className="heading text-base space-y-16 text-center">
            <span
              className="block"
              dangerouslySetInnerHTML={{ __html: StepsSectionData.SubHeading }}
            ></span>
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{ __html: StepsSectionData.Heading }}
            ></h2>
          </div>

          <div className="facts-slider">
            <Swiper
              className="items-center gap-32"
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  pagination: { clickable: true },
                },
                768: {
                  slidesPerView: 2,
                  pagination: false,
                },
                1024: {
                  slidesPerView: 3,
                  pagination: false,
                },
              }}
            >
              {StepsSectionData.Steps_carousel && StepsSectionData.Steps_carousel.length > 0
                ? StepsSectionData.Steps_carousel.map((item, index) => {
                    return (
                      <SwiperSlide className="!h-auto" key={index}>
                        <div className="relative group bg-primary_light rounded-xl py-48 px-32 h-full">
                          <div className="space-y-32">
                            <div className="icon flex flex-col justify-center items-center">
                              <div className="circle w-60 h-60 bg-primary text-white text-h3 font-medium rounded-full flex justify-center items-center">
                                {index + 1}
                              </div>
                              <div className="h-48 -mt-5">
                                <Image
                                  className="w-full h-full object-contain"
                                  src="/images/Line_arrow.svg"
                                  alt="White logo of lift konzept"
                                  role="img"
                                  width={48}
                                  height={10}
                                  fetchPriority="high"
                                />
                              </div>
                            </div>
                            <div className="space-y-16 text-center">
                              <h3
                                className="text-h3/snug font-medium min-h-auto lg:min-h-60 xl:min-h-auto"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></h3>
                              <div className="para  text-[#011527DB]">
                                {item.richText.root.children &&
                                  item.richText.root.children.length >
                                    0 &&
                                  item.richText.root.children.map(
                                    (child, index) => {
                                      return (
                                        <p key={index}>
                                          {child.children[0].text}
                                        </p>
                                      );
                                    }
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })
                : null}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
