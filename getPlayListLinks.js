import puppeteer from 'puppeteer';

export default async function getPlayListLinks() {
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    let links = [];
    try {
        await page.goto(
            'https://www.youtube.com/playlist?list=PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU'
        );

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

// getPlayListLinks().then((links) => console.log(links));
