export interface Country {
    area: number;
    capital: string[];
    continents: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    languages: {
        [key: string]: string;
    };
    latlng: number[];
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    name: {
        common: string;
        official: string;
    };
    population: number;
    region: string;
    subregion: string;
    tld: string[];
    timezones: string[];
}


export interface Favourite {
    flags: string,
    name: string
}
