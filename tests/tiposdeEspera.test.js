const puppeteer = require('puppeteer')

describe('Tipos de espera', () => {

    it('Mostrar todos los diferentes tipos de espera', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,//expanda al tam de la ventana
           // slowMo: 500 // HACE LA PRUEBA MAS LENTA

        })

        const page = await browser.newPage()

        //Espera para el Navegador
        await page.goto('https://platzi.com', { waitUntil: 'networkidle0' })

        //Espera explicita await page.waitForTimeout(3000)   

        // await new Promise(r => setTimeout(r, 3000));

        //Espera por un CSS Selector
        // await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Logo > div > a > div > figure > img')

        // Espera por un Xpath
        await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/div[1]/div/a/div/figure/img')
        
        await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'networkidle2' })
        
        //Validar que un elemento este visible
        //validar que este visible algun elemento
        await page.click('#showSmallModal')
        await page.waitForSelector('#showSmallModal', { visible: true})
       // await page.waitForXPath('//*[@id="showSmallModal"]', { visible : true})

        //ESPERA POR FUNCION
        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm'))
        
        // EJEMPLO PARA OBSERVAR EL VIEWPORT
       // const observaResize = page.waitForFunction('window.innerWidth < 100')
       // await page.setViewport({width: 50, height: 50})
       // await observaResize

        await page.click('#closeSmallModal')
       await browser.close()



    }, 350000)
})
//
//await page.waitForTimeout(3000) reemplace con await new Promise(r => setTimeout(r, 3000));