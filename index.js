const puppeteer = require('puppeteer');
const URL = require('url').URL;

const DOMAIN = 'https://google.com';

(async () => {
  const browser = await puppeteer.launch({
  	headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto(DOMAIN + '/');
  await page.screenshot({path: '1.png', fullPage: true});
  await browser.close();
})();
