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
        const renderButtonLabel = (selectedItem: string) => keywordForContinent ? selectedItem : 'Category'

        return (
            <View>
                <Text
                    style={!keywordForContinent ? {opacity: 0.4} : style.selectedItem}>{renderButtonLabel(selectedItem)}</Text>
            </View>
        )
    }

    const renderItem = (item: string) => {
        return (
            <View style={style.categoryMenu}>
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
                    style={{ color: '#285943'}}
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
                    dropdownStyle={style.dropdownMenuStyle}
                />
            </View>
            {(keywordForContinent || keywordForName) && (
                <Button handlePress={resetButton} buttonLabel={buttonLabel}/>
            )}
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
        marginBottom: 10
    },
    textInputContainer: {
        justifyContent: 'center',
        alignItems: "center",
        width: 100,
        padding: 2,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 3
    },
    dropdownContainer: {
        justifyContent: "center",
        alignItems: 'center',
        width: 100,
        padding: 2,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 3
    },
    dropdownMenuStyle: {
        width: 100,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    categoryMenu: {
        justifyContent: "center",
    },
    categoryLabel: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
    },
    selectedItem: {
        opacity: 1,
        color: '#285943'
    }
})