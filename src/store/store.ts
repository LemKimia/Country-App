import {create} from "zustand";
import {getCountryData} from "../helpers/api";
import {Country} from "../helpers/api-type";

interface CountryStore {
    countryStateData: Country[],
    error: null
    fetchCountry: () => Promise<void>,
    keywordForName: string,
    keywordForContinent: string,
    setKeywordForName: (selectedItem: string) => void,
    setKeywordForContinent: (selectedItem: string) => void,
    favouriteCountry: string,
    setFavouriteCountry: (selectedItem: string) => void,
}

const useCountryStore = create<CountryStore>((set) => ({
    countryStateData: [],
    error: null,
    fetchCountry: async () => {
        try {
            const response = await getCountryData()
            set({countryStateData: response, error: null})
        } catch (error: any) {
            set({error: error.message})
        }
    },
    keywordForName: '',
    keywordForContinent: '',
    setKeywordForName: (selectedItem) => {
        set(({keywordForName: selectedItem}))
    },
    setKeywordForContinent: (selectedItem) => {
        set(({keywordForContinent: selectedItem}))
    },
    favouriteCountry: '',
    setFavouriteCountry: (selectedItem) => {
        set(({favouriteCountry: selectedItem}))
    }
}))

export default useCountryStore;