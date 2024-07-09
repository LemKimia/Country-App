import {View, Text, TextInput, StyleSheet} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
    keywordForName: string
    keywordForContinent: string
    setKeywordForName: (text: string) => void;
    setKeywordForContinent: (text: string) => void;
}

const CustomListHeaderComponent = (props: Props) => {
    const {keywordForName, keywordForContinent, setKeywordForName, setKeywordForContinent} = props
    const countryContinentOptions = [
        'Africa',
        'Antarctica',
        'asia',
        'Europe',
        'n orth america',
        'Oceania',
        'South America'
    ]

    const selectedItemToUppercase = (selectedItem: string) => {
        if (!selectedItem) {
            return selectedItem
        }

        const firstAlphabetInPosition = selectedItem.charAt(0).toUpperCase()
        const restOfAlphabet = selectedItem.slice(1).toLowerCase()

        return firstAlphabetInPosition + restOfAlphabet
    }

    return (
        <View style={style.container}>
            <View style={style.textInputContainer}>
                <TextInput
                    onChangeText={setKeywordForName}
                    placeholder={'Search by Common Name'}
                    value={keywordForName}
                />
            </View>
            <View style={style.dropdownContainer}>
                <SelectDropdown
                    data={countryContinentOptions}
                    onSelect={(selectedItem) => {
                        setKeywordForContinent(selectedItem)
                    }}
                    renderButton={(selectedItem, isOpen) => {
                        return (
                            <View>
                                <Text
                                    style={selectedItem ? {opacity: 1} : style.selectedItem}>{selectedItemToUppercase(selectedItem) || 'Search by Continent'}</Text>
                            </View>
                        )
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={style.categoryContainer}>
                                <Text style={style.categoryLabel}>{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default CustomListHeaderComponent

const style = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    textInputContainer: {
        width: 175,
        padding: 2,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#C4DFDF",
        backgroundColor: "#D2E9E9",
    },
    dropdownContainer: {
        justifyContent: "center",
        width: 150,
        padding: 2,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#C4DFDF",
        backgroundColor: "#D2E9E9",
    },
    categoryContainer: {
        flex: 1,
        justifyContent: "center"
    },
    categoryLabel: {
        fontWeight: "normal",
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
    },
    selectedItem: {
        opacity: 0.4
    }
})