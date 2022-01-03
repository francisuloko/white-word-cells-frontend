/* eslint-disable camelcase */
import axios from 'axios';

const API_URL = 'http://localhost:3001/';

const login = (email, password) => axios.post(`${API_URL}authenticate`, { email, password }).then((response) => {
  if (response.data.auth_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data.user;
});

const register = (name, email, password) => {
  axios.post(`${API_URL}signup`, {
    name,
    email,
    password,
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
