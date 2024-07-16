// noinspection JSIgnoredPromiseFromCall

import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useEffect} from "react";

import {useLocalSearchParams} from 'expo-router'
import useCountryStore from "../../store/store";
import FavouriteButton from "../../components/favourite-button";

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
        <View style={styles.container}>
            {countryStateDetails && countryStateDetails.length > 0 ? (
                <View style={styles.innerContainer}>
                    <Image
                        src={countryStateDetails[0].flags.png}
                        alt={countryStateDetails[0].flags.alt}
                        style={styles.countryImage}
                    />
                    <Pressable onPress={countryNameDetailPopup}>
                        <Text style={styles.countryText}>You are in {countryStateDetails[0].name.common}</Text>
                    </Pressable>
                    <FavouriteButton />
                </View>
            ) : (
                <Pressable onPress={countryNameDetailPopup}>
                    <Text style={styles.countryText}>We're still on our way to {country}</Text>
                </Pressable>
            )}
        </View>
    )
}

export default CountryDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3F4F4',
        gap: 10
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    countryImage: {
        width: 200,
        height: 120
    },
    countryText: {
        fontSize: 20,
    },
    favouriteButton: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 18,
        borderColor: "#C4DFDF",
        backgroundColor: "#D2E9E9",
    },
    favouriteText: {
        fontSize: 20,
    },
    loadingText: {
        fontSize: 50,
    }
})