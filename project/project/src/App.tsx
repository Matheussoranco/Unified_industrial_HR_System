import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Requests from './pages/Requests';
import Analysis from './pages/Analysis';
import Backlog from './pages/Backlog';
import Reports from './pages/Reports';
import ChemicalProducts from './pages/ChemicalProducts';
import { useStore } from './store/useStore';

function App() {
  const { setCurrentUser } = useStore();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [re, setRe] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate AD authentication
      setIsAuthenticated(true);
      setCurrentUser({
        name: 'MATHEUS PULLIG S DE CARVALHO',
        role: 'User'
      });
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex bg-[#0B0F1E]">
        {/* Left side with illustration */}
        <div className="w-1/2 p-12 flex flex-col">
          <div className="flex items-center gap-4">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA1MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAxNWgxMHYtNWgzMHYtNWgxMHY1aDEwdjVoLTEwdjVoLTEwdi01aC0zMHY1aC0xMHYtNXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" 
              alt="Truck Icon"
              className="h-8 w-auto"
            />
            <span className="text-white text-2xl font-bold">DAIMLER</span>
          </div>
          <div className="flex-1 flex flex-col justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Produtos Químicos</h1>
            <p className="text-xl">
              Aplicação para consulta e administração de<br />
              Produtos Químicos Homologados
            </p>
          </div>
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAyNTBoMTAwdjUwaDMwMHY1MGgxMDB2LTUwaDEwMHYtNTBoLTEwMHYtNTBoLTEwMHY1MGgtMzAwdi01MGgtMTAwdjUweiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yNTAgMjAwaDEwMHY1MGgtMTAwdi01MHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTUwIDMwMGgyMDB2NTBoLTIwMHYtNTB6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTUwIDIwMGgxMDB2NTBoLTEwMHYtNTB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" 
            alt="Warehouse Illustration"
            className="w-full max-w-lg mt-8"
          />
        </div>

        {/* Right side with login form */}
        <div className="w-1/2 bg-white flex items-center justify-center p-12">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <div className="bg-[#3B4859] text-white py-3 px-4 rounded-lg text-center mb-4">
                    RE
                  </div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registro
                  </label>
                  <input
                    type="text"
                    value={re}
                    onChange={(e) => setRe(e.target.value)}
                    placeholder="Digite seu RE"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#6BC1B8] hover:bg-[#5AA99F] text-white rounded-lg font-medium transition-colors"
                >
                  Acessar
                </button>
                <button
                  type="button"
                  className="w-full py-3 px-4 bg-[#3B4859] hover:bg-[#2D3A47] text-white rounded-lg font-medium transition-colors"
                >
                  Acesso com chave TBDIR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="backlog" element={<Backlog />} />
          <Route path="reports" element={<Reports />} />
          <Route path="chemical-products" element={<ChemicalProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;