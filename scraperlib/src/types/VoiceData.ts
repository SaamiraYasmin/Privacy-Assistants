import { ScrapData } from "./ScrapData";
import { ScrapDataType } from "./ScrapDataType";

class VoiceData extends ScrapData {
    _voiceUrl: string;

    constructor(title: string, description: string, datetime: Date, element: HTMLElement, url: string) {
        super(title, ScrapDataType.Voice, datetime, description, element);
        this._voiceUrl = url;
    }

    extractVoiceFeatures(): any{
        chrome.tabs.create({
            url: this._voiceUrl,
        }, (tab) => {
            // chrome.tabs.remove(tab.id);
        });
    }

    runModel(model: any): void {
        super.runModel(model);
        console.log("Running model on voice data");
        
    }

}

export { VoiceData };