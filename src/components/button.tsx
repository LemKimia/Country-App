import {View, Pressable, Text, StyleSheet} from "react-native";

interface Props {
    handlePress: () => void;
    buttonLabel: string;
}

export default function Button(props: Props) {
    const {handlePress, buttonLabel} = props

    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handlePress}>
                <Text style={styles.buttonLabel}>{buttonLabel}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#aafcb8",
    },
    buttonLabel: {
        color: 'black',
        fontSize: 10,
        fontWeight: '500'
    },
})