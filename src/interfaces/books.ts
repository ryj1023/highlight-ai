export interface Books {
  title: string;
  author: string;
  reason: string;
}

export interface Recommendations {
  books: Books[]
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