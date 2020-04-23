const assert = require('assert')

describe('Hometask N3(lesson#17)', () => {
it('Part 1', () => {
        browser.url('https://webdriver.io/docs/api.html')
        
        const docsButton = $('a[href="/docs/gettingstarted.html"]')
        const helpButton = $('li a[href="/docs/gettingstarted.html"]')
        const blogButton = $('[href="/blog/"]')
        const editButton = $('.edit-page-link')
        const rightSidebar = $('//ul[@class="toc-headings"]//li//a[@href="#contribute"]')
        const apiumButton = $('a[href="http://appium.io"]')
        const legacyLink = $('//*[text()="legacy docs websites"]')
        const textParagraph = $('//p[contains(text(),"documentation")]')     
        
        const leftSidebar_Introduction = $('//h3[contains(text(),"Introduction")]')  
        const leftSidebar_APIDocs = $('a[href="/docs/api.html"]')
        const leftSidebar_Protocols = $('//h3[contains(text(),"Protocols")]')
        const leftSidebar_webdriverProtocol = $('//a[text()="Webdriver Protocol"]')
        
    })

    it('Part 2', () => {
        browser.url('https://webdriver.io/docs/api.html')
        
        const footerDivL_title = $('//footer//div[1]//h5')
        const footerDivL_gettingStarted = $('//footer//div[1]//a[1]')
        const footerDivL_APIRef = $('//*[@href and contains(text(),"API Reference")]')
        const footerDivL_contribute = $('//*[@href and contains(text(),"Contribute")]')
        const footerDivL_help = $('//footer//div[1]//a[last()]')

        const footerDivC_title = $('//footer//div[2]//h5')
        const footerDivC_stackOverflow = $('//*[@href="https://stackoverflow.com/questions/tagged/webdriver-io" or contains(text(),"Stack Overflow")]')
        const footerDivC_support = $('//footer//div[2]//a[2]')
        const footerDivC_slack = $('//footer//div[2]//a[3]')
        const footerDivC_twitter = $('//footer//div[2]//a[4]')

        const footerDivR_title = $('//footer//div[3]//h5')
        const footerDivR_blog = $('//footer//div[3]//a[1]')
        const footerDivR_github = $('//footer//div[3]//a[2]')
        
    })
})