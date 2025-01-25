import React from 'react';
import { Calendar, Trophy, Users, ArrowRight } from 'lucide-react';

function Programs() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Programas</h1>
        <p className="text-gray-600 mt-2">Participe dos programas exclusivos da empresa</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgramCard
          title="Mover para Cuidar"
          description="Sessões de exercícios em grupo focadas em movimento e bem-estar"
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
          participants={45}
          duration="8 semanas"
          nextSession="Terça, 15:00"
        />
        <ProgramCard
          title="Rato de Academia"
          description="Programa de treino funcional para todos os níveis"
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
          participants={32}
          duration="12 semanas"
          nextSession="Quinta, 17:00"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Ranking dos Programas</h2>
        <div className="space-y-4">
          <RankingItem
            name="Ana Oliveira"
            program="Mover para Cuidar"
            points={850}
            position={1}
          />
          <RankingItem
            name="Carlos Lima"
            program="Rato de Academia"
            points={720}
            position={2}
          />
          <RankingItem
            name="Patricia Santos"
            program="Mover para Cuidar"
            points={680}
            position={3}
          />
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ title, description, image, participants, duration, nextSession }: {
  title: string;
  description: string;
  image: string;
  participants: number;
  duration: string;
  nextSession: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-4 space-y-4">
        <p className="text-gray-600">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="w-5 h-5" />
            <span>{participants} participantes</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-purple-600 font-medium">
            Próxima sessão: {nextSession}
          </span>
          <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
            <span>Participar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function RankingItem({ name, program, points, position }: {
  name: string;
  program: string;
  points: number;
  position: number;
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
          position === 1 ? 'bg-yellow-400' :
          position === 2 ? 'bg-gray-300' :
          'bg-orange-400'
        } text-white font-semibold`}>
          {position}
        </span>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{program}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Trophy className="w-5 h-5 text-purple-600" />
        <span className="font-semibold text-purple-600">{points} pts</span>
      </div>
    </div>
  );
}

export default Programs;