import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://yuke.ddns.net:3103/api/dai/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      throw new Error('Ya estás autenticado');
    }
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
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail(username)) {
    throw new Error("El correo electrónico no es válido");
  }
  if (!nombre || !apellido || !password) {
    throw new Error("Todos los campos son obligatorios");
  }
  try {
    const response = await userApi.post('/register', {
      first_name: nombre,
      last_name: apellido,
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error de registro:', error.response.data);
    } else {
      console.error('Error de red o configuración:', error.message);
    }
    throw error;
  }
};