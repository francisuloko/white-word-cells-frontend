import axios from 'axios';

const whiteWordCellsAPI = axios.create({
  baseURL: 'https://whitewordcells.herokuapp.com/',
  // withCredentials: true,
  'Access-Control-Allow-Credentials': true,
});

export default whiteWordCellsAPI;
