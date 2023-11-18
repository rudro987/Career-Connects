import axios from "axios"

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true
});

export const postUser = async (userData) => {
    const response = await axiosSecure.post('/users', userData);
    return response.data;
}

export const postJob = async (jobData) => {
    const response = await axiosSecure.post('/add-job', jobData);
    return response.data;
}

export const appliedJob = async (jobData) => {
    const response = await axiosSecure.post('/applied-jobs', jobData);
    return response.data;
}

export const getAllJobs = async () => {
    const response = await axiosSecure.get('/all-jobs');
    return response.data;
}

export const getSingleJob = async (jobId, email) => {
    const response = await axiosSecure.get(`/all-jobs/${jobId}?email=${email}`);
    return response.data;
}

export const getAppliedJobs = async (email) => {
    const response = await axiosSecure.get(`/applied-jobs/?email=${email}` );
    return response.data;
}

export const deleteJob = async (id) => {
    const response = await axiosSecure.delete(`/my-jobs/${id}`);
    return response.data;
}
