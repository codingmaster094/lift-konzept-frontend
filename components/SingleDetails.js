"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import FaqSection from "./FaqSection";
const SingleDetails = ({ title, SingleData }) => {
  const [headers, setHeaders] = useState([]);
  const [updatedHTML, setUpdatedHTML] = useState("");

  // Smooth scroll using Lenis
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link || !window.lenis) return;

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.lenis.scrollTo(targetElement, {
          offset: -150,
          duration: 0.5,
          easing: (t) => t * (2 - t),
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!SingleData.contents.Gutenberg_html) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(
      SingleData.contents.Gutenberg_html,
      "text/html"
    );
    const headingElements = Array.from(doc.querySelectorAll("h1, h2, h3"));

    const headerList = headingElements.map((heading) => {
      const text = heading.textContent.trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]/g, "");
      heading.setAttribute("id", id);
      return { id, text };
    });

    setHeaders(headerList);
    setUpdatedHTML(doc.body.innerHTML); // updated HTML string with IDs
  }, [SingleData.contents.Gutenberg_html]);
  return (
    <section className="page-sec py-100">
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <div className="form-main-top flex justify-between items-start lg:items-end gap-16 lg:gap-32 flex-col lg:flex-row pt-64 pb-48">
          {/* Blog text and last updated date */}
          <div className="blog-text-d single-text text-[14px] flex-col sm:flex-row justify-start items-start sm:items-center">
            <p>
              <time dateTime={SingleData.createdAt}>
                {" "}
                {dayjs(SingleData.createdAt).format("YYYY-MM-DD")}
              </time>
            </p>
            <p>
              Zuletzt aktualisiert am:{" "}
              <time dateTime="2025-09-02">
                {dayjs(SingleData.updatedAt).format("YYYY.MM.DD")}
              </time>
            </p>
          </div>

          {/* Search form */}
          <div className="p-search-form w-full md:w-1/2">
            <form
              role="search"
              method="get"
              className="search-form relative flex justify-start md:justify-end overflow-hidden"
              action="https://treppenlift-konzept.de/"
              aria-label="Website-Suche"
            >
              <label htmlFor="site-search" className="sr-only">
                Suche nach Inhalten
              </label>
              <input
                type="search"
                id="site-search"
                className="search-field border border-solid border-[#F0F0F0] rounded-4xl py-12 px-24 max-w-450 w-full"
                placeholder="Wonach suchen Sie?"
                name="s"
                aria-label="Suchfeld"
              />
              <button
                type="submit"
                className="search-submit px-24 py-12 text-white bg-secondary rounded-4xl absolute top-1 right-1 cursor-pointer !border-transparent"
                aria-label="Jetzt suchen"
              >
                Jetzt suchen
              </button>
            </form>
          </div>
        </div>

        <div className="page-default-content single-post-content">
          <h3
            dangerouslySetInnerHTML={{
              __html: SingleData.Blog_About.SubHeadding,
            }}
          ></h3>
          <ul>
            {SingleData.Blog_About.description.root.children[0].children &&
              SingleData.Blog_About.description.root.children[0].children
                .length > 0 &&
              SingleData.Blog_About.description.root.children[0].children.map(
                (child, index) => {
                  return <li key={index}>{child.children[0].text}</li>;
                }
              )}
          </ul>

          <blockquote>
            <h2
              dangerouslySetInnerHTML={{
                __html: SingleData.CtaSection.Heading,
              }}
            ></h2>
            {SingleData.CtaSection.richText.root.children &&
              SingleData.CtaSection.richText.root.children.length > 0 &&
              SingleData.CtaSection.richText.root.children.map(
                (child, index) => {
                  return <p key={index}>{child.children[0].text}</p>;
                }
              )}
            <Link
              href={SingleData.CtaSection.cta_link1.url}
              role="button"
              className="btn-secondary"
            >
              <span className="relative z-10">
                {SingleData.CtaSection.cta_link1.label}
              </span>
            </Link>
          </blockquote>

          <h3>Inhaltsverzeichnis</h3>

          <ul>
            {headers.map(
              (header) =>
                header.id && (
                  <li key={header.id}>
                    <Link
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(header.id);
                        if (el && window.lenis) {
                          window.lenis.scrollTo(el, {
                            offset: -150,
                            duration: 0.5,
                            easing: (t) => t * (2 - t),
                          });
                        }
                      }}
                    >
                      {header.text}
                    </Link>
                  </li>
                )
            )}
            {SingleData.FaqSection.enableFAQ && (
              <li>
                <Link 
                href={`#faq`}
                onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('#faq');
                        if (el && window.lenis) {
                          window.lenis.scrollTo(el, {
                            offset: -150,
                            duration: 0.5,
                            easing: (t) => t * (2 - t),
                          });
                        }
                      }}
                >Fragen, die uns oft gestellt werden</Link>
              </li>
            )}
          </ul>

          {updatedHTML && (
            <div dangerouslySetInnerHTML={{ __html: updatedHTML }}></div>
          )}
          {/* accordion */}
          <FaqSection
            SectionShow={SingleData.FaqSection.enableFAQ}
            FaqSectionData={SingleData.FaqSection}
          />
        </div>
      </div>
    </section>
  );
};

export default SingleDetails;
