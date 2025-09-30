import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ FooterData, MenusData }) => {

  return (
    <footer>
      <div className="footer-top pt-32 md:pt-50 xl:pt-80 pb-32 md:pb-50 xl:pb-64">
        <div className="container">
          <div className="inner flex justify-between flex-wrap lg:flex-nowrap gap-16 lg:gap-0">
            <div className="space-y-16 max-w-full md:max-w-[48%] lg:max-w-382 w-full  pl-16 md:pl-0 pr-16 md:pr-20">
              <Link href="/" role="link" className="block">
                <Image
                  className="w-130 sm:w-200"
                  src={FooterData.footerlogo.url}
                  alt="Company Name logo"
                  role="img"
                  width={200}
                  height={60}
                  fetchPriority="high"
                />
              </Link>
              <span
                className="block text-[#011527DB]"
                dangerouslySetInnerHTML={{ __html: FooterData.description }}
              ></span>
              <div className="social-icons flex gap-16">
                {FooterData.social.map((social, index) => (
                  <Link
                    href="#"
                    role="link"
                    className="block transition-transform duration-500 ease-linear hover:-translate-y-8"
                    key={index}
                  >
                    <Image
                      src={social.social_icon.url}
                      alt="icon of facebook"
                      role="img"
                      width={social.social_icon.width}
                      height={social.social_icon.height}
                      fetchPriority="high"
                    />
                  </Link>
                ))}
              </div>
            </div>
            {FooterData.navigation.map((nav, index) => (
              <div
                key={index}
                className="foot-link max-w-full md:max-w-[48%] lg:max-w-382 w-full"
                aria-label="Main site navigation"
              >
                <span className="block px-16 py-10 text-primary font-medium">
                  {nav.heading}
                </span>
                <ul className="[&>li]:px-16 [&>li]:py-6 text-[#011527DB]">
                  {nav.menus.map((menu, idx) => (
                    <li key={idx}>
                      <Link href={menu.url} aria-label="Go to Home page">
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="foot-col max-w-full md:max-w-[48%] lg:max-w-286 w-full">
              <span className="block px-16 py-10 text-primary font-medium">
                Kontakt
              </span>
              <ul
                className="[&>li]:px-16 [&>li]:py-6 text-[#011527DB] [&>li]:flex [&>li]:justify-start [&>li]:items-start [&>li]:gap-10"
                aria-label="Company contact information"
              >
                <li>
                  <Image
                    src="/images/location.svg"
                    alt="Location icon"
                    role="img"
                    width={24}
                    height={24}
                    fetchPriority="high"
                  />
                  {FooterData.kontakt.address}
                </li>
                <li>
                  <Image
                    src="/images/call-calling.svg"
                    alt="Phone icon"
                    role="img"
                    width={24}
                    height={24}
                    fetchPriority="high"
                  />
                  <Link
                    href={FooterData.kontakt.phone_url}
                    aria-label="Call us at +49 122 123 1243"
                  >
                    {FooterData.kontakt.phone}
                  </Link>
                </li>
                <li>
                  <Image
                    src="/images/sms-tracking.svg"
                    alt="Email icon"
                    role="img"
                    width={24}
                    height={24}
                    fetchPriority="high"
                  />
                  <Link
                    href={`mailto:${FooterData.kontakt.email}`}
                    aria-label="Send an email to info@liftconcept.com"
                  >
                    {FooterData.kontakt.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm bg-[#0065A333] py-16">
        <div className="container">
          <div className="inner flex justify-center md:justify-between itemss-center gap-12 md:gap-32 md:flex-row flex-col">
            <span className="flex gap-8 sm:gap-16 text-[14px] items-center justify-center md:justify-start">
              <Image
                src="/images/Copyright.svg"
                alt="Copyright symbol"
                role="img"
                width={24}
                height={24}
                fetchPriority="high"
              />
              {FooterData.copyright}
            </span>

            <ul
              className="[&>li]:px-16 md:[&>li]:py-6 text-[#011527DB] flex justify-center md:justify-start flex-col sm:flex-row text-[14px] text-center sm:gap-0 gap-8"
              role="list"
              aria-label="Legal links"
            >
              {
                FooterData.legalLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} role="link">
                  {link.label}
                </Link>
              </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
