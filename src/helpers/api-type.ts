export interface Country {
    capital: string;
    continents: string;
    flags: {
        png: string;
        alt: string;
    };
    idd: {
        root: string;
    }
    name: {
        common: string;
        official: string;
    };
    population: number;
    region: string;
    subregion: string;
}
