import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlog = ({ RatgeberData }) => {
  return (
    <section className="single-blog-sec py-100">
      <div className="container">
        <div className="form-main space-y-48">
          <div className="form-main-top flex justify-between items-start lg:items-end gap-16 lg:gap-32 flex-col lg:flex-row">
            <div className="new-title-content space-y-16">
              <p>Ratgeber</p>
              <h2 className="text-h2/snug text-primary font-bold">
                Treppenlift-Ratgeber
              </h2>
            </div>
            <div className="p-search-form w-full md:w-1/2">
              <form
                role="search"
                method="get"
                className="search-form flex gap-2 justify-end relative"
                action="/"
                aria-label="Website Suche"
              >
                <label htmlFor="site-search" className="sr-only">
                  Wonach suchen Sie?
                </label>
                <input
                  type="search"
                  id="site-search"
                  className="search-field !border-transparent bg-[#F0F0F0] rounded-4xl px-24 py-14 w-full outline-none max-w-full md:max-w-450"
                  placeholder="Wonach suchen Sie?"
                  name="s"
                  aria-label="Suchfeld"
                />
                <Image
                  className="absolute right-24 top-1/2 -translate-y-1/2"
                  src="/images/search-normal.svg"
                  alt="Image for Hero Section"
                  role="img"
                  width={24}
                  height={24}
                  fetchPriority="high"
                />
              </form>
            </div>
          </div>

          <div className="blog-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 lg:gap-x-32 gap-y-24 lg:gap-y-48">
            {RatgeberData.docs.map((item, i) => {
              return (
                <div key={i} className="blog-wrap-box">
                  <div className="blog-box-item flex flex-col h-full group">
                    <Link
                      href={`/trappenlift_ratgeber/${item.slug}`}
                      className="img-box overflow-hidden rounded-xl relative"
                      aria-roledescription="img Link to blog detail page"
                    >
                      <Image
                        className="w-full h-398 object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.contents.Featured_image.url}
                        alt="Image for Hero Section"
                        role="img"
                        width={458}
                        height={398}
                        fetchPriority="high"
                      />
                      <span className="w-fit py-8 px-16 bg-[#01152780] rounded-3xl absolute top-12 left-12 z-10 text-white">
                        Homelift
                      </span>
                    </Link>
                    <div className="content-box mt-16 space-y-16">
                      <Link
                         href={`/trappenlift_ratgeber/${item.slug}`}
                        aria-roledescription="title Link to blog detail page"
                      >
                        <h3
                          className="text-h4/snug font-medium"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                      </Link>
                      <div>
                        {item?.description?.root.children &&
                          item?.description?.root.children.length > 0 &&
                          item?.description?.root.children.map((child, index) => {
                            return (
                              <p
                                className="mt-8 text-base/relaxed text-dark"
                                key={index}
                              >
                                {child.children[0].text}
                              </p>
                            );
                          })}
                      </div>
                      <Link
                         href={`/trappenlift_ratgeber/${item.slug}`}
                        role="button"
                        aria-label="Weiter zur nächsten Frage"
                        className="inline-flex items-center gap-24 text-primary text-h5"
                      >
                        <span>Weiter</span>
                        <Image
                          src="/images/lightbue_right.svg"
                          alt=""
                          role="presentation"
                          width={48}
                          height={48}
                          fetchPriority="high"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/" role="button" className="btn-secondary mx-auto">
            <span className="relative z-10">Mehr anzeigen</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
