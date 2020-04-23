const assert = require('assert')

describe('Hometask N1', () => {
    it('API button click, print url, print title text, work with search input', () => {
        browser.url('https://webdriver.io')
        const apiButton = $('li a[href="/docs/api.html"]')
        apiButton.click()
        console.log("Current url: " + browser.getUrl());

        const apiPageTitle = $('.postHeaderTitle')
        console.log("API page title: " + apiPageTitle.getText()) ;

        const link = $('//*[text()="JSONWire protocol"]')
        console.log("Link href: " + link.getAttribute('href'));

        let searchInput = $('#search_input_react')
        searchInput.setValue("test is ")

        searchInput.addValue("DONE!")

        browser.pause(5000)

    })
})