import { ScrapData } from "./ScrapData";
import { ScrapDataType } from "./ScrapDataType";

class LinkData extends ScrapData {
    _url: string;

    constructor(title: string, description: string, datetime: Date, element: HTMLAnchorElement, url: string) {
        super(title, ScrapDataType.Link, datetime, description, element);
        this._url = url;
    }
}

export { LinkData };