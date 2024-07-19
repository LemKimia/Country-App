// import { create } from "zustand";
// import { combine } from "zustand/middleware";
//
// import useCountryStore from './country-store';
// import useFavoriteStore from "./favorite-store";
// import useKeywordStore from "./keyword-store";
//
// import { Country, Favourite } from "../types/api-type";
//
// export interface AllStore {
//     countryStateData: Country[],
//     countryStateDetails: Country[],
//     error: string | null,
//     loading: boolean,
//     fetchCountry: () => Promise<void>,
//     fetchCountryDetail: (country: string) => Promise<void>,
//     favouriteCountry: Favourite[],
//     addFavouriteCountry: (name: string, flag: string) => void,
//     removeFavouriteCountry: (selectedItem: string) => void,
//     keywordForName: string,
//     keywordForContinent: string,
//     setKeywordForName: (selectedItem: string) => void,
//     setKeywordForContinent: (selectedItem: string) => void,
// }
//
// const useAllStores = create<AllStore>(
//     combine(
//         {
//             // Initial state of combined store
//             countryStateData: [],
//             countryStateDetails: [],
//             error: null,
//             loading: false,
//             favouriteCountry: [],
//             keywordForName: '',
//             keywordForContinent: '',
//         },
//         (set, get) => ({
//             // Combining state from each individual store
//             ...useCountryStore.getState(),
//             ...useFavoriteStore.getState(),
//             ...useKeywordStore.getState(),
//             // Ensure to redefine methods to prevent conflicts
//             fetchCountry: async () => {
//                 set({ loading: true });
//                 try {
//                     const response = await getCountryData();
//                     set({ countryStateData: response, error: null });
//                 } catch (error: any) {
//                     set({ error: error.message });
//                 } finally {
//                     set({ loading: false });
//                 }
//             },
//             fetchCountryDetail: async (country: string) => {
//                 set({ loading: true });
//                 try {
//                     const response = await getCountryDetail(country);
//                     set({ countryStateDetails: response, error: null });
//                 } catch (error: any) {
//                     set({ error: error.message });
//                 } finally {
//                     set({ loading: false });
//                 }
//             },
//             addFavouriteCountry: (name: string, flag: string) => {
//                 set((state) => ({
//                     favouriteCountry: [...state.favouriteCountry, { name, flags: flag }],
//                 }));
//             },
//             removeFavouriteCountry: (selectedItem: string) => {
//                 set((state) => ({
//                     favouriteCountry: state.favouriteCountry.filter(favourite => favourite.name !== selectedItem),
//                 }));
//             },
//             setKeywordForName: (selectedItem: string) => {
//                 set({ keywordForName: selectedItem });
//             },
//             setKeywordForContinent: (selectedItem: string) => {
//                 set({ keywordForContinent: selectedItem });
//             }
//         })
//     )
// );
//
// export default useAllStores;
