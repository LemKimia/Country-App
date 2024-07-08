
import axios from "axios";

export const getNation = async () => {
    const url = "https://restcountries.com/v3.1/all"

    try {
        const response = await axios.get(url)

        return response.data
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
};
