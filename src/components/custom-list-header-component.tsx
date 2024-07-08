import {View, TextInput, StyleSheet} from "react-native";

interface Props {
    keyword: string
    setKeyword: (text: string) => void;
}

const CustomListHeaderComponent = (props: Props) => {
    const {keyword, setKeyword} = props

    return (
        <View style={style.container}>
            <TextInput
                onChangeText={setKeyword}
                placeholder={'Search by Continent'}
                value={keyword}
            />
        </View>
    )
}

export default CustomListHeaderComponent

const style = StyleSheet.create({
    container: {
        width: 300,
        padding: 2,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#C4DFDF",
        backgroundColor: "#D2E9E9",
    }
})