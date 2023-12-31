export interface Article {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  picture_url: string;
  created_at: string;
  updated_at: string;
}

export interface ArticlesResponse {
  articles: Article[];
}

export interface ArticleResponse {
  article: Article;
}
