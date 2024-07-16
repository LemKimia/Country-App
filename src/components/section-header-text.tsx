import {View, Text, StyleSheet} from "react-native";
import React from "react";

interface Props {
    children?: React.ReactNode;
}

const SectionHeaderText = (props: Props) => {
    const {children} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.sectionText}>{children}</Text>
        </View>
    )
}

export default SectionHeaderText;

const styles = StyleSheet.create({
    container: {
      alignSelf: "center"
    },
    sectionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#285943'
    }
})