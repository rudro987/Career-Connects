import axios from "axios"

export const postUser = async (userData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);
    return response.data;
}

export const postJob = async (jobData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, jobData);
    return response.data;
}