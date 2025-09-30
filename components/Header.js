"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OffCanvas from "./OffCanvas";
import Lenis from "@studio-freight/lenis";
const Header = ({ HeaderData, MenusData }) => {
  const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <header className="py-16">
        <div className="inn max-w-[1720px] mx-auto px-16">
          <div className="inner flex justify-between gap-16 xl:gap-32 items-center">
            {/* Logo */}
            <Link href="/" role="link" className="block">
              <Image
                className="w-130 sm:w-180 xl:w-200"
                src={HeaderData.Header_Logo.url}
                alt="Company Name logo"
                role="img"
                width={200}
                height={60}
                fetchPriority="high"
              />
            </Link>

            {/* Navigation + CTA + Menu Button */}
            <div className="flex gap-16 xl:gap-24 justify-center items-center">
              {/* Desktop Menu */}
              <nav
                id="menu"
                className="2xl:block hidden"
                role="navigation"
                aria-label="menü"
              >
                <ul className="flex [&_li]:px-6 xl:[&_li]:px-12 xxl:gap-16 text-center">
                  {MenusData.menus.map((menu, index) => (
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

              {/* CTA Button */}
              <Link
                href={HeaderData.link.url}
                target={HeaderData.link.target}
                role="link"
                aria-label="Kostenlose Beratung"
                className="btn-secondary !hidden sm:!block"
              >
                <span className="relative z-10 flex justify-center items-center gap-10">
                  <Image
                    src="/images/call.webp"
                    alt="call icon"
                    role="img"
                    width={24}
                    height={24}
                  />
                  <span>{HeaderData.link.Kontakt_label}</span>
                </span>
              </Link>
              {/* call icon */}
              <Link
                aria-label="Call us at +49 122 123 1243"
                href="tel:+491221231243"
                role="link"
                className="sm:hidden flex justify-center items-center bg-secondary w-40 h-40 rounded-full"
              >
                <Image
                  src="/images/call.webp"
                  alt="call icon"
                  role="img"
                  width={24}
                  height={24}
                />
              </Link>
              {/* Mobile Menu Button */}
              <button
                id="menu-btn"
                className="2xl:hidden block"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src="/images/menu-btn.svg"
                  alt="Menu button"
                  role="img"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OffCanvas Menu */}
      <OffCanvas menus={MenusData.menus} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
