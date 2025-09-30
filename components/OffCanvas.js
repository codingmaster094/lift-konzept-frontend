"use client";
import Link from "next/link";
import React from "react";

const OffCanvas = ({ menus, isOpen, onClose }) => {
  return (
    <div
      id="mobile-curtain"
      className={`z-20 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav
        id="mobile-menu"
        className="w-300 h-screen bg-secondary py-40 px-20 relative"
        role="navigation"
        aria-label="Hauptmenü"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-16 right-16 text-white"
          aria-label="Menü schließen"
        >
          ✕
        </button>

        <ul className="flex flex-col gap-24 text-left text-white [&_li]:px-12 [&_li]:text-h5 py-30 [&_li>a]:!text-white">
          {menus &&
            menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.link?.url || "/"}
                  aria-label={menu.link?.label || ""}
                  target={menu.link?.target || "_self"}
                  role="link"
                >
                  {menu.link?.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default OffCanvas;
