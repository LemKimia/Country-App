import {View, Text, Pressable, StyleSheet} from 'react-native';

import {useLocalSearchParams, Link} from 'expo-router'

const CountryDetail = () => {
    const loc = useLocalSearchParams()

    const handlePress = () => {
       alert(`You went back from ${loc.pathname}`)
    }

    return (
        <View style={styles.container}>
            <Link href={"/"} asChild>
                <Pressable onPress={handlePress}>
                    <Text>TES</Text>
                </Pressable>
            </Link>
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
    }
})