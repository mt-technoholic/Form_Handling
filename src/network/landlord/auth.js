import axios from "axios";
const baseUrl = "https://digitalappbackend.technoholicasprojects.com";

const login = async (values) => {
  const res = await axios.post(`${baseUrl}/api/auth/landlord/login`, values);
  return res.data;
};

export { login };
