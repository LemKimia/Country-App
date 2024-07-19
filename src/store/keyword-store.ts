import {create} from "zustand";

export interface KeywordStore {
    keywordForName: string,
    keywordForContinent: string,
    setKeywordForName: (selectedItem: string) => void,
    setKeywordForContinent: (selectedItem: string) => void,
}

const useKeywordStore = create<KeywordStore>((set) => ({
    keywordForName: '',
    keywordForContinent: '',
    setKeywordForName: (selectedItem) => {
        set(({keywordForName: selectedItem}))
    },
    setKeywordForContinent: (selectedItem) => {
        set(({keywordForContinent: selectedItem}))
    },
}))

export default useKeywordStore;