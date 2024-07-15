import {View, FlatList, Text, StyleSheet, ListRenderItem, Image} from "react-native";
import useCountryStore from "../../store/store";
import {Favourite} from "../../helpers/api-type";

const FavouriteCountry = () => {
    const {favouriteCountry} = useCountryStore((state) => state)

    const renderItem: ListRenderItem<Favourite> = (item) => {
        return (
            <View>
                <Image
                    src={item.item.flags}
                    style={styles.countryImage}
                />
                <Text>{item.item.name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={favouriteCountry}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default FavouriteCountry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3F4F4',
    },
    listContainer: {
        width: 350,
        height: "70%"
    },
    countryImage: {
        width: 200,
        height: 120
    },
})