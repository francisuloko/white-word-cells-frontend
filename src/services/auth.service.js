/* eslint-disable camelcase */
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';

const login = (email, password) => axios({
  method: 'post',
  url: `${API_URL}authenticate`,
  data: { email, password },
}).then((response) => {
  if (response.data.auth_token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data.name;
});

const register = (name, email, password) => {
  axios({
    url: `${API_URL}signup`,
    method: 'post',
    data: { name, email, password },
  }).then(() => {
    login(email, password);
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
