import {create} from "zustand";
import {getCountryData, getCountryDetail} from "../helpers/api";
import {Country} from "../helpers/api-type";

interface CountryStore {
    countryStateData: Country[],
    countryStateDetails: Country[],
    error: null
    loading: boolean,
    fetchCountry: () => Promise<void>,
    fetchCountryDetail: (country: string) => Promise<void>,
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
    countryStateDetails: [],
    loading: false,
    error: null,
    fetchCountry: async () => {
        set({loading: true})
        try {
            const response = await getCountryData()
            set({countryStateData: response, error: null})
        } catch (error: any) {
            set({error: error.message})
        } finally {
            set({loading: false})
        }
    },
    fetchCountryDetail: async (country: string) => {
        set({loading: true})
        try {
            const response = await getCountryDetail(country)
            set({countryStateDetails: response, error: null})
        } catch (error: any) {
            set({error: error.message})
        } finally {
            set({loading: false})
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