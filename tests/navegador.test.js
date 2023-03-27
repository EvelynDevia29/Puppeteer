
const puppeteer = require('puppeteer')
describe('test en puppeteer', () => {
    it('Debe abrir', async () => {
        const browser = await puppeteer.launch({
            headless: false,
          //  slowMo: 0,
           // devtools:false,
            defaultViewport: null//expanda al tam de la ventana
            // defaultViewport: {
            //     width:2100,
            //     height:1080
            // }

            //args: ['--window-size=1920,1080']// ajusta el tamaño de la ventana
            
        })

        const page = await browser.newPage()
        await page.goto('https://platzi.com')
        await page.waitForSelector('.LogoHeader-name > img:nth-child(1)')
        //await page.waitForTimeout(5000)
        await page.waitForSelector('img') 

        //Navegar a otro sitio
        await page.goto('https://github.com')
        

        //Navegar hacias atras

         await page.goBack()// hacia atras

        //Navegar hacia adelante
         await page.goForward()//hacia adelante
          
        // await page.waitForSelector('img') 

        //Abrir otra pagina
        const page2 = await browser.newPage()
        await page2.goto('https://google.com/') 

        await browser.close()


    }, 350000)
})