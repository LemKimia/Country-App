import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from "react";
import {StyleSheet, View, FlatList, Text} from 'react-native';

import Button from "../components/button";
import CountryCard from "../components/country-card";
import CustomListHeaderComponent from "../components/custom-list-header-component";

import useCountryStore from "../store/store";

export default function Homepage() {
    const [showList, setShowList] = useState(true)
    const [keywordForName, setKeywordForName] = useState('')
    const [keywordForContinent, setKeywordForContinent] = useState('')

    const resetLabel = keywordForContinent || keywordForName ? "Reset List" : "Close List"
    const buttonLabel = showList ? "Show Country" : resetLabel

    const {countryStateData, fetchCountry} = useCountryStore((state) => state)

    useEffect(() => {
        fetchCountry()
    }, []);

    const handlePress = async () => {
        if (keywordForName || keywordForContinent) {
            setKeywordForName("")
            setKeywordForContinent("")
        } else {
            setShowList((prevState) => !prevState)
        }
    }

    const filteredCountryData = countryStateData.filter(country => {
        const matchesContinent = keywordForContinent === "" ||
            country.continents.toString().toLocaleLowerCase().includes(keywordForContinent.toLocaleLowerCase());
        const matchesName = keywordForName === "" ||
            country.name.common.toString().toLocaleLowerCase().includes(keywordForName.toLocaleLowerCase())
        return matchesContinent && matchesName
    })

    if (countryStateData.length < 1) {
        return (
            <View style={styles.container}>
                <Text>Something is wrong ;-;</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Button handlePress={handlePress} buttonLabel={buttonLabel}/>
            {!showList &&
                <CustomListHeaderComponent
                    keywordForName={keywordForName}
                    keywordForContinent={keywordForContinent}
                    setKeywordForName={setKeywordForName}
                    setKeywordForContinent={setKeywordForContinent}
                />}
            <View style={showList ? {height: "auto"} : styles.listContainer}>
                {!showList && (
                    <FlatList
                        data={filteredCountryData}
                        renderItem={({item}) => (
                            <CountryCard country={item}/>
                        )}
                        keyExtractor={(item) => item.name.common}
                        key={2}
                        numColumns={2}
                    />
                )}
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3F4F4',
    },
    listContainer: {
        width: 350,
        height: "70%"
    }
});
