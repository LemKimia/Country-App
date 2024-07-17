import {View, FlatList, Text, StyleSheet, ListRenderItem, Image} from "react-native";
import useCountryStore from "../../store/store";
import {Favourite} from "../../helpers/api-type";

const FavouriteCountry = () => {
    const {favouriteCountry} = useCountryStore((state) => state)

    const renderItem: ListRenderItem<Favourite> = (item) => {
        return (
            <View style={styles.countryContainer}>
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
                    key={2}
                    numColumns={2}
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
        backgroundColor: '#d7fff1',
        padding: 10
    },
    listContainer: {
        width: "100%",
        height: "100%"
    },
    countryContainer: {
        width: 200,
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
    countryImage: {
        width: "100%",
        height: 120
    },
})