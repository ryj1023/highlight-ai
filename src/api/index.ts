import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import OpenAI from 'openai';
import MessageResponse from '../interfaces/MessageResponse';
import { getBookRecommendations, getBookHighlights, getBookData, searchYouTubeVideos, getAllBooksData, bookIdsToOmit } from './helpers';
import { BookData } from '../interfaces/books';

const router = express.Router();

router.get<{}, MessageResponse>('/highlights', async (req, res) => {
  // Burn 47802645
  // Homo Deus 47802649
  // Stolen Focus 47802638
  const bookId = req.query?.bookId as string;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
  });

  try {
    if (bookId) {
      const bookData = await getBookData(bookId);
      const highlights = await getBookHighlights(bookId);
      if (!highlights) throw new Error('There was an issue fetching the data');
      const quotes = highlights.map((highlight) => highlight.text);
      const { books, quotesSummary, quotesInsights, youtubeSearchTerm } = await getBookRecommendations(openai, quotes, bookData?.title);
      const youTubeData = await searchYouTubeVideos(youtubeSearchTerm);
      res.render('bookDetail', {
        data: {
          bookData,
          bookRecommendations: books,
          quotesSummary,
          quotesInsights,
          highlights,
          youTubeData,
        },
      });
    } else {
      const booksData = await getAllBooksData();
      // const filteredBooks = booksData.map((book: BookData) => console.log('book', { id: book.id, title: book.title }));
      const filteredBooks = booksData.filter((book: BookData) => !bookIdsToOmit.includes(+book.id));

      res.render('books', {
        data: {
          booksData: filteredBooks,
        },
      });
    }

  } catch (e) {
    res.json({
      message: 'there was an issue fetching the data',
    });
  }

});

export default router;
