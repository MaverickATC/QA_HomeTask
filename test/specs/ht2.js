const assert = require('assert')

describe('Hometask N2', () => {
    it('Open new tab, make screenshot, move to twitter link, click on Blog', () => {
        browser.url('https://webdriver.io/docs/api.html')
        
        browser.newWindow($('//*[text()="JSONWire protocol"]').getAttribute('href'))
        console.log("Element is displayed : " + $('strong a[href="/SeleniumHQ/selenium/wiki"]').isDisplayed());
        browser.switchWindow('https://webdriver.io/docs/api.html')

        browser.waitUntil(
            () => $('.postHeaderTitle').getText() === "API Docs",
            {
                timeout: 5000,
                timeoutMsg: "Header title should become 'API Docs'"
            }
        );
        browser.saveScreenshot('./screenshots/title.png');
        
        const linkToTwitter = $('[href="https://twitter.com/webdriverio"]')
        console.log("Link to Twitter is displayed: " + linkToTwitter.isDisplayed());
        console.log("Link to Twitter is displayed in viewport: " + 
                    linkToTwitter.isDisplayedInViewport());
        linkToTwitter.scrollIntoView();            
        console.log("Link to Twitter is displayed in viewport: " + 
                    linkToTwitter.isDisplayedInViewport());
                    
        console.log("Blog is focused: " + $('[href="/blog/"]').isFocused());
        $('[href="/blog/"]').click();
        console.log("Blog after click is focused: " + $('[href="/blog/"]').isFocused());

    })
})