import Artikel from "@/data/article.json";
import ArticleDetail from "@/components/article-detail";
import { ArticleResponse } from "@/models/Article";

export const metadata = {
  title: "Artikel Kebondowo",
  description: "Kumpulan artikel di Desa Kebondowo, Kecamatan Banyubiru",
};

async function getData(slug: string): Promise<ArticleResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/articles/${slug}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Find the article with the matching slug
  const data = await getData(slug);
  const article = data.article;

  if (!article) {
    // Handle case where article is not found
    return <div>Article not found</div>;
  }

  return <ArticleDetail article={article} />;
}
