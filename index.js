const puppeteer = require('puppeteer');
const CRED_PATH = require ('/root/credentialsloginpersonal.json');



(async () => {

 
    const browser = await puppeteer.launch({ headless: true,args:
    ['--start-maximized',
    '--no-sandbox', 
    '--disable-setuid-sandbox',] })
    const page = await browser.newPage()
    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/root/Facturas-personal/PDF'});
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

    browser.close();

    process.exit();





    
 })();