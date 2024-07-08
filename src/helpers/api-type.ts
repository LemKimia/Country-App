export interface Country {
    name: {
        common: string;
        official: string;
    };
    capital: string;
    continents: string;
    region: string;
    subregion: string;
    flags: {
        png: string;
        alt: string;
    };
    population: number;
}
