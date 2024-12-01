import { ScrapData } from "./ScrapData";
import { ScrapDataType } from "./ScrapDataType";

class LocationData extends ScrapData {
    _locationUrl: string;

    constructor(title: string, description: string, datetime: Date, element: HTMLAnchorElement, url: string) {
        super(title, ScrapDataType.Location, datetime, description, element);
        this._locationUrl = url;
    }
}

export { LocationData };