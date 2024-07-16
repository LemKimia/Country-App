import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import useCountryStore from "../store/store";

const FavoriteModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
        ? "Unsave"
        : "Save"

    const resultLabel = !isFavourite
        ? `You removed ${countryStateDetails[0].name.common} from your favourite country list`
        : `You make ${countryStateDetails[0].name.common} as your favorite`


    const setFav = () => {
        if (isFavourite === null) {
            alert("Please wait")
        } else if (isFavourite) {
            removeFavouriteCountry(countryStateDetails[0].name.common)
        } else {
            addFavouriteCountry(countryStateDetails[0].name.common, countryStateDetails[0].flags.png)
        }
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{resultLabel}</Text>
                        <Pressable
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Ok</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={!isFavourite ? styles.button : [styles.button, {backgroundColor: 'red'}]}
                onPress={() => {
                    setModalVisible(true)
                    setFav()
                }}>
                <Text style={!isFavourite ? styles.textStyle : [styles.textStyle, {color: 'white'}]}>{favouriteLabel}</Text>
            </Pressable>
        </View>
    );
};

export default FavoriteModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: 80,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#aafcb8"
    },
    textStyle: {
        color: "#285943",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
