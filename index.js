const puppeteer = require('puppeteer');
const CRED_PATH = require ('./credentials.json');
(async () => {
  const browser = await puppeteer.launch({ headless: false,args: ['--start-maximized'] })
  const page = await browser.newPage()

  await page.goto('https://autogestion.personal.com.ar/login/',{waitUntil: 'networkidle0'})
  await page.setViewport({ width : 1366, height : 657 })

  await page.waitForSelector('iframe[id="loginIframe"]')
  const elementHandle = await page.$('iframe[id="loginIframe"]');
  const frame = await elementHandle.contentFrame();
  //Numero
  await frame.type('#idToken1', CRED_PATH.number, { delay: 100 });
  //clave
  await frame.type('#idToken2', CRED_PATH.clave, { delay: 100 });
  //login
  await frame.click('#loginButton_0', { delay: 100 });
  
  await page.waitFor(3000);

  //lupa(search)
  await page.waitForXPath('//*[@id="tpi-navbar-item3"]/a');  
  const linkHandlers = await page.$x('//*[@id="tpi-navbar-item3"]/a');  
  await linkHandlers[0].click({button : 'right'})



  await page.waitFor(3000);

  await page.waitForXPath('//*[@id="tpi-navbar-item3-content"]/li[2]/ul/li[3]/ul/li[2]/a');  
  const linkHandlers11 = await page.$x('//*[@id="tpi-navbar-item3-content"]/li[2]/ul/li[3]/ul/li[2]/a');  
  await linkHandlers11[0].click()

  const selector = 'li.activa';
  await page.waitForSelector(selector);
  await page.click(selector)

  console.log ("pass")

})();



