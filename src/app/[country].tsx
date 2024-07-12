// noinspection JSIgnoredPromiseFromCall

import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useEffect} from "react";

import {useLocalSearchParams} from 'expo-router'
import useCountryStore from "../store/store";

const CountryDetail = () => {

    const {
        countryStateDetails,
        fetchCountryDetail,
        favouriteCountry,
        addFavouriteCountry,
        removeFavouriteCountry
    } = useCountryStore((state) => state)

    const {country} = useLocalSearchParams()

    useEffect(() => {
        fetchCountryDetail(country)
    }, [country])

    const isFavourite = countryStateDetails.length > 0
     ? favouriteCountry.includes(countryStateDetails[0].name.common)
        : null

    const favouriteLabel = !isFavourite
        ? "Add as Favourite"
        : "Remove from Favourites"
    const favouriteButton = () => {
        if (isFavourite === null) {
            alert("Please wait")
        } else if (isFavourite) {
            removeFavouriteCountry(countryStateDetails[0].name.common)
            alert(`You removed ${countryStateDetails[0].name.common} from your favourite country list`)
        } else {
            addFavouriteCountry(countryStateDetails[0].name.common)
            alert(`You make ${countryStateDetails[0].name.common} as your favorite`)
        }

    }

    const countryNameDetailPopup = () => {
        countryStateDetails && countryStateDetails.length > 0
            ? alert(`The Country ${countryStateDetails[0].name.common} is officially known as ${countryStateDetails[0].name.official}`)
            : alert(`Routes to ${country} are long and wide`)
    }

    if (countryStateDetails[0].name.common !== country) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Loading . . .</Text>
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
                    <Pressable onPress={favouriteButton} style={styles.favouriteButton}>
                        <Text style={styles.favouriteText}>{favouriteLabel}</Text>
                    </Pressable>
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