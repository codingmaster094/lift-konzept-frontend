"use client";
import React, { useEffect, useState } from "react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    const scrollY = window.scrollY;
    setVisible(scrollY > 100);
  };

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 50;
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={smoothScrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll to top"
        style={{
          backgroundColor: isHovered ? "#8bc43f" : "#000",
          cursor: "pointer",
          width: "50px",
          height: "50px",
          zIndex: "999",
          position: "fixed",
          right: "32px",
          bottom: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.4)",
          transition: "background-color 0.3s ease",
        }}
      >
        <svg
          className="icon__arrow-up"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="#ffffff"
        >
          <title>Back to top</title>
          <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z" />
        </svg>
      </button>
    )
  );
};

export default TopButton;
