"use client";

import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Link from "next/link";

// ✅ Accept API response as props
const TreppenliftGallery = ({ TreppenliftGalleryData }) => {
  const [index, setIndex] = useState(-1);

  // ✅ Map response to Lightbox format
  const images =
    TreppenliftGalleryData?.TreppenliftGallery?.map((item) => ({
      src: item?.Stairliftgallery?.url,
      alt: item?.Stairliftgallery?.alt || "Treppenlift Beispiel",
      width: item?.Stairliftgallery?.width || 400,
      height: item?.Stairliftgallery?.height || 533,
    })) || [];

  return (
    <section className="py-32 md:py-50 xl:py-100 relative">
      <div className="container">
        <div className="inner space-y-24 md:space-y-32 lg:space-y-48">
          <div className="heading space-y-16 flex flex-col justify-center items-center text-center">
            <span className="block text-base" dangerouslySetInnerHTML={{__html:TreppenliftGalleryData.SubHeading}}></span>
            <h2 className="text-h2/normal text-primary" dangerouslySetInnerHTML={{__html:TreppenliftGalleryData.Heading}}>
            </h2>
          </div>

          {/* ✅ Gallery Grid */}
          <div className="gallery-grid grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* First Column */}
            <div className="col1 flex flex-col gap-16">
              {images.slice(0, 2).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="block w-full h-367 rounded-xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    role="img"
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Middle Column */}
            <div className="col2 h-full">
              {images[2] && (
                <button
                  onClick={() => setIndex(2)}
                  className="block w-full h-full rounded-xl overflow-hidden"
                >
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    role="img"
                    width={images[2].width}
                    height={images[2].height}
                    className="w-full h-367 lg:h-full object-cover"
                  />
                </button>
              )}
            </div>

            {/* Last Column */}
            <div className="col3 flex flex-col gap-16">
              {images.slice(3).map((img, i) => (
                <button
                  key={i + 3}
                  onClick={() => setIndex(i + 3)}
                  className="block w-full h-367 rounded-xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    role="img"
                    width={img.width}
                    height={img.height}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ✅ Load More Button */}
          <div className="flex justify-center mt-10">
            <Link href="/" role="button" className="btn-secondary">
              <span className="relative z-10">Mehr Laden</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
        plugins={[Thumbnails, Zoom]}
      />
    </section>
  );
};

export default TreppenliftGallery;
