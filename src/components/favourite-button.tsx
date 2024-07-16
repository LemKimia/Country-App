import {Pressable, Text, StyleSheet} from "react-native";
import useCountryStore from "../store/store";

const FavouriteButton = () => {
    const {
        countryStateDetails,
        favouriteCountry,
        addFavouriteCountry,
        removeFavouriteCountry
    } = useCountryStore((state) => state)

    const isFavourite = countryStateDetails.length > 0
        ? favouriteCountry.some(fav => fav.name === countryStateDetails[0].name.common)
        : null

    const favouriteLabel = isFavourite
        ? "Remove from Favourites"
        : "Add as Favourite"

    const handlePress = () => {
        if (isFavourite === null) {
            alert("Please wait")
        } else if (isFavourite) {
            removeFavouriteCountry(countryStateDetails[0].name.common)
            alert(`You removed ${countryStateDetails[0].name.common} from your favourite country list`)
        } else {
            addFavouriteCountry(countryStateDetails[0].name.common, countryStateDetails[0].flags.png)
            alert(`You make ${countryStateDetails[0].name.common} as your favorite`)
        }
    }

    return (
        <Pressable onPress={handlePress} style={styles.favouriteButton}>
            <Text style={styles.favouriteText}>{favouriteLabel}</Text>
        </Pressable>
    )
}

export default FavouriteButton

const styles = StyleSheet.create({
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
})