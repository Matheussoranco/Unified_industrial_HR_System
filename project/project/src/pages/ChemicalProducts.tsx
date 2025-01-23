import React from 'react';
import { useStore } from '../store/useStore';
import { Search, Filter } from 'lucide-react';

const ChemicalProducts = () => {
  const { products } = useStore();
  const [filters, setFilters] = React.useState({
    materialCode: '',
    productName: '',
    as1: '',
    as2: '',
    supplier: '',
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Produtos Químicos</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Filtro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Código do Material</label>
              <input
                type="text"
                value={filters.materialCode}
                onChange={(e) => setFilters(prev => ({ ...prev, materialCode: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome do Produto</label>
              <input
                type="text"
                value={filters.productName}
                onChange={(e) => setFilters(prev => ({ ...prev, productName: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">AS1</label>
              <input
                type="text"
                value={filters.as1}
                onChange={(e) => setFilters(prev => ({ ...prev, as1: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">AS2</label>
              <input
                type="text"
                value={filters.as2}
                onChange={(e) => setFilters(prev => ({ ...prev, as2: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fornecedor</label>
              <select
                value={filters.supplier}
                onChange={(e) => setFilters(prev => ({ ...prev, supplier: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Selecione</option>
                <option value="supplier1">Fornecedor 1</option>
                <option value="supplier2">Fornecedor 2</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setFilters({ materialCode: '', productName: '', as1: '', as2: '', supplier: '' })}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Limpar
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center text-gray-500">
          Nenhum dado a ser exibido por enquanto...
        </div>
      </div>
    </div>
  );
};

export default ChemicalProducts;