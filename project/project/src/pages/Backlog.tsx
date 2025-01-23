import React from 'react';
import { useStore } from '../store/useStore';
import { Search, Filter, Clock, AlertTriangle } from 'lucide-react';

const Backlog = () => {
  const { requests } = useStore();
  const backlogRequests = requests.filter(r => r.status === 'delayed');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Backlog</h1>
        <div className="flex gap-2">
          <select className="border rounded-lg px-4 py-2">
            <option>Classificação</option>
            <option>Data de Entrada</option>
            <option>Urgência</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar no backlog..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <Filter size={20} />
          Filtros
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {backlogRequests.map((request) => (
          <div key={request.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">#{request.requestNumber}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(request.entryDate).toLocaleDateString()}
                </p>
              </div>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center gap-1">
                <AlertTriangle size={14} />
                Atrasado
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Solicitante:</strong> {request.requesterName}
              </p>
              <p className="text-sm">
                <strong>Projeto:</strong> {request.project}
              </p>
              <p className="text-sm">
                <strong>Descrição:</strong> {request.description}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock size={14} />
                Em atraso
              </span>
              <button className="text-blue-600 hover:text-blue-800">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backlog;