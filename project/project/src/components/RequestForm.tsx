import React from 'react';
import { useStore } from '../store/useStore';

const RequestForm = ({ onClose }: { onClose: () => void }) => {
  const { addRequest } = useStore();
  const [formData, setFormData] = React.useState({
    requesterName: '',
    project: '',
    department: '',
    itemType: '',
    description: '',
    supplier: '',
    classification: '',
    urgency: 'low' as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRequest({
      id: crypto.randomUUID(),
      requestNumber: `REQ-${Date.now()}`,
      entryDate: new Date(),
      status: 'new',
      ...formData,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Solicitante</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.requesterName}
            onChange={(e) => setFormData(prev => ({ ...prev, requesterName: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Projeto</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.project}
            onChange={(e) => setFormData(prev => ({ ...prev, project: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Área/Setor</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.department}
            onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
          >
            <option value="">Selecione...</option>
            <option value="RH">RH</option>
            <option value="TI">TI</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Operações">Operações</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Item</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.itemType}
            onChange={(e) => setFormData(prev => ({ ...prev, itemType: e.target.value }))}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            required
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fornecedor</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.supplier}
            onChange={(e) => setFormData(prev => ({ ...prev, supplier: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Urgência</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.urgency}
            onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value as 'low' | 'medium' | 'high' }))}
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
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

export default RequestForm;