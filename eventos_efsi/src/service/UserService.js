import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://yuke.ddns.net:3103/api/dai/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const response = await userApi.post('/login', {
      username: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const register = async (nombre, apellido, username, password) => {
  try {
    const response = await userApi.post('/register', {
      first_name: nombre,
      last_name: apellido,
      username: username,
      contrasena: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};