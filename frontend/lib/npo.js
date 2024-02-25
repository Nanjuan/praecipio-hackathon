import axios from 'axios';

export const getNpo = async (id) => {
    try {
        const { data: { data } } = await axios.get(`${process.env.API_URL}/data`, {
            params: {
                name: id
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Could not fetch NPO');
    }
}

export const getNpoRating = async (id) => {
    try {
        const { data: { data } } = await axios.get(`${process.env.API_URL}/score`, {
            params: {
                name: id
            }
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Could not fetch NPO rating');
    }
}

export const getNpos = async () => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/npo`);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Could not fetch NPOs');
    }
}