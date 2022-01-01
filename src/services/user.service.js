import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

const getCells = () => axios.get(`${API_URL}cells`, { headers: authHeader() });

const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });

const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });

const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

const userService = {
  getCells,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService;
