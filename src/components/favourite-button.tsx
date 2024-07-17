import {Pressable, Text, StyleSheet} from "react-native";
import useCountryStore from "../store/country-store";
import useFavoriteStore from "../store/favorite-store";

const FavouriteButton = () => {
    const {countryStateDetails} = useCountryStore((state) => state)
    const {
        favouriteCountry,
        addFavouriteCountry,
        removeFavouriteCountry
    } = useFavoriteStore((state) => state)

    const isFavourite = countryStateDetails.length > 0
        ? favouriteCountry.some(fav => fav.name === countryStateDetails[0].name.common)
        : null

    const favouriteLabel = isFavourite
        ? "Unsave"
        : "Save"

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
        <Pressable onPress={handlePress} style={!isFavourite ? styles.saveButton : [styles.saveButton, {backgroundColor: "red"}]}>
            <Text style={!isFavourite ? styles.saveText : [styles.saveText, {color: '#ffffff'}]}>{favouriteLabel}</Text>
        </Pressable>
    )
}

export default FavouriteButton

const styles = StyleSheet.create({
    saveButton: {
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#aafcb8",
    },
    saveText: {
        fontSize: 15,
        fontWeight: "bold",
        alignItems: "center",
        color: "#285943",
    },
})