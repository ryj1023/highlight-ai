export interface Books {
  title: string;
  author: string;
  reason: string;
}

export interface YoutubeAPIItem {
  snippet: {
    title: string;
    description: string;
  };
  id: {
    videoId: string;
  };
}

export interface YoutubeItem {
  title: string;
  url: string;
  description: string;
}

export interface OpenAIBooksResponse {
  books: Books[]
  quotesInsights: string
  quotesSummary: string
  youtubeSearchTerm: string;
}

export interface ReadwiseHighlights {
  results: Highlight[];
}

export interface Highlight {
  id: number;
  text: string;
  note: string;
  location: number;
  location_type: string;
  highlighted_at: string;
  url: string;
  color: string;
  updated: string;
  tags: string[];
}

export interface Quote {
  quote: string[];
}

export interface BookData {
  title: string;
  author: string;
  cover_image_url: string;
  id: string;
}