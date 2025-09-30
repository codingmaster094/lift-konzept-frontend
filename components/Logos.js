"use client";
import React from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const Logos = ({ CompanyLogo }) => {
    const duplicatedSlides = CompanyLogo?.concat(
    CompanyLogo
  );
  return (
    <section className="py-32 md:py-50 xl:py-[70px]">
      <div className="inn max-w-1592 mx-auto px-16">
        <div className="swiper-logo">
          <Swiper
            className="items-center gap-32"
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={6}
            loop={true}
            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: { clickable: true },
                spaceBetween: 0,
              },
              425: {
                slidesPerView: 2,
                pagination: { clickable: true },
              },
              768: {
                slidesPerView: 3,
                pagination: false,
              },
              1024: {
                slidesPerView: 4,
                pagination: false,
              },
              1366: {
                slidesPerView: 6,
                pagination: false,
              },
            }}
          >
            {
              duplicatedSlides && duplicatedSlides.length > 0 ? (
                duplicatedSlides.map((logo, index) => (
                  <SwiperSlide key={index}>
              <div className="flex justify-center items-center py-20">
                <Link
                  href={logo.url}
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className="w-full h-full object-contain"
                    src={logo.logoImage.url}
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
                ))
              ) : null
            }
            
            <SwiperSlide>
              <div className="flex justify-center items-center py-20">
                <Link
                  href="/"
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className=""
                    src="/images/Logo-1.webp"
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center py-20">
                <Link
                  href="/"
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className=""
                    src="/images/Logo-2.webp"
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center py-20">
                <Link
                  href="/"
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className=""
                    src="/images/Logo-3.webp"
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center py-20">
                <Link
                  href="/"
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className=""
                    src="/images/Logo-4.webp"
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center py-20">
                <Link
                  href="/"
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className=""
                    src="/images/Logo-5.webp"
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center py-20">
                <Link
                  href="/"
                  role="link"
                  className="block w-157 h-35"
                  aria-roledescription="Company Logo"
                >
                  <Image
                    className=""
                    src="/images/Logo.webp"
                    alt="company logo"
                    role="img"
                    width={157}
                    height={35}
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Logos;
