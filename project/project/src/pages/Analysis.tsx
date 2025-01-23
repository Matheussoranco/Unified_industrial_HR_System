import React from 'react';
import { useStore } from '../store/useStore';
import { Plus, Search, Filter, ClipboardList } from 'lucide-react';
import Modal from '../components/Modal';
import AnalysisForm from '../components/AnalysisForm';

const Analysis = () => {
  const { analyses, requests } = useStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRequestId, setSelectedRequestId] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredAnalyses = analyses.filter((analysis) =>
    analysis.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
    requests.find(r => r.id === analysis.requestId)?.requestNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Análises Técnicas</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={20} />
          Nova Análise
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar análises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
          <Filter size={20} />
          Filtros
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnalyses.map((analysis) => {
          const request = requests.find(r => r.id === analysis.requestId);
          return (
            <div key={analysis.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">Solicitação #{request?.requestNumber}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(analysis.receivedDate).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm
                  ${analysis.status === 'completed' ? 'bg-green-100 text-green-800' :
                    analysis.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'}`}>
                  {analysis.status === 'completed' ? 'Concluído' :
                    analysis.status === 'in_progress' ? 'Em Andamento' :
                      'Pendente'}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Técnico:</strong> {analysis.technician}
                </p>
                <p className="text-sm">
                  <strong>Observações:</strong> {analysis.observations}
                </p>
                {analysis.forwarded && (
                  <p className="text-sm">
                    <strong>Reencaminhado para:</strong> {analysis.forwarded}
                  </p>
                )}
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ClipboardList size={16} />
                  Ver Detalhes
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nova Análise Técnica"
      >
        {selectedRequestId && (
          <AnalysisForm
            requestId={selectedRequestId}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedRequestId(null);
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default Analysis;