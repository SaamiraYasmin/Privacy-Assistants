import { LinkData, MixedScrapData } from "../types";
import { Scraper } from "./Scraper";
import config from '../config.json';
import { LocationData } from "../types/LocationData";
import { VoiceData } from "../types/VoiceData";
import { sleep, parseDate } from "../utils";
import Meyda, { MeydaSignal } from "meyda";

class ItemScraper implements Scraper {
    async scrape(): Promise<MixedScrapData[]> {

        const items: NodeListOf<Element> = document.querySelectorAll('[role="listitem"]');

        const dataCollection: MixedScrapData[] = [];

        for (var i: number = 0; i < items.length; i++) {
            await this.openDetailsDialog(items[i]);
        }
        await sleep(6000);

        const dialogs: HTMLCollectionOf<Element> = document.getElementsByClassName(config.google.class.detail.dialog);
        for (var i: number = 0; i < dialogs.length; i++) {
            try {
                const dialog: Element = dialogs[i];
                const itemData: MixedScrapData = await this.getDataFromDialog(dialog);
                dataCollection.push(itemData);
                await this.closeDetailsDialog(dialog);
            }
            catch (e) {
                console.log(e);
                return e;
            }
        }

        return dataCollection;
    }

    async getDataFromDialog(dialog: Element): Promise<MixedScrapData> {
        try {
            const sections: HTMLCollectionOf<Element> = dialog.getElementsByClassName(config.google.class.detail.section);

            var collectedData: MixedScrapData = await this.getDialogTitle(sections[0]);
            collectedData = await this.getDialogDetails(sections[1], collectedData);

            return collectedData;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async getDialogTitle(element: Element): Promise<MixedScrapData> {
        try {
            const titleElement: Element = element.getElementsByClassName(config.google.class.detail.sectionTitle.title)[0];
            const title = titleElement.textContent;

            var collectedData: MixedScrapData = new MixedScrapData(title, "", new Date(), element.parentElement);

            const anchorLinkElements: HTMLCollectionOf<HTMLAnchorElement> = element.getElementsByTagName("a");
            for (var i: number = 0; i < anchorLinkElements.length; i++) {
                collectedData.push(new LinkData(anchorLinkElements[i].textContent, "", new Date(), anchorLinkElements[i], anchorLinkElements[i].href));
            }

            return collectedData;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async getDialogDetails(element: Element, collectedData: MixedScrapData): Promise<MixedScrapData> {
        try {
            const detailItems: HTMLCollectionOf<Element> = element.getElementsByClassName(config.google.class.detail.sectionDetail.item);

            for (var i: number = 0; i < detailItems.length; i++) {
                const item: Element = detailItems[i];
                const sectionDiff: Element = item.getElementsByClassName(config.google.class.detail.sectionDetail.itemDiff)[0];
                switch (sectionDiff.innerHTML) {
                    case "event":
                        const date: Date = await this.getDate(item);
                        collectedData._datetime = date;
                        collectedData.forEach((value) => { value._datetime = date });
                        break;
                    case "keyboard_voice":
                        var voiceData: VoiceData = await this.getVoiceData(item);
                        voiceData._title = collectedData._title;
                        voiceData._description = collectedData._description;
                        voiceData._datetime = collectedData._datetime;
                        collectedData.push(voiceData);
                        break;
                    case "location_on":
                        var locationData: LocationData = await this.getLocationData(item);
                        locationData._title = collectedData._title;
                        locationData._description = collectedData._description;
                        locationData._datetime = collectedData._datetime;
                        collectedData.push(locationData);
                        break;
                    default:
                        break;
                }

            }

            return collectedData;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async getDate(element: Element): Promise<Date> {
        try {
            const dateElement: Element = element.getElementsByClassName(config.google.class.detail.sectionDetail.itemDesc)[0];
            const dateTimeDesc: String = dateElement.innerHTML;
            var date: Date = await parseDate(dateTimeDesc);
            return date;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async getVoiceData(element: Element): Promise<VoiceData> {
        try {
            const voiceElement: HTMLMediaElement = element.getElementsByClassName(config.google.class.detail.sectionDetail.voice)[0] as HTMLMediaElement;
            const voiceAudioUrl: string = voiceElement.getAttribute("data-audio-url");

            
            fetch(chrome.runtime.getURL("sample.mp3")).then(response => response.arrayBuffer()).then((buffer) => {
                console.log(buffer);
                var audioContext = new AudioContext();
                // var mfccFeatures = Meyda.extract(['zcr', 'mfcc'], buffer);
                audioContext.decodeAudioData(buffer, (data) => {
                    console.log(data);
                    console.log(data.getChannelData(0));
                    Meyda.extract(['zcr', 'mfcc'], data.getChannelData(0));
                })
            })
            
            const audio = new Audio(voiceAudioUrl);
            document.body.appendChild(audio);
            const audioContext = new AudioContext();
            const source = audioContext.createMediaElementSource(audio);
            source.connect(audioContext.destination);
            
            if (typeof Meyda === "undefined") {
                console.log("Meyda could not be found! Have you included it?");
            } else {
                const analyzer = Meyda.createMeydaAnalyzer({
                    audioContext: audioContext,
                    source: source,
                    bufferSize: 512,
                    featureExtractors: ["spectralSpread", "mfcc", "energy"],
                    callback: (features: any) => {
                        console.log(voiceAudioUrl);
                        console.log(features);
                    },
                });
                analyzer.start();
            }
            audio.crossOrigin = 'anonymous';
            audio.muted = true;
            audio.play();

            return new VoiceData("", "", new Date(), voiceElement as HTMLElement, voiceAudioUrl);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async getLocationData(element: Element): Promise<LocationData> {
        try {
            const locationMapElement: Element = element.getElementsByClassName(config.google.class.detail.sectionDetail.location)[0];
            const hyperref: HTMLAnchorElement = locationMapElement.getElementsByTagName('a')[0];
            return new LocationData("", "", new Date(), hyperref, hyperref.href);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async openDetailsDialog(item: Element): Promise<void> {
        try {
            const detail: HTMLCollectionOf<Element> = item.getElementsByClassName(config.google.class.detail.open);
            (detail[0] as HTMLElement).click();
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    async closeDetailsDialog(dialog: Element): Promise<void> {
        try {
            const exit: Element = dialog.querySelector('[aria-label="Close this dialog"]');
            (exit as HTMLElement).click();
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

}

export { ItemScraper };