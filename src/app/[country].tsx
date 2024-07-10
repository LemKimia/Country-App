import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {useEffect, useState} from "react";

import {useLocalSearchParams, Link} from 'expo-router'
import { getCountryDetail} from "../helpers/api";
import {Country} from "../helpers/api-type";

const CountryDetail = () => {
    const [countryDetail, setCountryDetail] = useState<Country[]>([])

    const {country} = useLocalSearchParams()

    useEffect(() => {
        const getCountry = async () => {
            if (country !== undefined) {
                try {
                    const response = await getCountryDetail(country)

                    setCountryDetail(response)
                } catch (error: any) {
                    alert(error.message)
                }
            }
        }
        getCountry()
    }, [])

    const handlePress = () => {
       alert(`You are in ${country}`)
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}>
                <Text>You are in {country}</Text>
            </Pressable>
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
    },
    countryImage: {
        width: "100%",
        height: 100
    },
})