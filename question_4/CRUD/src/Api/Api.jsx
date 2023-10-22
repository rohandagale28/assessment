import axios from "axios";

const base_url = 'https://crud-server-ochre.vercel.app/register'

export const createUser = async (data) => {
    try {
        const res = await axios.post(base_url, data)
        return res.data
    }
    catch (error) {
        return error
    }
}

export const getUsers = async () => {
    try {
        const res = await axios.get(base_url)
        return res.data
    }
    catch (error) {
        return error
    }
}

export const updateUser = async (id, data) => {
    try {
        const res = await axios.put(`${base_url}/${id}`, data)
        return res.data
    }
    catch (error) {
        return error
    }
}