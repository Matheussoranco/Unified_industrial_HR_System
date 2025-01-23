import React from 'react';
import { useStore } from '../store/useStore';
import type { ChemicalProduct } from '../types';

const ChemicalProductForm = ({ onClose }: { onClose: () => void }) => {
  const { addProduct } = useStore();
  const [formData, setFormData] = React.useState<Partial<ChemicalProduct>>({
    materialCode: '',
    name: '',
    cas: '',
    un: '',
    hazardClass: '',
    packingGroup: '',
    flashPoint: 0,
    riskPhrases: [],
    safetyPhrases: [],
    storageClass: '',
    incompatibilities: [],
    manufacturer: '',
    supplier: '',
    fispq: {
      number: '',
      revision: '',
      date: new Date(),
      url: '',
    },
    storage: {
      maxQuantity: 0,
      currentQuantity: 0,
      unit: 'kg',
      location: '',
    },
    controlledProduct: false,
    controlAuthority: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({
      id: crypto.randomUUID(),
      ...formData as ChemicalProduct,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Código do Material</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.materialCode}
            onChange={(e) => setFormData(prev => ({ ...prev, materialCode: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Produto</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Número CAS</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.cas}
            onChange={(e) => setFormData(prev => ({ ...prev, cas: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Número ONU</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.un}
            onChange={(e) => setFormData(prev => ({ ...prev, un: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Classe de Risco</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.hazardClass}
            onChange={(e) => setFormData(prev => ({ ...prev, hazardClass: e.target.value }))}
          >
            <option value="">Selecione...</option>
            <option value="1">Classe 1 - Explosivos</option>
            <option value="2">Classe 2 - Gases</option>
            <option value="3">Classe 3 - Líquidos Inflamáveis</option>
            <option value="4">Classe 4 - Sólidos Inflamáveis</option>
            <option value="5">Classe 5 - Oxidantes</option>
            <option value="6">Classe 6 - Tóxicos</option>
            <option value="7">Classe 7 - Radioativos</option>
            <option value="8">Classe 8 - Corrosivos</option>
            <option value="9">Classe 9 - Diversos</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Grupo de Embalagem</label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.packingGroup}
            onChange={(e) => setFormData(prev => ({ ...prev, packingGroup: e.target.value }))}
          >
            <option value="">Selecione...</option>
            <option value="I">I - Alto Risco</option>
            <option value="II">II - Médio Risco</option>
            <option value="III">III - Baixo Risco</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Ponto de Fulgor (°C)</label>
          <input
            type="number"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.flashPoint}
            onChange={(e) => setFormData(prev => ({ ...prev, flashPoint: Number(e.target.value) }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fabricante</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.manufacturer}
            onChange={(e) => setFormData(prev => ({ ...prev, manufacturer: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fornecedor</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.supplier}
            onChange={(e) => setFormData(prev => ({ ...prev, supplier: e.target.value }))}
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">FISPQ</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Número"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.fispq?.number}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                fispq: { ...prev.fispq!, number: e.target.value }
              }))}
            />
            <input
              type="text"
              placeholder="Revisão"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.fispq?.revision}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                fispq: { ...prev.fispq!, revision: e.target.value }
              }))}
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Armazenamento</label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="number"
                placeholder="Quantidade Máxima"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.storage?.maxQuantity}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  storage: { ...prev.storage!, maxQuantity: Number(e.target.value) }
                }))}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Quantidade Atual"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.storage?.currentQuantity}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  storage: { ...prev.storage!, currentQuantity: Number(e.target.value) }
                }))}
              />
            </div>
            <div>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.storage?.unit}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  storage: { ...prev.storage!, unit: e.target.value }
                }))}
              >
                <option value="kg">kg</option>
                <option value="L">L</option>
                <option value="g">g</option>
                <option value="mL">mL</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={formData.controlledProduct}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                controlledProduct: e.target.checked
              }))}
            />
            <label className="ml-2 block text-sm text-gray-900">
              Produto Controlado
            </label>
          </div>
        </div>
        {formData.controlledProduct && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Órgão Controlador</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.controlAuthority}
                onChange={(e) => setFormData(prev => ({ ...prev, controlAuthority: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Número da Licença</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.licenseNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, licenseNumber: e.target.value }))}
              />
            </div>
          </>
        )}
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

export default ChemicalProductForm;