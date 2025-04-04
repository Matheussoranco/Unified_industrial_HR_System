import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Users, ChefHat, Trophy, Home, UserCircle, LogOut, Briefcase } from 'lucide-react';
 
function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
 
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
 
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">Move on</span>
          </Link>
         
          <div className="flex items-center space-x-6">
            <NavLink to="/" icon={<Home />} text="Dashboard" />
            <NavLink to="/health-tracker" icon={<Activity />} text="Saúde" />
            <NavLink to="/community" icon={<Users />} text="Comunidade" />
            <NavLink to="/recipes" icon={<ChefHat />} text="Receitas" />
            <NavLink to="/programs" icon={<Trophy />} text="Programas" />
            <NavLink to="/humanresources" icon={<Briefcase />} text="Recursos Humanos" />
           
            {user.name ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-purple-50"
                  >
                    <UserCircle className="w-4 h-4" />
                    <span>Perfil</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-purple-50 w-full"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sair</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-600 hover:text-purple-600"
              >
                <UserCircle className="w-5 h-5" />
                <span>Entrar</span>
              </Link>
            )}
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