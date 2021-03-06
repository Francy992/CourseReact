import axios from "axios";

const baseUrl = "http://localhost:3001/heroes";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const create = (newObj) => {
    const request = axios.post(baseUrl, newObj);
    return request.then(response => response.data);
};

const update = (newObj) => {
    const request = axios.put(baseUrl + "/" + newObj.id, newObj);
    return request.then(response => response.data);
};

const deleteObj = (id) => {
    const request = axios.delete(baseUrl + "/" + id);
    return request.then(response => response.data);
};

export default {
    getAll,
    create,
    update,
    delete: deleteObj
}