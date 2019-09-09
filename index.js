const puppeteer = require('puppeteer');
const CRED_PATH = require ('./credentials.json');
(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https://autogestion.personal.com.ar/login/',{waitUntil: 'networkidle0'})
  await page.setViewport({ width: 1366, height: 768 })

  await page.waitForSelector('iframe[id="loginIframe"]')
  const elementHandle = await page.$(
    'iframe[id="loginIframe"]'
    );
const frame = await elementHandle.contentFrame();

await frame.type('#idToken1', CRED_PATH.number, { delay: 100 });
await frame.type('#idToken2', CRED_PATH.clave, { delay: 100 });
await frame.click('#loginButton_0', { delay: 100 });

})();