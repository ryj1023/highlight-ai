import express from 'express';
import puppeteer from 'puppeteer';

const router = express.Router();

type EmojiResponse = string[];

router.get<{}, EmojiResponse>('/', async (req, res) => {
  console.log('🚀!!');
  // Launch Puppeteer
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-default-browser-check', '--disable-autofill-keyboard-accessory', '--incognito'] // diablses autofill so that the touch id prompt doesnt show
    }); // Set headless to `true` if you don't need a visible browser

    const page = await browser.newPage();

    // Disable browser-level autofill features
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');


    // Navigate to the Amazon Kindle Notebook
    await page.goto('https://read.amazon.com/kp/notebook');

    // await page.goto('http://localhost:5000/api/books');

    // // Wait for the login page to load
    await page.waitForSelector('#ap_email'); // Amazon email field selector

    // // // Input email
    await page.type('#ap_email', 'null');
    await page.click('#continue');

    // navigate to password form
    await page.waitForNavigation();
    await page.waitForSelector('#ap_password'); // Amazon email field selector
    await page.type('#ap_password', 'null'); // Input password
    await page.click('#signInSubmit');

    // Wait for navigation after login
    await page.waitForNavigation();

    // // Confirm you're on the notebook page
    if (page.url().includes('notebook')) {
      // if (page.url().includes('books')) {
      console.log('success on page')
      await page.waitForSelector('#kp-notebook-search-input');
      await page.type('#kp-notebook-search-input', 'Lords of Finance');
      await page.keyboard.press('Enter');
      await page.waitForNavigation();
      await page.waitForSelector('#kp-notebook-annotations');

      const highlights = await page.evaluate(() => {
        // const rows = document.querySelectorAll('#kp-notebook-annotations .a-row a-spacing-base');
        const rows = document.querySelectorAll('.a-row a-spacing-top-medium');
        console.log('rows', rows?.length)
        return Array.from(rows).map(row => {
          const span = row.querySelector('span'); // Find the nested span
          console.log('span', span)
          return span ? span.innerText.trim() : null; // Return the text or null if no span exists
        }).filter(text => text !== null); // Filter out nulls (if any rows have no span)
      });
      console.log('res.send', res.send)
      res.json(highlights);
    } else {
      console.error('Failed to log in or navigate to the notebook page.');
    }

    // Close the browser
    // await browser.close();
  } catch (error) {
    console.log('error', error)
  }

});

export default router;
