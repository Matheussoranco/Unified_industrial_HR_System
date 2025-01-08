import React from 'react';
import { Clock, Users as Servings, ChefHat, Search } from 'lucide-react';

function Recipes() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Receitas Saudáveis</h1>
        <p className="text-gray-600 mt-2">Descubra receitas nutritivas e deliciosas</p>
      </header>

      <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar receitas..."
          className="flex-1 border-none focus:ring-0"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecipeCard
          title="Bowl de Açaí Proteico"
          image="https://images.unsplash.com/photo-1546039907-7fa05f864c02"
          time="10 min"
          servings="2"
          chef="Nutricionista Ana"
          difficulty="Fácil"
        />
        <RecipeCard
          title="Salada de Quinoa"
          image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71"
          time="20 min"
          servings="4"
          chef="Chef Carlos"
          difficulty="Médio"
        />
        <RecipeCard
          title="Smoothie Verde"
          image="https://images.unsplash.com/photo-1610970881699-44a5587cabec"
          time="5 min"
          servings="1"
          chef="Nutricionista Paula"
          difficulty="Fácil"
        />
      </div>
    </div>
  );
}

function RecipeCard({ title, image, time, servings, chef, difficulty }: {
  title: string;
  image: string;
  time: string;
  servings: string;
  chef: string;
  difficulty: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Servings className="w-4 h-4" />
            <span>{servings} porções</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600">{chef}</span>
          </div>
          <span className="text-sm font-medium text-purple-600">{difficulty}</span>
        </div>
      </div>
    </div>
  );
}

export default Recipes;