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
    favouriteCountry: string[],
    addFavouriteCountry: (selectedItem: string) => void,
    removeFavouriteCountry: (selectedItem: string) => void,
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
    favouriteCountry: [],
    addFavouriteCountry: (selectedItem) => {
        set((state) => ({
            favouriteCountry: [...state.favouriteCountry, selectedItem]
        }))
    },
    removeFavouriteCountry: (selectedItem) => {
        set((state) => ({
            favouriteCountry: state.favouriteCountry.filter(favourite => favourite !== selectedItem)
        }))
    },
}))

export default useCountryStore;