import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, ChefHat, Trophy, Home } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">Impulse</span>
          </Link>
          
          <div className="flex space-x-6">
            <NavLink to="/" icon={<Home />} text="Dashboard" />
            <NavLink to="/health-tracker" icon={<Activity />} text="Saúde" />
            <NavLink to="/community" icon={<Users />} text="Comunidade" />
            <NavLink to="/recipes" icon={<ChefHat />} text="Receitas" />
            <NavLink to="/programs" icon={<Trophy />} text="Programas" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;