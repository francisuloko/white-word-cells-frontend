import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getCells = () => axios.get(`${API_URL}cells`, { headers: authHeader() });

const deleteCell = (cell) =>
  axios.delete(`${API_URL}cells/${cell.id}`, { headers: authHeader() });

const editCell = (data) => {
  authorization = authHeader();
  axios.put({
    url: `${API_URL}cells/${data.id}`,
    body: data,
    headers: {
      authorization,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const createCell = (data) => {
  authorization = authHeader();
  axios.post({
    url: `${API_URL}cells`,
    body: data,
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
