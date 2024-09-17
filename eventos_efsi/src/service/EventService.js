import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://yuke.ddns.net:3103/api/dai/event',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

export const event = async () => {
    try {
      const response = await userApi.get();
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};