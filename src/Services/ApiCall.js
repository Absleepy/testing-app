import axios from "axios";

export const apiCall = async (path, method, data) => {

    // In real world applications, we will keep the endpoints in ENV file
    const URL = 'https://dummyjson.com/';

    try {
        let response = await axios({
            method: method,
            url: `${URL}${path}`,
            data: data,
        });

        return response;

    } catch (err) {
        return err?.data?.message || "Something Went Wrong :(";
    }
};
