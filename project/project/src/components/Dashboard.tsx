import React from 'react';
import { Activity, Brain, Utensils, Trophy } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Bem-vindo ao Move On</h1>
        <p className="text-gray-600 mt-2">Sua jornada para uma vida mais saudável começa aqui</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Activity className="h-8 w-8 text-green-500" />}
          title="Saúde Física"
          value="75%"
          label="Meta Atingida"
        />
        <MetricCard
          icon={<Brain className="h-8 w-8 text-blue-500" />}
          title="Saúde Mental"
          value="82%"
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

function EventItem({ title, date, description }: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <li className="border-l-4 border-purple-500 pl-4">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-purple-600">{date}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </li>
  );
}

function TipItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="border-l-4 border-green-500 pl-4">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </li>
  );
}

export default Dashboard;