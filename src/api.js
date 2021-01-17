import axios from "axios";

const instance = axios.create({
    baseURL: `http://127.0.0.1:5000/cosmetologyBuilds`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getFilteredName(filteredCosmetologtyBuildName) {
    return (await instance.get(`/search/${filteredCosmetologtyBuildName}`)).data;
}


export default instance;