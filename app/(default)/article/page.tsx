"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// export const metadata = {
//   title: "Artikel Kebondowo",
//   description:
//     "Kumpulan artikel dan berita di Desa Kebondowo, Kecamatan Banyubiru",
// };

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const articlesCount = 10;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);

  // Generate dummy data
  const dummyArticles = Array.from({ length: articlesCount }, (_, index) => ({
    id: index + 1,
    title: `Judul Artikel ${index + 1}`,
    author: "John Doe",
    date: "12 Juli 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet malesuada nibh. Sed id luctus est. Sed vel dictum felis, nec ullamcorper lectus.",
  }));

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = dummyArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (pageNumber: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-24 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Artikel{" "}
                <span className="bg-clip-text  text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Kebondowo
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Artikel dan berita pariwisata/kegiatan warga Desa Kebondowo
                </p>
              </div>
              {/* Article section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Article cards */}
                {currentArticles.map((article) => (
                  <Link
                    href={`article/${article.id}`}
                    className="inline-block mt-4"
                  >
                    <div
                      className="bg-white rounded-lg shadow-lg"
                      data-aos="zoom-y-out"
                      data-aos-delay={150 * (article.id + 1)}
                      key={article.id}
                    >
                      <Image
                        className="w-full h-64 object-cover object-center rounded-t-lg"
                        src={`/images/hero.jpg`}
                        width={500}
                        height={500}
                        alt={`Article ${article.id}`}
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold">
                          {article.title}
                        </h3>
                        <div className="flex text-xs justify-between items-center my-2">
                          <p className="text-gray-500">
                            Penulis: {article.author}
                          </p>
                          <p className="text-gray-500">
                            Tanggal: {article.date}
                          </p>
                        </div>
                        <p className="text-gray-600">{article.content}</p>
                        <p className="text-blue-600">Baca Selengkapnya</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 gap-3">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-blue-500"
                    } hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-full focus:outline-none transition duration-300`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
