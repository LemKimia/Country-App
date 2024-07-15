import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from "react";
import {StyleSheet, View, Text} from 'react-native';

import Button from "../../components/button";
import CustomListHeaderComponent from "../../components/custom-list-header-component";
import CustomFlatlist from "../../components/custom-flatlist";

import useCountryStore from "../../store/store";

const Homepage = () => {
    const {
        countryStateData,
        fetchCountry,
        keywordForContinent,
        keywordForName,
        setKeywordForContinent,
        setKeywordForName
    } = useCountryStore((state) => state)

    const [showList, setShowList] = useState(true)

    const resetLabel = keywordForContinent || keywordForName ? "Reset List" : "Close List"
    const buttonLabel = showList ? "Show Country" : resetLabel

    useEffect(() => {
        fetchCountry()
    }, []);

    const showListButtonPress = () => {
        if (keywordForName || keywordForContinent) {
            setKeywordForName("")
            setKeywordForContinent("")
        } else {
            setShowList((prevState) => !prevState)
        }
    }

    if (countryStateData.length < 1) {
        return (
            <View style={styles.container}>
                <Text>Something is wrong ;-;</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Button handlePress={showListButtonPress} buttonLabel={buttonLabel}/>
            {!showList &&
                <CustomListHeaderComponent/>}
            <View style={showList ? {height: "auto"} : styles.listContainer}>
                {!showList && (
                    <CustomFlatlist />
                )}
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

export default Homepage

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
