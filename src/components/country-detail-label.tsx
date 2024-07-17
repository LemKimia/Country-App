import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    label: string;
    value: string | string[] | number | number[];
}

const LabeledValue = (props: Props) => {
    const {value, label} = props;

    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
                {Array.isArray(value) ? (
                    value.map((val, index) => (
                        <Text key={index} style={styles.valueText}>{val}</Text>
                    ))
                ) : (
                    <Text style={styles.valueText}>{value}</Text>
                )}
            </View>
        </View>
    );
};

export default LabeledValue;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    label: {
        fontWeight: '500',
        width: '40%',  // Adjust the width as needed
    },
    valueContainer: {
        width: '60%',  // Adjust the width as needed
    },
    valueText: {
        // Add any styling needed for the value text
    }
});
