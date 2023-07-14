import Artikel from "@/data/article.json";
import ArticleDetail from "@/components/article-detail";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // Find the article with the matching slug
  const article = Artikel.data.find((article) => article.slug === slug);

  if (!article) {
    // Handle case where article is not found
    return <div>Article not found</div>;
  }

  return <ArticleDetail article={article} />;
}
