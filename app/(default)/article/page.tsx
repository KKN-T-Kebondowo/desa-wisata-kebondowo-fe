import Image from "next/image";
import Link from "next/link";

import Pagination from "@/components/pagination";
import { ArticlesResponse } from "@/models/Article";
import { formatDateToIndonesian } from "@/helpers/formatDate";
import { generatePreview } from "@/helpers/htmlElement";

export const metadata = {
  title: "Artikel Kebondowo",
  description:
    "Kumpulan artikel dan berita di Desa Kebondowo, Kecamatan Banyubiru",
};

async function getData(): Promise<ArticlesResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/articles`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Article() {
  const data = await getData();

  const articlesPerPage = 6;
  const articlesCount = data.articles.length;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);

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
                {data.articles.map((article, idx) => (
                  <Link
                    href={`article/${article.slug}`}
                    className="inline-block mt-4"
                  >
                    <div
                      className="bg-white rounded-lg shadow-lg"
                      data-aos="zoom-y-out"
                      data-aos-delay={150 * (idx + 1)}
                      key={article.id}
                    >
                      <Image
                        className="w-full h-64 object-cover object-center rounded-t-lg"
                        src={article.picture_url}
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
                            Tanggal:{" "}
                            {formatDateToIndonesian(article.created_at)}
                          </p>
                        </div>
                        {/* <p className="text-gray-600">{article.content}</p> */}
                        {/* cut article.content text only up to 30 words */}
                        <p className="text-gray-600">
                          {generatePreview(article.content, 30)}
                        </p>

                        <p className="text-blue-600">Baca Selengkapnya</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
