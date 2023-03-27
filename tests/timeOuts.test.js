const puppeteer = require('puppeteer')

describe('Tipos de espera', () => {

    const newLocal = jest.setTimeout(15000)

    it('tipos de timeout', async () => {
        
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,//expanda al tam de la ventana
           // slowMo: 500 // HACE LA PRUEBA MAS LENTA

        })

        const page = await browser.newPage()
        page.setDefaultTimeout(10000)
        page.setDefaultNavigationTimeout(10000)

        //Espera para el Navegador
        await page.goto('https://platzi.com', { waitUntil: 'networkidle0' })
        
        await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'networkidle2' })
        
        await page.click('#showSmallModal')
        await page.waitForSelector('#showSmallModal', { visible: true})
        
        await page.click('#closeSmallModal')
        
        await browser.close()

 

    })

    

})
