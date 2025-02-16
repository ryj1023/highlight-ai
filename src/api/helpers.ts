import { OpenAIBooksResponse, YoutubeAPIItem, ReadwiseHighlights, BookData } from '../interfaces/books';
const dotenv = require('dotenv');
dotenv.config();

export const bookIdsToOmit = [48423174, 48423173, 48423172, 48423171, 48423170, 48423169, 48423167, 48423166, 48423165, 48423164, 48423162, 48423161, 48423160, 48423159, 48423158, 48423157,
  48423156, 48423155, 48423154, 48423153, 48423152, 48423151, 48423149, 48423147, 48423146, 48423145, 48423144, 48423143, 48423142, 48423141, 48423140, 48423139, 48423138, 48423136,
  48423135, 48423134, 48423133, 48423132, 48423131, 48423130, 48423129, 48423128, 48423127, 48423126, 48423125, 48423124, 48423123, 48423122, 48423121, 48423120, 48423119, 48423118,
  48423117, 48423116, 48423113, 48423111, 48423110, 48423109, 48423107, 48423106, 48423105, 48423104, 48423103, 48423102, 48423099, 48423098, 48423097, 48423094, 48423093, 48423092,
  48423090, 48423089, 48423088, 48423086, 48423085, 48423084, 48423082, 48423070, 48423051, 48423035, 48423034, 48423033, 48423032, 48423030, 48423029, 48423028, 48423027,
  48423024, 48423023,
];

export const getAllBooksData = async () => {
  const bookDataUrl = 'https://readwise.io/api/v2/books?page_size=200';
  const response = await fetch(bookDataUrl, {
    headers: {
      Authorization: `Token ${process.env.READWISE_ACCESS_TOKEN}`,
    },
  });
  const booksData = await response.json();
  return booksData?.results || [] as BookData[];
};

export const getBookData = async (bookId: string) => {
  const bookDataUrl = `https://readwise.io/api/v2/books/${bookId}`;
  const response = await fetch(bookDataUrl, {
    headers: {
      Authorization: `Token ${process.env.READWISE_ACCESS_TOKEN}`,
    }
  });
  return await response.json() as BookData;
};

export const getBookHighlights = async (bookId: string) => {
  const specificBookHighlights = `https://readwise.io/api/v2/highlights?book_id=${bookId}`;

  const response = await fetch(specificBookHighlights, {
    headers: {
      Authorization: `Token ${process.env.READWISE_ACCESS_TOKEN}`,
    },
  });

  const { results } = await response.json() as ReadwiseHighlights;
  return results;
};

export const getBookRecommendations = async (openai: any, quotes: string[], bookTitle: string): Promise<OpenAIBooksResponse> => {
  const prompt = `
  Based on the following quotes from a book, perform the following tasks:
  1. Summarize the main themes or ideas expressed in the quotes.
  2. Explain the value or life lessons that can be derived from the book's quotes, and how they relate to the book they came from.
  3. Recommend a series of books that share similar themes, styles, or ideas. Make sure not to recommend the book with the title: ${bookTitle}.
  4. Provide a search term query based on the central theme of the highlights. This search term will be used to find relevant YouTube videos.
  Quotes:
  ${quotes.map((quote, index) => `${index + 1}. "${quote}"`).join('\n')}
  For task 1, please go into enough detail so that the summary is at least 5 sentences.
  For task 2, please go into enough detail so that your explanation is at least 5 sentences.
  For task 3, please list 5 books and briefly explain why each book is recommended.
  For task 4, provide a concise and descriptive search term query that can be used in YouTube to find videos relevant to the themes or ideas.

  `;
  // Call OpenAI API
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `
          You are a helpful assistant that summarizes book highlights, provides insights about them, 
          recommends books, and generates descriptive search terms for finding related YouTube videos.
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    functions: [
      {
        name: 'recommend_books_and_insights',
        description: 'Summarize highlights, explain their value, recommend books, and generate a YouTube search query based on a list of quotes',
        parameters: {
          type: 'object',
          properties: {
            quotesSummary: {
              type: 'string',
              description: 'A summary of the main themes or ideas expressed in the quotes',
            },
            quotesInsights: {
              type: 'string',
              description: 'The value or life lessons derived from the highlights and how they relate to the book',
            },
            books: {
              type: 'array',
              description: 'A list of recommended books',
              items: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'The title of the book',
                  },
                  author: {
                    type: 'string',
                    description: 'The author of the book',
                  },
                  reason: {
                    type: 'string',
                    description: 'The reason for recommending this book',
                  },
                },
                required: ['title', 'author', 'reason'],
              },
            },
            youtubeSearchTerm: {
              type: 'string',
              description: 'A descriptive search term query that can be used to find relevant YouTube videos',
            },
          },
          required: ['quotesSummary', 'quotesInsights', 'books', 'youtubeSearchTerm'],
        },
      },
    ],
    function_call: { name: 'recommend_books_and_insights' },
    max_tokens: 2000,
    temperature: 0.7,
  });
  const result = response?.choices?.[0]?.message?.function_call?.arguments;
  return JSON.parse(result);
};



export const searchYouTubeVideos = async (searchTerm: string) => {
  const maxResults = 3;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    searchTerm,
  )}&type=video&maxResults=${maxResults}&key=${process.env.GOOGLE_API_KEY}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const items = data.items as YoutubeAPIItem[];
  return items?.map((item) => ({
    title: item.snippet.title,
    description: item.snippet.description,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  })) || [];
};