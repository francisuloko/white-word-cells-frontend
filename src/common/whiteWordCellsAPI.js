import axios from 'axios';

const whiteWordCellsAPI = axios.create({
  baseURL: 'https://whitewordcells.herokuapp.com/api/v1/',
  // withCredentials: true,
  'Access-Control-Allow-Credentials': true,
});

export default whiteWordCellsAPI;
