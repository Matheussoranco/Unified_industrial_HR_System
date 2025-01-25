import React, { useState } from 'react';
import { Activity, Brain, Heart, Weight, Apple, Droplets, Coffee, Target } from 'lucide-react';

function HealthTracker() {
  const [activeTab, setActiveTab] = useState('physical');

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Acompanhamento de Saúde</h1>
        <p className="text-gray-600 mt-2">Monitore seus indicadores de saúde e bem-estar</p>
      </header>

      <div className="flex space-x-4 border-b">
        <TabButton
          active={activeTab === 'physical'}
          onClick={() => setActiveTab('physical')}
          icon={<Activity />}
          text="Física"
        />
        <TabButton
          active={activeTab === 'mental'}
          onClick={() => setActiveTab('mental')}
          icon={<Brain />}
          text="Mental"
        />
        <TabButton
          active={activeTab === 'nutrition'}
          onClick={() => setActiveTab('nutrition')}
          icon={<Apple />}
          text="Nutrição"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'physical' && <PhysicalHealth />}
        {activeTab === 'mental' && <MentalHealth />}
        {activeTab === 'nutrition' && <Nutrition />}
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
          icon={<Heart />}
          label="Frequência Cardíaca"
          unit="bpm"
          defaultValue="75"
        />
        <MetricInput
          icon={<Weight />}
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
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MoodTracker />
        <StressLevel />
      </div>
      <JournalEntry />
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

function MoodTracker() {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold mb-3">Humor do Dia</h3>
      <div className="grid grid-cols-5 gap-2">
        {['😊', '😌', '😐', '😕', '😢'].map((emoji, index) => (
          <button key={index} className="text-2xl p-2 rounded-lg hover:bg-gray-200">
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
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
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