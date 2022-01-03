import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/';
const authorization = authHeader();

const getCells = () => axios
  .get(`${API_URL}cells`, { headers: authorization })
  .then((response) => response);

const deleteCell = (cell) => axios.delete(`${API_URL}cells/${cell.id}`, { headers: authorization });

const editCell = (cell) => {
  axios.put({
    url: `${API_URL}cells/${cell.id}`,
    body: cell,
    headers: {
      authorization,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const createCell = (cell) => {
  axios.post({
    url: `${API_URL}cells`,
    body: cell,
    headers: {
      authorization,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const userService = {
  getCells,
  deleteCell,
  editCell,
  createCell,
};

export default userService;
