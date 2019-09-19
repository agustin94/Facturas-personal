const puppeteer = require('puppeteer');
const CRED_PATH = require ('./credentials.json');

(async () => {

  try { 
    const browser = await puppeteer.launch({ headless: false,args: ['--start-maximized'] })
    const page = await browser.newPage()

    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './'});
    await page.goto('https://serviciosempresa.personal.com.ar/sie/sie/login.aspx',{waitUntil: 'networkidle0'})


    await page.setViewport({ width : 1366, height : 657 })
    

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Login
  
    //Numero de area
    await page.type('#ctl00_ucLogin_txtArea', CRED_PATH.numberarea, { delay: 50 });
    //Numero de telefono
    await page.type('#ctl00_ucLogin_txtLinea', CRED_PATH.numberlinea, { delay: 50 });
    //clave
    await page.type('#ctl00_ucLogin_txtPin',CRED_PATH.clave)
    //login
    await page.click('#ctl00_ucLogin_BtnAceptarSSO', { delay: 50 });
    
    await page.waitFor(3000);


    ////////////////////////////////////////////////////////////////////////////////////////////
    //Dentro del sitio ingresar a Facturas.
    await page.waitForSelector('#ctl00_MainCentro_btnFacturaDigital')
    await page.click('#ctl00_MainCentro_btnFacturaDigital')

    //Elegimos opcion de cuenta
    await page.waitForSelector('#ctl00_MainCentro_ddlCuenta')
    await page.select('#ctl00_MainCentro_ddlCuenta', '1.103604771')

    await page.waitFor(3000);
    //Click a Factura
    await page.click('#ctl00_MainCentro_btnFactura')
    
    //Referencia de pago
    await page.waitForSelector('#ctl00_MainCentro_GridView1_ctl02_lblRefpago')
    await page.click('#ctl00_MainCentro_GridView1_ctl02_imgVer')

    //Descargamos factura
    await page.waitForSelector('#ctl00_MainCentro_grvFacturas_ctl02_imgDescargar')
    await page.click('#ctl00_MainCentro_grvFacturas_ctl02_imgDescargar')

    //lupa(search)
    /*await page.waitForXPath('//*[@id="tpi-navbar-item3"]/a');  
    const linkHandlers = await page.$x('//*[@id="tpi-navbar-item3"]/a');  
    await linkHandlers[0].click({button : 'right'})

    await page.waitFor(2000);


    await page.waitForXPath('//*[@id="tpi-navbar-item3-content"]/li[2]/ul/li[3]/ul/li[2]/a');  
    const linkHandlers11 = await page.$x('//*[@id="tpi-navbar-item3-content"]/li[2]/ul/li[3]/ul/li[2]/a');  
    await linkHandlers11[0].click()*/
  }catch(e){
    console.log(error)
  }

 })();