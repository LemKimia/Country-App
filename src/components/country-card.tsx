import {View, Text, StyleSheet, Image} from "react-native";
import {Country} from "../helpers/api-type";

interface Props {
    country: Country
}

const CountryCard = (props: Props) => {
    const {country} = props;

    return (
        <View style={style.countryContainer}>
            <Image
                src={country.flags.png}
                alt={country.flags.alt}
                style={style.countryImage}
            />
            <Text style={style.countryLabel}>{country.name.common}</Text>
        </View>
    )
}

export default CountryCard;

const style = StyleSheet.create({
    countryContainer: {
        width: 160,
        height: 150,
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
    },
    countryImage: {
        width: "100%",
        height: 100
    },
})