import {create} from "zustand";
import {Favourite} from "../types/api-type";

export interface FavoriteStore {
    favouriteCountry: Favourite[],
    addFavouriteCountry: (name: string, flag: string) => void,
    removeFavouriteCountry: (selectedItem: string) => void,
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
    favouriteCountry: [],
    addFavouriteCountry: (name: string, flags: string) => {
        set((state) => ({
            favouriteCountry: [...state.favouriteCountry, {name, flags}],
        }))
    },
    removeFavouriteCountry: (selectedItem) => {
        set((state) => ({
            favouriteCountry: state.favouriteCountry.filter(favourite => favourite.name !== selectedItem)
        }))
    },
}))

export default useFavoriteStore;