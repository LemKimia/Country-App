import {create} from "zustand";
import {getCountryData} from "../helpers/api";
import {Country} from "../helpers/api-type";

interface CountryStore {
    countryData: Country[],
    error: null
    fetchCountry: () => Promise<void>,
}

const useCountryStore = create<CountryStore>((set) => ({
    countryData: [],
    error: null,
    fetchCountry: async () => {
        try {
            const response = await getCountryData()
            set({countryData: response, error: null})
        } catch (error: any) {
            set({error: error.message})
        }
    },
}))

export default useCountryStore;