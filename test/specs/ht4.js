/* Testcases */

/* TC #1 
Title: search on github invalid string

Go to https://github.com
Add string "okmnji" to search
Click on search with offset to fit search button
Find h3 "We couldn’t find any repositories matching 'okmnji'" is displayed

Expected result: If h3 found print "Search is correct"
*/
/* TC #2
Title: Check if click on Team button transfers to apropriate page

Go to https://github.com
Click on Team button
If tab title contains "Build like the best teams on the planet" print true 

Expected result: printed Page is correct in console
*/
/* TC #3
Title: Check if click on Try GitHubFree button transfers to Create account page

Go to https://github.com
Scroll to GitHubFree button
Click on GitHubFree button

Expected result: h1 "Create your account" is displayed
*/
/* TC #4
Title: Check if username checking is working

Go to https://github.com
Scroll to input(id="user[login]-footer")
Set value "MaverickATC" 
Click "Sign up for GitHub" button
Expected result: message "Username MaverickATC is not available" is displayed as true in console
*/
/* TC #5
Title: Check if GithubIcon opens page in new tab correctle

Go to https://github.com
Scroll to a[href="https://github.com/github"]
Open new tab with a[href="https://github.com/github"] url

Expected result: print TRUE if new tab url === https://github.com/github
*/

describe('Hometask N4', () => {
    it('TC1', () => {
        browser.url('https://github.com')
        
        let search = $('input[placeholder="Search GitHub"]')
        search.addValue("okmnji");
        search.click();
        search.click({ y: 50 });

        const header = $('//div[@class="blankslate"]//h3')
        if(header.getText() === "We couldn’t find any repositories matching 'okmnji'")
        {
            console.log("Search is correct");
        }
    })

    it('TC2', () => {
        browser.url('https://github.com')
        
        $('a[href="/team"]').click();

        if(browser.getTitle().includes("Build like the best teams on the planet"))
        {
            console.log("Page is correct");
        }
    })

    it('TC3', () => {
        browser.url('https://github.com')
        
        const button = $('//*[text()="Try GitHub Free"]')
        button.scrollIntoView()
        button.click();

        const title = $('//h1[contains(text(),"Create your account")]')
        title.isDisplayed();

    })

    it('TC4', () => {
        browser.url('https://github.com')
        
        const input = $('input[placeholder="Pick a username"')
        input.scrollIntoView()
        input.setValue("MaverickATC");

        $('[data-ga-click="Signup, Attempt, location:teams;"]').click();

        console.log($('//*[text()="Username is not available"]').isDisplayed());

    })

    it('TC5', () => {
        browser.url('https://github.com')
        
        const link = $('a[href="https://github.com/github"]')
        link.scrollIntoView();
        browser.newWindow(link.getAttribute("href"));
        
        if(browser.getUrl() === "https://github.com/github")
        {
            console.log("TRUE");
        }

    })
})