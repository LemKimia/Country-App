import {FlatList, ListRenderItem} from 'react-native'
import CountryCard from "./country-card";
import useCountryStore from "../store/store";
import {useCallback} from "react";
import {Country} from "../helpers/api-type";

const CustomFlatlist = () => {
    const {
        countryStateData,
        keywordForContinent,
        keywordForName
    } = useCountryStore((state) => state);

    const filteredCountryData = countryStateData.filter(country => {
        const matchesContinent = keywordForContinent === "" ||
            country.continents.toString().toLocaleLowerCase().includes(keywordForContinent.toLocaleLowerCase());
        const matchesName = keywordForName === "" ||
            country.name.common.toString().toLocaleLowerCase().includes(keywordForName.toLocaleLowerCase())
        return matchesContinent && matchesName
    })

    const renderItem: ListRenderItem<Country> = useCallback(({item}) => <CountryCard country={item}/>, [])
    const keyExtractor = useCallback((item: Country) => item.name.common, [])

    return (
        <FlatList
            data={filteredCountryData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            key={2}
            numColumns={2}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={20}
            updateCellsBatchingPeriod={50}
            removeClippedSubviews={true}
            onEndReachedThreshold={0.5}
        />
    )
}

export default CustomFlatlist
