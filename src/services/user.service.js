import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/';
const authorization = authHeader();

const getCells = () => axios.get(`${API_URL}cells`, { headers: authorization });

const deleteCell = (cell) => {
  axios({
    method: 'delete',
    url: `${API_URL}cells/${cell.id}`,
    headers: authorization,
  });
};

const editCell = (cell) => {
  axios({
    method: 'put',
    url: `${API_URL}cells/${cell.id}`,
    data: cell,
    headers: authorization,
  });
};

const createCell = (cell) => {
  axios({
    url: `${API_URL}cells`,
    method: 'post',
    data: cell,
    headers: authorization,
  });
};

const userService = {
  getCells,
  deleteCell,
  editCell,
  createCell,
};

export default userService;
