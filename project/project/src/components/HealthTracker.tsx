import React, { useState } from 'react';
import { Activity, Brain, Heart, Weight, Apple } from 'lucide-react';

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

export default HealthTracker;