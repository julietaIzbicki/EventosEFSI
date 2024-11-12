import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://yuke.ddns.net:3103/api/dai/event',
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
const setAuthorizationHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      userApi.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete userApi.defaults.headers['Authorization']; 
    }
  }
};

userApi.interceptors.request.use((config) => {
  setAuthorizationHeader();
  return config;
}, (error) => {
  return Promise.reject(error);
});
*/

export const event = async () => {
  try {
    const response = await userApi.get();
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const eventDetails = async (id) => {
  try {
    const response = await userApi.get(`/${id}`);
    console.log(response.data.response[0]);
    return response.data.response[0];
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};
