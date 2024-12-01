import { MessageType } from '../MessageType';
import { LinkData, LocationData, MixedScrapData, ScrapData, ScrapDataType, VoiceData } from 'scraperlib';
import { xgboostWASM, loadXGBoost, XGBoost } from 'ml-xgboost';
import { XGBoostModelAPI } from './model';
import { plainToClass } from 'class-transformer';

declare global {
    var data: MixedScrapData[] | null;
    var installationDone: boolean;
}

const typeToClass  = {
    [ScrapDataType.Mixed]: MixedScrapData,
    [ScrapDataType.Link]: LinkData,
    [ScrapDataType.Location]: LocationData,
    [ScrapDataType.Voice]: VoiceData
}

globalThis.data = [];
globalThis.installationDone = true;

var dashboardTab: chrome.tabs.Tab;
var extensionTab: chrome.tabs.Tab;

var maxScrapeTime: Date;

var modelAPI = new XGBoostModelAPI();

chrome.runtime.onInstalled.addListener(function () {
    globalThis.installationDone = false;
    chrome.tabs.create({
        url: chrome.extension.getURL('index.html'),
        active: true
    });
})

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: chrome.extension.getURL('index.html'),
        selected: true,
    }, (exTab) => {
        extensionTab = exTab;
    });
    dashboardTab = tab;
    chrome.tabs.sendMessage(tab.id!, MessageType.GVA_SCRAPE_DATA);
});


chrome.runtime.onMessage.addListener((message: MixedScrapData[], sender, sendResponse) => {
    globalThis.data = message || null;
    if (globalThis.data != null) {
        for (var i = 0; i < globalThis.data.length; i++) {
            var data = globalThis.data[i];
            var date = new Date(data._datetime);
            globalThis.data[i] = plainToClass(MixedScrapData, data);
            for (var j = 0; j < globalThis.data[i]._data.length; j++){
                var subdata = globalThis.data[i]._data[j];
                
            }
            globalThis.data[i]._datetime = date;

        }

        console.log(globalThis.data);

        for (var i = 0; i < globalThis.data.length; i++){
            globalThis.data[i].runModel(modelAPI);
        }

        console.log(globalThis.data);

        chrome.storage.local.set({ datetime: new Date() }, function () {
            console.log('Page scraped on ' + new Date());
        })
        chrome.storage.local.set({ data: message }, function () {
            console.log('Stored data in the key data');
        });

        chrome.browserAction.setBadgeBackgroundColor({ color: '#F00' }, () => {
            chrome.browserAction.setBadgeText({ text: 'ON' });
        });

        chrome.tabs.create({
            url: chrome.extension.getURL('index.html'),
            selected: true,
        });
    }
});