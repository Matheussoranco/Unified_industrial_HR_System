import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Box } from 'lucide-react';

function Login() {
  const navigate = useNavigate();

  const handleMicrosoftLogin = () => {
    // TODO: Implement Microsoft AD authentication
    // For now, simulate login
    localStorage.setItem('user', JSON.stringify({
      name: 'João Silva',
      email: 'joao.silva@empresa.com',
      department: 'Tecnologia',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    }));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <LogIn className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao Move On</h1>
          <p className="text-gray-600 mt-2">Entre com sua conta corporativa</p>
        </div>

        <button
          onClick={handleMicrosoftLogin}
          className="w-full flex items-center justify-center space-x-2 bg-[#2F2F2F] text-white px-4 py-3 rounded-lg hover:bg-[#1F1F1F] transition-colors"
        >
          <Box className="w-5 h-5" />
          <span>Entrar com Microsoft</span>
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Use sua conta corporativa para acessar a plataforma.</p>
          <p className="mt-2">Em caso de problemas, contate o suporte de TI.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;