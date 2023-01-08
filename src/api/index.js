import axios from "axios";

export const getProducts = async () => {
    return axios.get("https://fakestoreapi.com/products");
};

export const getProductDetail = async (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
};

export const auth = async ({ username, password }) => {
    return axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password
    });
};