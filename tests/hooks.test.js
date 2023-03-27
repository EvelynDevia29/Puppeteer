const puppeteer = require('puppeteer')

describe('Extraer Informacion', () => {

    let browser
    let page
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,//expanda al tam de la ventana
            //slowMo: 500

        })

        page = await browser.newPage()
        await page.goto('https://platzi.com', { waitUntil: 'networkidle0' })

    },10000)

    afterAll(async () => {
        await browser.close()

    })

    it('Extraer el titulo de la pagina y la url', async () => {
       
        //Ir a la pagina
        

        //Extraer el titulo y la url de la pagina 
        const titulo = await page.title()
        const url = await page.url()
        console.log('titulo', titulo)
        console.log('url', url)

       
    }, 350000)

    it('Extraer la informacion de un elemento', async () => {
       
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > section > button.Button.Button--medium.Button--sky.Button--primary.Nav-header-mobileCtas-actions--login')

        //Funcion que corre el metodo document.querySelector
        //regresa el valor 
        const nombreBoton = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > section > button.Button.Button--medium.Button--sky.Button--primary.Nav-header-mobileCtas-actions--login', (button) => button.textContent)
        console.log('texto del boton', nombreBoton);

        //Regresa un arreglo de los elementos si los encuentra por medio de Xpath
        const [button] = await page.$x('//*[@id="Header-v2"]/nav[1]/section/button[2]')
        
        const propiedad = await button.getProperty('textContent')
        const texto = await propiedad.jsonValue()
        console.log('texto', texto)

        //segunda forma con Xpath
        const texto2 = await page.evaluate((nickname) => nickname.textContent, button)
        console.log('texto2', texto2);

        //tercera forma 
        const button3 = await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/section/button[2]')
        const texto3 = await page.evaluate((nickname) => nickname.textContent, button3)
        console.log('texto3', texto3)


        
    }, 350000)


        it('contar elementos de una pagina', async () => {
                         
            const imagenes = await page.$$eval('img', (imagenes)=> imagenes.length)    
            console.log('imagenes', imagenes)
    
        }, 350000)


    })


