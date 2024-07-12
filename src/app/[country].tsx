// noinspection JSIgnoredPromiseFromCall

import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useEffect, useState} from "react";

import {useLocalSearchParams} from 'expo-router'
import { getCountryDetail} from "../helpers/api";
import {Country} from "../helpers/api-type";
import useCountryStore from "../store/store";

const CountryDetail = () => {
    const [countryDetail, setCountryDetail] = useState<Country[]>([])

    const {favouriteCountry, setFavouriteCountry} = useCountryStore((state) => state)

    const {country} = useLocalSearchParams()

    const favouriteButton = () => {
        setFavouriteCountry(countryDetail[0].name.common)
        if (favouriteCountry === countryDetail[0].name.common) {
            alert(`You make ${favouriteCountry} as your favorite`)
        }
    }

    useEffect(() => {
            const fetchCountryData = async () => {
                try {
                    const response = await getCountryDetail(country)

                    setCountryDetail(response)
                } catch (error: any) {
                    alert(error.message)
                }
            }
            fetchCountryData()
        },
        [country])

    const handlePress = () => {

        countryDetail && countryDetail.length > 0
            ? alert(`The Country ${countryDetail[0].name.common} is officially known as ${countryDetail[0].name.official}`)
            : alert(`Routes to ${country} are long and wide`)
    }

    // noinspection com.intellij.reactbuddy.ArrayToJSXMapInspection
    return (
        <View style={styles.container}>
            {countryDetail && countryDetail.length > 0 ? (
                <View style={styles.innerContainer}>
                    <Image
                        src={countryDetail[0].flags.png}
                        alt={countryDetail[0].flags.alt}
                        style={styles.countryImage}
                    />
                    <Pressable onPress={handlePress}>
                        <Text style={styles.countryText}>You are in {countryDetail[0].name.common}</Text>
                    </Pressable>
                    <Pressable onPress={favouriteButton} style={styles.favouriteButton}>
                        <Text style={styles.favouriteText}>Favourite</Text>
                    </Pressable>
                </View>
            ) : (
                <Pressable onPress={handlePress}>
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
        width: 120,
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
    }
})