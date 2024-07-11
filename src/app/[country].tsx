// noinspection JSIgnoredPromiseFromCall

import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useEffect, useState} from "react";

import {useLocalSearchParams} from 'expo-router'
import { getCountryDetail} from "../helpers/api";
import {Country} from "../helpers/api-type";

const CountryDetail = () => {
    const [countryDetail, setCountryDetail] = useState<Country[]>([])

    const {country} = useLocalSearchParams()

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
    },
    countryImage: {
        width: 200,
        height: 120
    },
    countryText: {
        fontSize: 20,
    }
})