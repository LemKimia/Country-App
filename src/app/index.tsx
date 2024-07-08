import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from "react";
import {StyleSheet, View, FlatList} from 'react-native';

import Button from "../components/button";
import CountryCard from "../components/country-card";

import {getCountryData} from "../helpers/api";
import {Country} from "../helpers/api-type";
import CustomListHeaderComponent from "../components/custom-list-header-component";

export default function Homepage() {
    const [data, setData] = useState<Country[]>([])
    const [showList, setShowList] = useState(true)
    const [keyword, setKeyword] = useState('')
    const buttonLabel = showList ? "Show Country" : "Close List"

    const getCountry = async () => {
        try {
            const response = await getCountryData()

            setData(response)

        } catch (error: any) {
            alert(error.message)
        }
    }
    const handlePress = async () => {
        setShowList((prevState) => !prevState)
    }

    const filteredCountryData = keyword === '' ? data : data.filter(country => (
        country.continents.toString().toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    ))

    useEffect(() => {
        getCountry()

    }, [])

    return (
        <View style={styles.container}>
            <Button handlePress={handlePress} buttonLabel={buttonLabel}/>
            {!showList && <CustomListHeaderComponent keyword={keyword} setKeyword={setKeyword}/>}
            <View style={showList ? {height: "auto"} : styles.listContainer}>
                {!showList && (
                    <FlatList
                        data={filteredCountryData}
                        renderItem={({item}) => (
                            <CountryCard country={item}/>
                        )}
                        keyExtractor={(item) => item.name.official}
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
