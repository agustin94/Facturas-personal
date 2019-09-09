const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://autogestion.personal.com.ar/login/')
  await page.setViewport({ width: 1920, height: 969 })

  const frame = page.frames().find(frame => frame.url() === 'https://autogestion.personal.com.ar/login/');
  const text = frame.evaluate(() => document.querySelector('#loginIframe'));


  console.lo g(text)

  // document.querySelector('iframe[id="loginIframe"]')
})();