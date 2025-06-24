import React, { useState } from 'react';
import { Activity, Brain, Heart, Weight, Apple, Droplets, Coffee, Target } from 'lucide-react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface HealthMetrics {
  heartRate: number;
  weight: number;
  activities: string[];
}

function HealthTracker() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('nutrition');
  const [metrics, setMetrics] = useState<HealthMetrics | null>(null);
  React.useEffect(() => {
    axios.get<HealthMetrics>('http://localhost:4000/api/health-metrics').then((res) => setMetrics(res.data));
  }, []);
  return (
<div className="space-y-6">
   <header>
      <h1 className="text-3xl font-bold text-gray-800">Acompanhamento de Saúde</h1>
      <p className="text-gray-600 mt-2">Monitore seus indicadores de saúde e bem-estar</p>
   </header>
   <div className="flex space-x-4 border-b">
   <TabButton
      active={activeTab === 'nutrition'}
      onClick={() => setActiveTab('nutrition')}
      icon={
      <Apple />
      }
      text="Nutrição"
      />
      <TabButton
      active={activeTab === 'mental'}
      onClick={() => setActiveTab('mental')}
      icon={
      <Brain />
      }
      text="Mental"
      />
      <TabButton
      active={activeTab === 'physical'}
      onClick={() => setActiveTab('physical')}
      icon={
      <Activity />
      }
      text="Física"
      />
   </div>
   <div className="bg-white rounded-lg shadow-md p-6">
      {activeTab === 'physical' && 
      <PhysicalHealth />
      }
      {activeTab === 'mental' && 
      <MentalHealth />
      }
      {activeTab === 'nutrition' && 
      <Nutrition />
      }
   </div>
   <div>
      <h2 className="text-xl font-bold">{t('Métricas de Saúde')}</h2>
      {metrics ? (
        <ul>
          <li>{t('Frequência Cardíaca')}: {metrics.heartRate}</li>
          <li>{t('Peso')}: {metrics.weight} kg</li>
          <li>{t('Atividades')}: {metrics.activities.join(', ')}</li>
        </ul>
      ) : (
        <p>{t('Carregando métricas...')}</p>
      )}
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
function PhysicalHealth() {
return (
<div className="space-y-6">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MetricInput
      icon={
      <Heart />
      }
      label="Frequência Cardíaca"
      unit="bpm"
      defaultValue="75"
      />
      <MetricInput
      icon={
      <Weight />
      }
      label="Peso"
      unit="kg"
      defaultValue="70"
      />
   </div>
   <div className="space-y-4">
      <h3 className="text-lg font-semibold">Atividades Físicas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <ActivityLog
            activity="Corrida"
            duration="30 min"
            intensity="Moderada"
            date="Hoje"
            />
         <ActivityLog
            activity="Musculação"
            duration="45 min"
            intensity="Alta"
            date="Ontem"
            />
      </div>
   </div>
</div>
);
}
function MentalHealth() {
const [selectedEmoji, setSelectedEmoji] = useState("");
const [isInsideModalOpen, setIsInsideModalOpen] = useState(false);
const handleEmojiClick = (emoji: string) => {
setSelectedEmoji(emoji);
setTimeout(() => {
setSelectedEmoji("");
}, 3000);
};
const handleModalOpen = () => {
setIsInsideModalOpen(true);
};
const handleModalClose = () => {
setIsInsideModalOpen(false);
};
const handleSave = () => {
alert("Diário atualizado com sucesso!");
};
const handleSaveModal = () => {
alert("Formulário Enviado com Sucesso!");
};
return (
<div className="space-y-6 relative">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MoodTracker handleEmojiClick={handleEmojiClick} />
      <StressLevel />
   </div>
   <JournalEntry />
   {/* Exibir o emoji selecionado por alguns segundos */}
   {selectedEmoji && (
   <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-6xl">
      {selectedEmoji}
   </div>
   )}
   <div className="flex justify-end">
      <button 
         className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
         onClick={handleSave}
         >
      Salvar
      </button>
   </div>
   <div className="flex justify-end mt-4">
      <button 
         className="px-4 py-2 bg-green-500 text-white rounded-md w-full"
         onClick={handleModalOpen}
         >
      Projeto Inside
      </button>
   </div>
   {/* Modal Inside */}
   {isInsideModalOpen && (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
         <h2 className="text-lg font-bold mb-4">Análise Inside</h2>
         <form className="space-y-4">
            <div>
               <label className="block text-sm font-medium">Nome do Colaborador</label>
               <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">Nível de Bem-estar</label>
               <input
                  type="range"
                  min="0"
                  max="10"
                  className="w-full mt-1"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">
               1. Como você descreveria sua motivação no trabalho nos últimos dias?
               </label>
               <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">
               2. Você percebeu mudanças no seu humor ou energia recentemente?
               </label>
               <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">
               3. Há algo que esteja causando estresse ou preocupação no momento?
               </label>
               <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">
               4. Você sente que tem apoio suficiente para lidar com os desafios diários?
               </label>
               <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">
               5. O que você acredita que poderia melhorar sua experiência no ambiente de trabalho?
               </label>
               <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
            </div>
            <div>
               <label className="block text-sm font-medium">Comentários</label>
               <textarea
                  rows={4}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  ></textarea>
            </div>
            <div className="flex justify-end mt-4">
               <div className="flex justify-end space-x-4">
                  <button
                     className="px-4 py-2 bg-red-500 text-white rounded-md"
                     onClick={handleModalClose}
                     >
                  Fechar
                  </button>
                  <button
                     className="px-4 py-2 bg-blue-500 text-white rounded-md"
                     onClick={handleSaveModal}
                     >
                  Salvar
                  </button>
               </div>
            </div>
         </form>
      </div>
   </div>
   )}
</div>
);
}
function Nutrition() {
return (
<div className="space-y-6">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <WaterIntake />
      <MealTracker />
   </div>
   <NutritionGoals />
</div>
);
}
function MetricInput({ icon, label, unit, defaultValue }: {
icon: React.ReactNode;
label: string;
unit: string;
defaultValue: string;
}) {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <label className="flex items-center space-x-2 text-gray-700 mb-2">
   {icon}
   <span>{label}</span>
   </label>
   <div className="flex items-center space-x-2">
      <input
         type="number"
         defaultValue={defaultValue}
         className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
         />
      <span className="text-gray-500">{unit}</span>
   </div>
</div>
);
}
function ActivityLog({ activity, duration, intensity, date }: {
activity: string;
duration: string;
intensity: string;
date: string;
}) {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <h4 className="font-semibold text-gray-800">{activity}</h4>
   <div className="text-sm text-gray-600">
      <p>Duração: {duration}</p>
      <p>Intensidade: {intensity}</p>
      <p className="text-purple-600">{date}</p>
   </div>
</div>
);
}
function MoodTracker({ handleEmojiClick }: { handleEmojiClick: (emoji: string) => void }) {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <h3 className="font-semibold mb-3">Humor do Dia</h3>
   <div className="grid grid-cols-5 gap-2">
      {['😊', '😐', '😕', '😢', '😡'].map((emoji, index) => (
      <button
         key={index}
         className="text-2xl p-2 rounded-lg hover:bg-gray-200"
         onClick={() => handleEmojiClick(emoji)} // Chama a função handleEmojiClick passando o emoji
      >
      {emoji}
      </button>
      ))}
   </div>
</div>
);
}
function StressLevel() {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <h3 className="font-semibold mb-3">Nível de Estresse</h3>
   <input
      type="range"
      min="0"
      max="10"
      defaultValue="5"
      className="w-full"
      />
   <div className="flex justify-between text-sm text-gray-600">
      <span>Baixo</span>
      <span>Médio</span>
      <span>Alto</span>
   </div>
</div>
);
}
function JournalEntry() {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <h3 className="font-semibold mb-3">Diário de Bem-estar</h3>
   <textarea
      placeholder="Como você está se sentindo hoje?"
      className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      rows={4}
      />
</div>
);
}
function WaterIntake() {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <div className="flex items-center space-x-2 mb-3">
      <Droplets className="text-blue-500" />
      <h3 className="font-semibold">Consumo de Água</h3>
   </div>
   <div className="space-y-2">
      <div className="flex justify-between items-center">
         <span>Meta diária: 2L</span>
         <span className="text-blue-500">1.5L / 2L</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
         <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}>
      </div>
   </div>
   <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
   + Adicionar água
   </button>
</div>
</div>
);
}
function MealTracker() {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <div className="flex items-center space-x-2 mb-3">
      <Coffee className="text-orange-500" />
      <h3 className="font-semibold">Refeições do Dia</h3>
   </div>
   <div className="space-y-3">
      <div className="flex justify-between items-center">
         <span>Café da manhã</span>
         <span className="text-green-500">✓</span>
      </div>
      <div className="flex justify-between items-center">
         <span>Almoço</span>
         <span className="text-green-500">✓</span>
      </div>
      <div className="flex justify-between items-center">
         <span>Lanche</span>
         <button className="text-purple-600 text-sm">Registrar</button>
      </div>
      <div className="flex justify-between items-center">
         <span>Jantar</span>
         <button className="text-purple-600 text-sm">Registrar</button>
      </div>
   </div>
</div>
);
}
function NutritionGoals() {
return (
<div className="bg-gray-50 rounded-lg p-4">
   <div className="flex items-center space-x-2 mb-3">
      <Target className="text-purple-500" />
      <h3 className="font-semibold">Metas Nutricionais</h3>
   </div>
   <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
         <div className="text-sm text-gray-600">Proteínas</div>
         <div className="font-bold text-purple-600">80g</div>
         <div className="text-xs text-gray-500">Meta: 100g</div>
      </div>
      <div className="text-center">
         <div className="text-sm text-gray-600">Carboidratos</div>
         <div className="font-bold text-purple-600">150g</div>
         <div className="text-xs text-gray-500">Meta: 200g</div>
      </div>
      <div className="text-center">
         <div className="text-sm text-gray-600">Gorduras</div>
         <div className="font-bold text-purple-600">45g</div>
         <div className="text-xs text-gray-500">Meta: 60g</div>
      </div>
   </div>
</div>
);
}
export default HealthTracker;