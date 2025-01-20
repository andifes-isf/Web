import React, { useState, useEffect } from 'react';
import api from '../services/api';

const TestConnection = () => {
  // Definindo o estado para armazenar a resposta e possíveis erros
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/usuario'); // Certifique-se de usar o endpoint correto
        setResponseData(response.data);
      } catch (error) {
        setError('Erro ao conectar com o backend');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Teste de Conexão com o Backend</h1>
      {responseData && <p style={{ color: 'green' }}>{JSON.stringify(responseData)}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TestConnection;
