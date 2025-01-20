import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8800', // URL do backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token no cabeçalho
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
