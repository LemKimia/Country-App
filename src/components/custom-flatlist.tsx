import {FlatList, ListRenderItem, RefreshControl} from 'react-native'
import CountryCard from "./country-card";
import useCountryStore from "../store/country-store";
import React, {useCallback} from "react";
import {Country} from "../types/api-type";
import useKeywordStore from "../store/keyword-store";

const CustomFlatlist = () => {
    const {countryStateData} = useCountryStore((state) => state);
    const {
        keywordForContinent,
        keywordForName
    } = useKeywordStore((state) => state);

    const [refreshing, setRefreshing] = React.useState(false);

    const filteredCountryData = countryStateData.filter(country => {
        const matchesContinent = keywordForContinent === "" ||
            country.continents.toString().toLocaleLowerCase().includes(keywordForContinent.toLocaleLowerCase());
        const matchesName = keywordForName === "" ||
            country.name.common.toString().toLocaleLowerCase().includes(keywordForName.toLocaleLowerCase())
        return matchesContinent && matchesName
    })

    const renderItem: ListRenderItem<Country> = useCallback(({item}) => <CountryCard country={item}/>, [])
    const keyExtractor = useCallback((item: Country) => item.name.common, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [setRefreshing]);

    return (
        <FlatList
            data={filteredCountryData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            key={2}
            numColumns={2}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={20}
            updateCellsBatchingPeriod={50}
            removeClippedSubviews={true}
            onEndReachedThreshold={0.5}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    )
}

export default CustomFlatlist
