import {create} from "zustand";
import {getCountryData} from "../helpers/api";
import {Country} from "../helpers/api-type";

interface CountryStore {
    countryStateData: Country[],
    error: null
    fetchCountry: () => Promise<void>,
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
}))

export default useCountryStore;