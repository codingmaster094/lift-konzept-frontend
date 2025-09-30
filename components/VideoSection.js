"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const VideoSection = ({ VideoSectionData }) => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.controls = false;
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.load(); // reset poster
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-32 md:py-50 xl:py-100 relative">
      <Image
        className="absolute top-1/2 left-0 z-0 -translate-y-[33%] w-[34%]"
        src="/images/stairs-background.png"
        alt="background image"
        role="img"
        width={650}
        height={1000}
        fetchPriority="high"
      />
      <div className="container">
        <div className="inner max-w-lg w-full mx-auto space-y-48">
          {/* Heading */}
          <div className="heading space-y-16 text-center">
            <h2
              className="text-h2/normal text-primary"
              dangerouslySetInnerHTML={{ __html: VideoSectionData.Heading }}
            ></h2>
            <div className="para text-base/normal">
              {VideoSectionData.richText.root.children &&
                  VideoSectionData.richText.root.children.length > 0 &&
                  VideoSectionData.richText.root.children.map((child, index) => {
                    return <p key={index}>{child.children[0].text}</p>;
                  })}
            </div>
          </div>

          {/* Video Section */}
          <div className="video-section w-full">
            <div className="relative h-350 lg:h-550  rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl overflow-hidden relative z-10"
                poster={VideoSectionData.thumbnalImage.url}
                height="400"
                width="550"
                preload="metadata"
                aria-label="Sintel movie trailer"
                playsInline
                onPause={handlePause}
                onEnded={handleEnded}
              >
                <source
                  src={VideoSectionData.video.url}
                  type="video/mp4"
                />
                Your browser does not support the video tag.{" "}
                <Link href={VideoSectionData.video.url}>
                  Download the video
                </Link>
              </video>

              {!isPlaying && (
                <button
                  type="button"
                  className="play-btn absolute inset-0 flex items-center justify-center z-10"
                  aria-label="Play Sintel movie trailer"
                  onClick={handlePlay}
                >
                  <Image
                    src="/images/Play.png"
                    alt="White logo of lift konzept"
                    role="img"
                    width={272}
                    height={272}
                    fetchPriority="high"
                  />
                </button>
              )}
              <div className="overlay w-full h-full absolute top-0 left-0 bg-[#0000003D]"></div>
              <Image
                className="absolute top-32 left-32 z-10"
                src="/images/konzept_white-logo.svg"
                alt="White logo of lift konzept"
                role="img"
                width={150}
                height={66}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
