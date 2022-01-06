import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/';

const getCells = () => axios.get(`${API_URL}cells`, { headers: authHeader() });

const deleteCell = (cell) => {
  axios.delete(`${API_URL}cells/${cell.id}`, { headers: authHeader() });
};

const editCell = (cell) => {
  axios({
    method: 'put',
    url: `${API_URL}cells/${cell.id}`,
    data: cell,
    headers: authHeader(),
  });
};

const createCell = (cell) => {
  axios({
    url: `${API_URL}cells`,
    method: 'post',
    data: cell,
    headers: authHeader(),
  });
};

const userService = {
  getCells,
  deleteCell,
  editCell,
  createCell,
};

export default userService;
