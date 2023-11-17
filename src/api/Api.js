import axios from "axios"

export const postUser = async (userData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, userData);
    return response.data;
}

export const postJob = async (jobData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/add-job`, jobData);
    return response.data;
}

export const appliedJob = async (jobData) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/applied-jobs`, jobData);
    return response.data;
}

export const getAllJobs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-jobs`);
    return response.data;
}

export const getSingleJob = async (jobId) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-jobs/${jobId}`);
    return response.data;
}

export const getAppliedJobs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/applied-jobs/`, { withCredentials: true} );
    return response.data;
}

export const deleteJob = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/my-jobs/${id}`);
    return response.data;
}
