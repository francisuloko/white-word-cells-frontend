import axios from 'axios';

const whiteWordCellsAPI = axios.create({
  baseURL: 'https://whitewordcells.herokuapp.com/api/v1/',
  withCredentials: true,
});

export default whiteWordCellsAPI;
