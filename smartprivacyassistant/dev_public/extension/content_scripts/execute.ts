import { MessageType } from '../MessageType';
import { MixedScrapData, ItemScraper, sleep } from 'scraperlib';
import { createOverlay, removeOverlay } from './overlay';

console.log("Smart Privacy assistant extension running... ");

// Scraping the dashboard for data
console.log("Scraping dashboard for data... ");


createOverlay();
var lastScrapeTime : Date;
chrome.storage.sync.get(['datetime'], function(result){
    console.log('Value currently is ' + result);
    console.log(result)
    console.log('Last Scrape time was: ' + result.datetime);
    lastScrapeTime = result.datetime;
})
const itemScraper: ItemScraper = new ItemScraper();
itemScraper.scrape().then(
    async (data: MixedScrapData[]) => {
        console.log("Time of last scrape: " + new Date());
        console.log(data);
        chrome.runtime.sendMessage(data);
        await sleep(5000);
        removeOverlay();
    },
    async (e) => {
        console.log(e);
        console.log('Error in scraping data...');
        await sleep(5000);
        removeOverlay();
    }
)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    if (message === MessageType.GVA_SCRAPE_DATA) {
        console.log("Scraping dashboard for data... ");
    }
})
