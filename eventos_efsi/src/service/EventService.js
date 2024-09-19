import axios from 'axios';
const userApi = axios.create({
  baseURL: 'http://yuke.ddns.net:3103/api/dai/event',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthorizationHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      userApi.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }
};
setAuthorizationHeader();

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
    return response.data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};