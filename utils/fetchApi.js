import axios from "axios";




export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1d3a480136mshe0a1e0a3afa849bp1c325ajsn71bb426c355d'
        },
    });

    return data;
}



