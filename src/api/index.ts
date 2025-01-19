import express from 'express';
// import { Configuration, OpenAIApi } from 'openai';
// eslint-disable-next-line import/no-extraneous-dependencies
import OpenAI from 'openai';
import MessageResponse from '../interfaces/MessageResponse';
import auth from './auth';
import books from './books';
import { Recommendations, Highlight, ReadwiseHighlights } from '../interfaces/books';

const router = express.Router();

const reccommendedBooks = {
  books: [
    {
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
      reason: "This book delves into the theme of choices and their consequences, highlighting the importance of personal agency and moral decisions in shaping one's identity."
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      reason: "Coelho's novel emphasizes the pursuit of happiness and the importance of following one's dreams, even in challenging circumstances, resonating with the idea of finding light in darkness."
    },
    {
      title: 'The Perks of Being a Wallflower',
      author: 'Stephen Chbosky',
      reason: 'This book explores themes of love, acceptance, and self-worth, echoing the sentiment that we often accept the love we believe we deserve, as well as the importance of personal growth.'
    },
    {
      title: 'The Fault in Our Stars',
      author: 'John Green',
      reason: "Green’s novel addresses the struggles and choices faced by young individuals in the face of adversity, encapsulating the idea that happiness can be found amidst life's darkest moments."
    },
    {
      title: 'The Book Thief',
      author: 'Markus Zusak',
      reason: 'Set in Nazi Germany, this book illustrates the power of choices in the face of moral dilemmas, and the capacity for love and hope to thrive even in dire situations.'
    }
  ]
}

// const highlight: Highlight = {
//     id: 839422371,
//     text: 'In modern times, a full 75 percent of the nation’s health care costs stem directly from chronic conditions, with three of the most expensive being heart disease, cancer, and mental disorders.',
//     note: '',
//     location: 3159,
//     location_type: 'location',
//     highlighted_at: '2021-06-07T04:56:00.000000Z',
//     url: null,
//     color: 'blue',
//     updated: '2025-01-15T03:40:13.422866Z',
//     book_id: 47802668,
//     // tags: [Array]

// }

const getBookRecommendations = async (openai: any, quotes: string[]): Promise<Recommendations> => {

  const prompt = `
  Based on the following quotes from a book, recommend a series of books that share similar themes, styles, or ideas:
  
  Quotes:
  ${quotes.map((quote, index) => `${index + 1}. "${quote}"`).join('\n')}
  Please list 5 books and briefly explain why each book is recommended.
`;

  // Call OpenAI API
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant that recommends books based on given quotes.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    functions: [
      {
        name: 'recommend_books',
        description: 'Recommend books based on a list of quotes',
        parameters: {
          type: 'object',
          properties: {
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
          },
          required: ['books'],
        },
      },
    ],
    function_call: { name: 'recommend_books' },
    max_tokens: 1000,
    temperature: 0.7,
  });
  const result = response?.choices?.[0]?.message?.function_call?.arguments;
  return JSON.parse(result);
  // return reccommendedBooks;
};

const getBookHighlights = async () => {
  const specificBookHighlights = 'https://readwise.io/api/v2/highlights?book_id=47802668';
  const bookEndpoint = 'https://readwise.io/api/v2/books/' // get ids from results[].id
  // const highlight = 'https://readwise.io/api/v2/books/'
  // Make the GET request
  const response = await fetch(specificBookHighlights, {
    headers: {
      Authorization: `Token ${process.env.READWISE_ACCESS_TOKEN}`,
    },
  });
  const { results } = await response.json() as ReadwiseHighlights;
  return results;
};

router.get<{}, MessageResponse>('/my-library', async (req, res) => {

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
  });

  try {
    // Make the GET request
    const highlights = await getBookHighlights();
    if (!highlights) throw new Error('There was an issue fetching the data');
    const quotes = highlights.map((highlight) => highlight.text);
    const recommendations = await getBookRecommendations(openai, [quotes[0], quotes[1], quotes[2], quotes[3], quotes[4]]);
    res.json({ data: recommendations, message: 'success' });
  } catch (e) {
    console.log('e', e)
    res.json({
      message: 'there was an issue fetching the data',
    });
  }

});
router.use('/auth', auth);
router.use('/books', books);

export default router;
