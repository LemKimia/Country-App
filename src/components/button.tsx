import {View, Pressable, Text, StyleSheet} from "react-native";

export default function Button() {
    const handlePress = async () => {
        alert("hola")
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonLabel}>Test</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#E8C5E5",
        borderWidth: 4,
        borderColor: "#F19ED2",
        borderRadius: 18
    },
    button: {
        borderRadius: 5,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#F7F9F2',
        fontSize: 16,
    },
})