import {View, Pressable, Text, StyleSheet} from "react-native";

interface Props {
    handlePress: () => void;
    buttonLabel: string;
}

export default function Button(props: Props) {
    const {handlePress, buttonLabel} = props

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonLabel}>{buttonLabel}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D2E9E9",
        borderWidth: 4,
        borderColor: "#C4DFDF",
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
        color: 'black',
        fontSize: 30,
    },
})