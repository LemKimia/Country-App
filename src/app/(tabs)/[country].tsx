// noinspection JSIgnoredPromiseFromCall

import {View, Text, Pressable, StyleSheet, Image, ScrollView} from 'react-native';
import {useEffect} from "react";

import {useLocalSearchParams} from 'expo-router'
import useCountryStore from "../../store/store";
import FavouriteButton from "../../components/favourite-button";
import SectionHeaderText from "../../components/section-header-text";

const CountryDetail = () => {
    const {
        countryStateDetails,
        fetchCountryDetail,
        loading,
    } = useCountryStore((state) => state)

    const {country} = useLocalSearchParams() as { country: string }

    useEffect(() => {
        fetchCountryDetail(country)
    }, [country])

    const countryNameDetailPopup = () => {
        countryStateDetails && countryStateDetails.length > 1
            ? alert(`The Country ${countryStateDetails[0].name.common} is officially known as ${countryStateDetails[0].name.official}`)
            : alert(`Routes to ${country} are long and wide`)
    }

    // Conditional component rendering to check for loading state and error
    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading . . .</Text>
            </View>
        )
    }

    if (!countryStateDetails || countryStateDetails.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>ERROR</Text>
            </View>
        )
    }

    if (countryStateDetails[0].name.common !== country) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Please Wait</Text>
            </View>
        )
    }

    // noinspection com.intellij.reactbuddy.ArrayToJSXMapInspection
    return (
        <ScrollView style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Pressable onPress={countryNameDetailPopup}>
                        <Text style={styles.countryText}>{countryStateDetails[0].name.common}</Text>
                    </Pressable>
                    <Image
                        src={countryStateDetails[0].flags.png}
                        alt={countryStateDetails[0].flags.alt}
                        style={styles.countryImage}
                    />
                    <FavouriteButton/>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Basic Information</SectionHeaderText>
                    <Text>Official Name : {countryStateDetails[0].name.official}</Text>
                    <Text>Region : {countryStateDetails[0].region}</Text>
                    <Text>Capital : {countryStateDetails[0].capital}</Text>
                    <Text>Population : {countryStateDetails[0].population}</Text>
                    <Text>Area : {countryStateDetails[0].area}. km2</Text>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Code and Symbol</SectionHeaderText>
                    <Text>Top-Level Domain : {countryStateDetails[0].tld}</Text>
                    <Text>Currency : {Object.entries(countryStateDetails[0].currencies).map(
                        ([currencyCode, currency]) => (
                            <Text key={currencyCode}>{`${currency.name} (${currency.symbol})`}</Text>
                        )
                    )}</Text>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Language</SectionHeaderText>
                    <Text>Official Language : {Object.entries(countryStateDetails[0].languages).map(
                        ([languageKey, language]) => (
                            <Text key={languageKey}>{language}</Text>
                        )
                    )}</Text>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Geographical Information</SectionHeaderText>
                    <Text>Coordinates : {countryStateDetails[0].latlng}</Text>
                    <Text>Timezone : {countryStateDetails[0].timezones}</Text>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Maps</SectionHeaderText>
                    <Text>Maps : {countryStateDetails[0].maps.googleMaps}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default CountryDetail;

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#E3F4F4',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 10
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    informationContainer: {
        width: '75%',
        flex: 1,
        justifyContent: "center",
        gap: 10,
        marginVertical: 10
    },
    countryImage: {
        width: 200,
        height: 120
    },
    countryText: {
        fontSize: 30,
    },
    loadingText: {
        fontSize: 50,
    }
})