import axios from 'axios';

export const getNpo = async (id) => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/npo/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Could not fetch NPO');
    }
}

export const getNpos = async () => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/npo`);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Could not fetch NPOs');
    }
}