// noinspection JSIgnoredPromiseFromCall

import {View, Text, Pressable, StyleSheet, Image, ScrollView} from 'react-native';
import {useEffect} from "react";

import {useLocalSearchParams} from 'expo-router'
import useCountryStore from "../../store/store";
import SectionHeaderText from "../../components/section-header-text";
import FavoriteModal from "../../components/fav-modal";
import LabeledValue from "../../components/country-detail-label";

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
                    <FavoriteModal/>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Basic Information</SectionHeaderText>
                    <LabeledValue label={'Official Name :'} value={countryStateDetails[0].name.official}/>
                    <LabeledValue label={'Region :'} value={countryStateDetails[0].region}/>
                    <LabeledValue label={'Capital :'} value={countryStateDetails[0].capital}/>
                    <LabeledValue label={'Population :'} value={countryStateDetails[0].population}/>
                    <LabeledValue label={'Area :'} value={countryStateDetails[0].area}/>
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Code and Symbol</SectionHeaderText>
                    <LabeledValue label={'Top-Level Domain :'} value={countryStateDetails[0].tld}/>
                    <Text style={{fontWeight: '500'}}>Currency : </Text>
                    {Object.entries(countryStateDetails[0].currencies).map(
                        ([currencyCode, currency]) => (
                            <Text style={{marginLeft: 20}} key={currencyCode}>{`${currency.name} (${currency.symbol})`}</Text>
                        )
                    )}
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Language</SectionHeaderText>
                    <Text style={{fontWeight: '500'}}>Official Language : </Text>
                    {Object.entries(countryStateDetails[0].languages).map(
                        ([languageKey, language]) => (
                            <Text style={{marginLeft: 20}} key={languageKey}>{language}</Text>
                        )
                    )}
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Geographical Information</SectionHeaderText>
                    <LabeledValue label={'Coordinates :'} value={countryStateDetails[0].latlng}/>
                    <Text style={{fontWeight: '500'}}>Timezone : </Text>
                    {countryStateDetails[0].timezones.map((timezone, index) => (
                        <Text style={{marginLeft: 20}} key={index}>{timezone}</Text>
                    ))}
                </View>
                <View style={styles.informationContainer}>
                    <SectionHeaderText>Maps</SectionHeaderText>
                    <LabeledValue label={'Google Maps :'} value={countryStateDetails[0].maps.googleMaps}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default CountryDetail;

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 10,
        color: '#285943'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: '#285943'
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
        fontWeight: 'bold',
        color: '#285943'
    },
    loadingText: {
        fontSize: 50,
    }
})