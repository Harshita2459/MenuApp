import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // your backend route

export const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/login`, { username, password });
  return res.data;
};

export const register = async (username, password, role = 'user') => {
  const res = await axios.post(`${API_URL}/register`, { username, password, role });
  return res.data;
};
