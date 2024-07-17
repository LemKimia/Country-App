import {View, Text, TextInput, StyleSheet} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import useCountryStore from "../store/store";
import Button from "./button";

const CustomListHeaderComponent = () => {
    const {
        keywordForName,
        keywordForContinent,
        setKeywordForName,
        setKeywordForContinent
    } = useCountryStore((state) => state)
    const countryContinentOptions = [
        'Africa',
        'Antarctica',
        'Asia',
        'Europe',
        'North America',
        'Oceania',
        'South America'
    ]

    const renderButton = (selectedItem: string) => {
        const renderButtonLabel = (selectedItem: string) => selectedItem || 'Category'

        return (
            <View>
                <Text
                    style={selectedItem ? {opacity: 1} : style.selectedItem}>{renderButtonLabel(selectedItem)}</Text>
            </View>
        )
    }

    const renderItem = (item: string) => {
        return (
            <View style={style.categoryContainer}>
                <Text style={style.categoryLabel}>{item}</Text>
            </View>
        )
    }

    const buttonLabel = keywordForContinent || keywordForName ? "Reset List" : ''

    const resetButton = () => {
        setKeywordForName("")
        setKeywordForContinent("")
    }

    return (
        <View style={style.container}>
            <View style={style.textInputContainer}>
                <TextInput
                    onChangeText={setKeywordForName}
                    placeholder={'Search'}
                    value={keywordForName}
                />
            </View>
            <View style={style.dropdownContainer}>
                <SelectDropdown
                    data={countryContinentOptions}
                    onSelect={(selectedItem) => {
                        setKeywordForContinent(selectedItem)
                    }}
                    renderButton={renderButton}
                    renderItem={renderItem}
                />
            </View>
            <Button handlePress={resetButton} buttonLabel={buttonLabel}/>
        </View>
    )
}

export default CustomListHeaderComponent

const style = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexDirection: "row",
        gap: 10,
    },
    textInputContainer: {
        justifyContent: 'center',
        alignItems: "center",
        width: 100,
        padding: 2,
        borderRadius: 8,
        backgroundColor: "#aafcb8",
    },
    dropdownContainer: {
        justifyContent: "center",
        alignItems: 'center',
        width: 100,
        padding: 2,
        borderRadius: 8,
        backgroundColor: "#aafcb8",
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