const API_KEY = process.env.REACT_APP_API_KEY;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const urlMaker = ({path="", query}) => `${SERVER_URL}/${path}?s=${query}&apikey=${API_KEY}`;

const getBaseConfig = () => ({
  headers: {
    Accept: 'application/json',
  },
  mode: 'cors',
});

const handleResponse = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const request = (opts, config) => fetch(urlMaker(opts), config)
  .then(handleResponse)
  .then(response => response.json())
  .catch(e => console.error(e))

export const get = (opts) => request(opts, getBaseConfig());