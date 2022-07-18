import React, { useState } from "react"
import axios from "axios"

const useAxios = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    return [data, loading, error, getData];
}


export default useAxios;