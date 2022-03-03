const puppeteer = require('puppeteer');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.exercise = async (req, res) => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage()
    await page.goto('https://www.google.com')
    await browser.close();
    res.send('Hi');
}
