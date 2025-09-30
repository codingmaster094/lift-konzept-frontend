"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const VorteileSection = ({ VorteileSectionData }) => {
   const duplicatedSlides = VorteileSectionData.Vorteile_carousel?.concat(
    VorteileSectionData.Vorteile_carousel
  );
  return (
    <section className="py-32 md:py-50 xl:py-100 relative">
      <div className="container">
        <div className="inner space-y-32">
          <div className="heading space-y-16 text-base">
            <span
              className="block"
              dangerouslySetInnerHTML={{
                __html: VorteileSectionData.SubHeading,
              }}
            ></span>
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{ __html: VorteileSectionData?.Heading }}
            ></h2>
          </div>
          <div className="vorteil-slider relative">
            <Swiper
              className="items-center gap-32 !pb-50 md:!pb-0"
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
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
                  slidesPerView: 2,
                  pagination: false,
                },
                1200: {
                  slidesPerView: 3,
                  pagination: false,
                },
              }}
              onSlideChange={(swiper) => {
                // remove active from all
                document.querySelectorAll(".swiper-slide").forEach((slide) => {
                  slide.classList.remove("active");
                });
                // add active to current
                swiper.slides[swiper.activeIndex].classList.add("active");
              }}
            >
              {duplicatedSlides &&
              duplicatedSlides.length > 0
                ? duplicatedSlides.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="relative group rounded-2xl overflow-hidden h-458">
                          <Image
                            src={item.Vorteile_carouselImage.url}
                            alt="image for card 2"
                            className="w-full h-full object-cover object-top"
                            role="img"
                            width={item.Vorteile_carouselImage.width}
                            height={item.Vorteile_carouselImage.height}
                            fetchPriority="high"
                          />

                          <div className="absolute flex justify-center items-start h-110 sm:h-80 bottom-0 left-0 w-full transition-all duration-500 ease-linear bg-[#F2F2F2E5] py-32 px-16 xl:px-32 group-hover:h-500 group-hover:items-center group-hover:bg-[linear-gradient(0deg,rgba(0,173,239,0.1),rgba(0,173,239,0.1)),linear-gradient(0deg,rgba(255,255,255,0.4),rgba(255,255,255,0.9))]">
                            <div className="flex flex-col text-base group-hover:gap-16 transition-all duration-500 ease-linear">
                              <h3
                                className="text-h5/snug font-medium"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></h3>
                              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-full group-hover:opacity-100">
                                {item.richText.root.children &&
                                  item.richText.root.children.length > 0 &&
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
            <button className="custom-prev absolute top-[8%] right-80 z-10 w-60 h-60 bg-white hover:bg-[#00ADEF33] hidden md:flex justify-center items-center rounded-full focus:bg-[#00ADEF33]">
              <Image
                src="/images/arrow-left.svg"
                alt="navigation arrow left"
                className="w-24 h-24 object-cover"
                role="img"
                width={24}
                height={24}
                fetchPriority="high"
              />
            </button>
            <button className="custom-next absolute top-[8%] right-10 z-10 w-60 h-60 bg-white hover:bg-[#00ADEF33] hidden md:flex justify-center items-center rounded-full focus:bg-[#00ADEF33]">
              <Image
                src="/images/arrow-left.svg"
                alt="navigation arrow right"
                className="w-24 h-24 object-cover rotate-180"
                role="img"
                width={24}
                height={24}
                fetchPriority="high"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VorteileSection;
