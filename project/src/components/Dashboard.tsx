import React, { useState } from 'react';
import { Activity, Brain, Utensils, Trophy } from 'lucide-react';

function Dashboard() {
  const [streak, setStreak] = useState(0); // Progresso da barra
  const [popupVisible, setPopupVisible] = useState(false); // Controle de visibilidade do popup
  const [currentLevel, setCurrentLevel] = useState(4); // Nível atual do usuário

  const handleTestStreak = () => {
    setStreak(100); // Preenche a barra
    setTimeout(() => {
      setPopupVisible(true); // Exibe o popup
      setTimeout(() => {
        setPopupVisible(false); // Esconde o popup após 3 segundos
        setCurrentLevel(currentLevel + 1); // Incrementa o nível
        setStreak(0); // Reseta a barra
      }, 3000);
    }, 1000); // Preenche a barra antes de mostrar o popup
  };

  return (
    <div className="space-y-8 p-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Bem-vindo ao Impulse</h1>
        <p className="text-gray-600 mt-2">Sua jornada para uma vida mais saudável começa aqui</p>

        {/* Hotstreak Text and Bar */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            {/* Nível Atual */}
            <span className="text-sm font-semibold text-gray-700">{currentLevel}</span>
            <div className="flex-1 mx-4">
              {/* Barra de progresso */}
              <div className="w-full h-2 bg-white border-2 border-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  style={{ width: `${streak}%`, transition: 'width 1s ease-out' }}
                />
              </div>
            </div>
            {/* Próximo Nível */}
            <span className="text-sm font-semibold text-gray-700">{currentLevel + 1}</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Activity className="h-8 w-8 text-green-500" />}
          title="Saúde Física"
          value="58%"
          label="Meta Atingida"
        />
        <MetricCard
          icon={<Brain className="h-8 w-8 text-blue-500" />}
          title="Saúde Mental"
          value="18%"
          label="Bem-estar"
        />
        <MetricCard
          icon={<Utensils className="h-8 w-8 text-orange-500" />}
          title="Nutrição"
          value="68%"
          label="Dieta Balanceada"
        />
        <MetricCard
          icon={<Trophy className="h-8 w-8 text-purple-500" />}
          title="Ranking"
          value="#42"
          label="Sua Posição"
        />
      </div>

      {/* Próximos Eventos e Dicas do Dia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Próximos Eventos</h2>
          <ul className="space-y-4">
            <EventItem
              title="Mover para Cuidar"
              date="Amanhã, 15:00"
              description="Sessão de exercícios em grupo"
            />
            <EventItem
              title="Rato de Academia"
              date="Quinta, 17:00"
              description="Treino funcional"
            />
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Dicas do Dia</h2>
          <ul className="space-y-4">
            <TipItem
              title="Hidratação"
              description="Lembre-se de beber água regularmente durante o dia"
            />
            <TipItem
              title="Pausas Ativas"
              description="Faça pequenas pausas para alongamento a cada 2 horas"
            />
          </ul>
        </section>
      </div>

      {/* Botão Testar Streak */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleTestStreak}
          className="bg-orange-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-orange-600 transition"
        >
          <span>Testar Streak</span>
        </button>
      </div>

      {/* Popup de "Subiu de Nível" */}
      {popupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-xl text-center">
          <span className="text-4xl text-orange-500">🏆</span>
            <div className="flex justify-center items-center space-x-4 text-4xl font-bold text-gray-800">
              <span className="text-yellow-400">{currentLevel}</span>
              <span className="text-gray-500">→</span>
              <span className="text-orange-500">{currentLevel + 1}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Você subiu de nível!</h2>
            <p className="text-gray-600 mt-2">Parabéns por completar mais um marco na sua jornada!</p>
          </div>
        </div>
      )}
    </div>
  );
}

function MetricCard({ icon, title, value, label }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-2xl font-bold text-purple-600">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}

function EventItem({ title, date, description }: { title: string; date: string; description: string }) {
  return (
    <li>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{date}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </li>
  );
}

function TipItem({ title, description }: { title: string; description: string }) {
  return (
    <li>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </li>
  );
}

export default Dashboard;
