import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/";

const getCells = () => axios.get(`${API_URL}cells`, { headers: authHeader() });

const deleteCell = (cell) =>
  axios.delete(`${API_URL}cells/${cell.id}`, { headers: authHeader() });

const editCell = (cell) => {
  authorization = authHeader();
  axios.put({
    url: `${API_URL}cells/${cell.id}`,
    body: cell,
    headers: {
      authorization,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const createCell = (cell) => {
  authorization = authHeader();
  axios.post({
    url: `${API_URL}cells`,
    body: cell,
    headers: {
      authorization,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const getUserBoard = () =>
  axios.get(`${API_URL}user`, { headers: authHeader() });

const getModeratorBoard = () =>
  axios.get(`${API_URL}mod`, { headers: authHeader() });

const getAdminBoard = () =>
  axios.get(`${API_URL}admin`, { headers: authHeader() });

const userService = {
  getCells,
  deleteCell,
  editCell,
  createCell,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService;
