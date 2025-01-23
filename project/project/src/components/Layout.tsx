import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileSpreadsheet, 
  Beaker,
  Clock, 
  BarChart3,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';

const Layout = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/requests', icon: FileSpreadsheet, label: 'Solicitações' },
    { path: '/analysis', icon: Beaker, label: 'Análises Técnicas' },
    { path: '/backlog', icon: Clock, label: 'Backlog' },
    { path: '/reports', icon: BarChart3, label: 'Relatórios' },
    { path: '/chemical-products', icon: Beaker, label: 'Produtos Químicos' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-4 flex items-center justify-between border-b">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <Beaker className="text-blue-600" size={24} />
            {!collapsed && <span className="font-bold text-xl">LabManager</span>}
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 hover:bg-gray-100 rounded-lg"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors
                ${location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
                ${collapsed ? 'justify-center' : ''}`}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {menuItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={20} className="text-gray-500" />
                <span className="text-sm font-medium">MATHEUS PULLIG S DE CARVALHO | User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;