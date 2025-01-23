import React from 'react';
import { useStore } from '../store/useStore';

const AnalysisForm = ({ requestId, onClose }: { requestId: string; onClose: () => void }) => {
  const { addAnalysis } = useStore();
  const [formData, setFormData] = React.useState({
    technician: '',
    results: '',
    observations: '',
    forwarded: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAnalysis({
      id: crypto.randomUUID(),
      requestId,
      receivedDate: new Date(),
      status: 'pending',
      ...formData,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Responsável Técnico</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.technician}
            onChange={(e) => setFormData(prev => ({ ...prev, technician: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Resultados</label>
          <textarea
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.results}
            onChange={(e) => setFormData(prev => ({ ...prev, results: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Observações</label>
          <textarea
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.observations}
            onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Reencaminhar para</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.forwarded}
            onChange={(e) => setFormData(prev => ({ ...prev, forwarded: e.target.value }))}
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AnalysisForm;