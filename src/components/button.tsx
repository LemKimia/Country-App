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
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 3
    },
    buttonLabel: {
        color: '#285943',
        fontSize: 13
    },
})