import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useEffect, useState} from "react";

import {useLocalSearchParams} from 'expo-router'
import { getCountryDetail} from "../helpers/api";
import {Country} from "../helpers/api-type";

const CountryDetail = () => {
    const [countryDetail, setCountryDetail] = useState<Country[]>([])

    const {country} = useLocalSearchParams()

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await getCountryDetail(country)

                setCountryDetail(response)
            } catch (error: any) {
                alert(error.message)
            }
        }
        getCountry()
    }, [])

    const handlePress = () => {
        countryDetail && countryDetail.length > 0
            ? alert(`You are in ${countryDetail[0].name.common} officially known as ${countryDetail[0].name.official}`)
            : alert(`You are in ${country}`)
    }

    return (
        <View style={styles.container}>
            {countryDetail && countryDetail.length > 0 ? (
                <View>
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
    countryImage: {
        width: 200,
        height: 120
    },
    countryText: {
        fontSize: 20,
    }
})