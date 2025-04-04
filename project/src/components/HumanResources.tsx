import React, { useState } from 'react';
import { Users, Calendar, Briefcase, ArrowRight } from 'lucide-react';
 
function HumanResources() {
  const [activeTab, setActiveTab] = useState<'acompanhamento' | 'convenios'>('convenios');
 
  return (
    <div className="space-y-6 p-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Recursos Humanos</h1>
        <p className="text-gray-600 mt-2">Gerencie colaboradores e convênios da empresa</p>
      </header>
 
      <div className="flex space-x-4 border-b border-gray-200">
        <TabButton
          active={activeTab === 'convenios'}
          onClick={() => setActiveTab('convenios')}
          icon={<Briefcase />}
          text="Convênios"
        />
        <TabButton
          active={activeTab === 'acompanhamento'}
          onClick={() => setActiveTab('acompanhamento')}
          icon={<Users />}
          text="Acompanhamento de Colaboradores"
        />
      </div>
 
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'acompanhamento' && <EmployeeTracking />}
        {activeTab === 'convenios' && <Convenios />}
      </div>
    </div>
  );
}
 
function TabButton({ active, onClick, icon, text }: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
        active
          ? 'border-purple-500 text-purple-600'
          : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
 
function EmployeeTracking() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Acompanhamento de Colaboradores</h2>
      <p className="text-gray-600">
        Aqui você pode acompanhar o desempenho, feedbacks e métricas dos colaboradores.
      </p>
      {/* Adicione mais conteúdo aqui, como gráficos ou listas de colaboradores */}
    </div>
  );
}
 
function Convenios() {
  const convenios = [
    {
      nome: 'Colégio Apogeu',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WuiPIjfitbpxaW0gT_lrZNXWlGJcJlqNow&s',
      descricao: 'Descontos especiais para matrículas e mensalidades.',
      beneficios: ['Desconto de 20%', 'Material didático incluso'],
      contato: 'contato@apogeu.com',
    },
    {
      nome: 'Academia FitLife',
      logo: 'https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/partners/6fc2d405-d1c8-4b1e-b7f1-c86b511fa7fb/lg_8548d381-10f6-410e-830c-c8ca8c3a44f2_170D1D35702049F7BB0BF2A5DEFFB4D1.png',
      descricao: 'Planos de academia com descontos exclusivos para colaboradores.',
      beneficios: ['Desconto de 30%', 'Acesso ilimitado'],
      contato: 'contato@fitlife.com',
    },
    {
      nome: 'Unimed',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgQY7zP95-udzJgI9RqnRrn5hoYda1cPOqg&s',
      descricao: 'Consultas e exames com preços especiais.',
      beneficios: ['Desconto de 25%', 'Agendamento prioritário'],
      contato: 'contato@saudetotal.com',
    },
    {
      nome: 'Netshoes',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1tYNF8Bt1DFT2NeSo7xAVegLahIeGO0vLQ&s',
      descricao: 'Consultas e exames com preços especiais.',
      beneficios: ['Desconto de 25%', 'Agendamento prioritário'],
      contato: 'contato@saudetotal.com',
    },
  ];
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {convenios.map((convenio, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center">
              <img
                src={convenio.logo}
                alt={convenio.nome}
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">{convenio.nome}</h3>
            <p className="text-gray-600 mt-2">{convenio.descricao}</p>
            <ul className="mt-4 space-y-2">
              {convenio.beneficios.map((beneficio, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-600">
                  <ArrowRight className="w-4 h-4 text-purple-600" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Contato: <span className="text-purple-600">{convenio.contato}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default HumanResources;