import { ScrapData } from "../types/ScrapData";

interface Scraper {
    scrape(): Promise<ScrapData[]>;
}

export { Scraper };