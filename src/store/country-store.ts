import {create} from "zustand";
import {getCountryData, getCountryDetail} from "../api/api";
import {Country} from "../types/api-type";

export interface CountryStore {
    countryStateData: Country[],
    countryStateDetails: Country[],
    error: null
    loading: boolean,
    fetchCountry: () => Promise<void>,
    fetchCountryDetail: (country: string) => Promise<void>,
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
}))

export default useCountryStore;