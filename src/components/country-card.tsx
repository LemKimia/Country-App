import React, {memo} from "react";
import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import {Link} from 'expo-router'
import {Country} from "../helpers/api-type";

interface Props {
    country: Country
}

const CountryCard = (props: Props) => {
    const {country} = props;

    return (
        <View style={style.countryContainer}>
            <Link href={`/${country.name.common}`} asChild>
                <Pressable style={style.countryImageContainer}>
                    <Image
                        src={country.flags.png}
                        alt={country.flags.alt}
                        style={style.countryImage}
                    />
                </Pressable>
            </Link>
            <Text numberOfLines={2} style={style.countryLabel}>{country.name.common}</Text>
        </View>
    )
}

export default memo(CountryCard);

const style = StyleSheet.create({
    countryContainer: {
        width: 160,
        height: 160,
        marginHorizontal: 5,
        marginVertical: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        borderWidth: 2,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#F8F6F4',
    },
    countryLabel: {
        fontSize: 20,
        alignSelf: "center",
        padding: 1,
    },
    countryImageContainer: {
        width: "100%",
        height: 100,
    },
    countryImage: {
        width: "100%",
        height: 100
    },
})