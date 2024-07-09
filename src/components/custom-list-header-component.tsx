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
        'africa',
        'antarctica',
        'asia',
        'europe',
        'north america',
        'oceania',
        'south america'
    ]

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
                                <Text>{selectedItem || 'Search by Continent'}</Text>
                            </View>
                        )
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                        )
                    }}
                    // search
                    // searchInputTxtColor={'#151E26'}
                    // searchPlaceHolder={'Search here'}
                    // searchPlaceHolderColor={'#72808D'}
                    // renderSearchInputLeftIcon={() => {
                    //     return <FontAwesome name={'search'} color={'#72808D'} size={18}/>;
                    // }}
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
        width: 150,
        padding: 2,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#C4DFDF",
        backgroundColor: "#D2E9E9",
    }
})