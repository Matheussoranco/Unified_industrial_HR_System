import React from 'react';
import { useStore } from '../store/useStore';
import { Download, Calendar } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Reports = () => {
  const { requests, analyses } = useStore();

  const requestsByDepartment = {
    labels: ['RH', 'TI', 'Financeiro', 'Operações', 'Marketing'],
    datasets: [{
      label: 'Solicitações por Área',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
    }],
  };

  const analysisStatus = {
    labels: ['Pendente', 'Em Andamento', 'Concluído'],
    datasets: [{
      data: [3, 7, 15],
      backgroundColor: [
        'rgba(255, 206, 86, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
    }],
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
            <Calendar size={20} />
            Período
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
            <Download size={20} />
            Exportar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Solicitações por Área</h3>
          <Bar data={requestsByDepartment} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Status das Análises</h3>
          <Pie data={analysisStatus} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Tempo Médio de Atendimento</h3>
          <div className="text-3xl font-bold text-blue-600">3.2 dias</div>
          <p className="text-sm text-gray-500">Média dos últimos 30 dias</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Índice de Satisfação</h3>
          <div className="text-3xl font-bold text-green-600">4.8/5.0</div>
          <p className="text-sm text-gray-500">Baseado em 45 avaliações</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Taxa de Conclusão</h3>
          <div className="text-3xl font-bold text-purple-600">92%</div>
          <p className="text-sm text-gray-500">Solicitações concluídas no prazo</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;