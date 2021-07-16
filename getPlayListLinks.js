import puppeteer from 'puppeteer';

// retrieves playlist video links
export default async function getPlayListLinks(playslist_link) {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    let links = [];

    try {
        await page.goto(playslist_link);

        links = await page.$$eval('#video-title', (a_tags) =>
            a_tags.map((a_tag) => {
                return a_tag.href;
            })
        );
    } catch (ex) {
        console.log(ex);
    } finally {
        setTimeout(async () => {
            await browser.close();
        }, 5000);
    }

    return links;
}
