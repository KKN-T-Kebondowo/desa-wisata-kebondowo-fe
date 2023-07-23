import { formatDateToIndonesian } from "@/helpers/formatDate";
import { Article } from "@/models/Article";
import Link from "next/link";

interface ArticleDetailProps {
  article: Article;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Article content */}
          <div className="pt-32 pb-12 md:pt-24 md:pb-20">
            {/* Article header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4">
                {article.title}
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8">
                  Penulis: {article.author} | Tanggal:{" "}
                  {formatDateToIndonesian(article.created_at)}
                </p>
              </div>
              {/* Article content */}
              <div className="max-w-3xl mx-auto">
                <img
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                  src={article.picture_url}
                  alt={`Article ${article.id}`}
                />
                <div
                  className="mt-4 text-lg text-gray-600"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
              </div>
              {/* Back to all articles link */}
              <div className="mt-8">
                <Link href="/article" className="text-blue-400">
                  Kembali ke semua artikel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
