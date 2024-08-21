import axios from "axios";
const baseUrl = "http://localhost:9000";
const headers = { "Authorization": `Bearer ${localStorage.getItem("token")}` };

console.log(headers);

const getLink = async (values) => {
    const res = await axios.get(`${baseUrl}/api/plaid/link-token_idv`, { headers });
    return res.data;
};

const complete_idv = async (values) => {
    const res = await axios.post(`${baseUrl}/api/plaid/complete-idv`, values, { headers });
    return res.data;
};

export { getLink, complete_idv };