import React from 'react';
import { MessageSquare, ThumbsUp, Share2, Users } from 'lucide-react';

function Community() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Comunidade</h1>
        <p className="text-gray-600 mt-2">Conecte-se com outros participantes</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <PostForm />
          <div className="space-y-4">
            <Post
              author="Maria Silva"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              content="Acabei de completar minha primeira semana no programa Mover para Cuidar! Estou me sentindo mais disposta e energizada."
              likes={24}
              comments={8}
            />
            <Post
              author="João Santos"
              avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
              content="Dica de nutrição: Comecei a incluir mais proteínas vegetais no almoço e notei uma diferença incrível na minha energia durante a tarde!"
              likes={15}
              comments={5}
            />
          </div>
        </div>

        <div className="space-y-6">
          <LeaderboardCard />
          <ActiveUsersCard />
        </div>
      </div>
    </div>
  );
}

function PostForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <textarea
        placeholder="Compartilhe sua jornada de bem-estar..."
        className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        rows={3}
      />
      <div className="mt-3 flex justify-end">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Publicar
        </button>
      </div>
    </div>
  );
}

function Post({ author, avatar, content, likes, comments }: {
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-3 mb-4">
        <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold text-gray-800">{author}</h3>
          <p className="text-sm text-gray-500">Há 2 horas</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center space-x-4 text-gray-500">
        <button className="flex items-center space-x-1 hover:text-purple-600">
          <ThumbsUp className="w-5 h-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-purple-600">
          <MessageSquare className="w-5 h-5" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-purple-600">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function LeaderboardCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Top Participantes</h2>
      <div className="space-y-3">
        <LeaderboardItem name="Ana Oliveira" points={2500} position={1} />
        <LeaderboardItem name="Carlos Lima" points={2350} position={2} />
        <LeaderboardItem name="Patricia Santos" points={2200} position={3} />
      </div>
    </div>
  );
}

function LeaderboardItem({ name, points, position }: {
  name: string;
  points: number;
  position: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
          position === 1 ? 'bg-yellow-400' :
          position === 2 ? 'bg-gray-300' :
          'bg-orange-400'
        } text-white font-semibold`}>
          {position}
        </span>
        <span className="text-gray-800">{name}</span>
      </div>
      <span className="text-purple-600 font-semibold">{points} pts</span>
    </div>
  );
}

function ActiveUsersCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold">Usuários Ativos</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Usuário ativo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
          alt="Usuário ativo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          alt="Usuário ativo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">
          +12
        </div>
      </div>
    </div>
  );
}

export default Community;