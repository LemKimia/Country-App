import {StatusBar} from 'expo-status-bar';
import {useEffect} from "react";
import {StyleSheet, View, Text} from 'react-native';

import CustomListHeaderComponent from "../../components/custom-list-header-component";
import CustomFlatlist from "../../components/custom-flatlist";

import useCountryStore from "../../store/store";

const Homepage = () => {
    const {countryStateData, fetchCountry} = useCountryStore((state) => state)

    useEffect(() => {
        fetchCountry()
    }, []);

    if (countryStateData.length < 1) {
        return (
            <View style={styles.container}>
                <Text>Something is wrong ;-;</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <CustomListHeaderComponent/>
            <View style={styles.listContainer}>
                <CustomFlatlist />
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    listContainer: {
        width: 350,
        height: "70%"
    }
});
